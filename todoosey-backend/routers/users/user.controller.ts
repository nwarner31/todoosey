import {Request, Response} from "express";
import { hashSync } from 'bcrypt';
import {ErrorCodes, HttpException} from "../../utility/http-exception";
import {prisma} from "../../app";
import session from "express-session";

const selectUser = {
    id: true,
    username: true,
    displayName: true,
    email: true,
    password: false
}

export async function httpRegisterUser(req: Request, res: Response): Promise<any> {
    console.log(req.session.userId);
    const {confirmPassword, ...userData} = req.body;
    //console.log(newUser);
    console.log(confirmPassword);
    if (!userData.username || !userData.displayName || !userData.email || !userData.password || !confirmPassword) {
        throw new HttpException("Required information missing",ErrorCodes.REQUIRED_INFORMATION_MISSING, 400, null);
    }
    if (userData.password !== confirmPassword) {
        throw new HttpException("Passwords do not match", ErrorCodes.PASSWORDS_DO_NOT_MATCH, 400, null);
    }
    const user = await prisma.user.findFirst({
        where: {OR: [{username: userData.username},
                {displayName: userData.displayName},
                {email: userData.email}]}});
    if (user) {
        throw new HttpException("User already exists", ErrorCodes.USER_ALREADY_EXISTS, 400, null);
    }
    userData.password = hashSync(userData.password, 10);
    console.log(userData);
    const newUser = await prisma.user.create({
        data: userData,
        select: selectUser
    });
    console.log(newUser);
    req.session.userId = newUser.id;
    req.session.save(() => {res.status(200).json({user: newUser});});

}


