import classes from './RegisterPage.module.css';
import Input from '../../components/Input/Input';
import Button, {ButtonTypes} from "../../components/Button/Button";
import Toast, {ToastTypes} from '../../components/Toast/Toast';
import { UserInput} from "../../models/user.model";

import {useNavigate} from "react-router";
import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {Actions} from "../../store/my-data-store";

import axios from "axios";

const defaultRegisterData = {
    username: "",
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState<UserInput>(defaultRegisterData);
    const [toastMessage, setToastMessage] = useState<string | undefined>(undefined)
    function changeDataHandler(e: ChangeEvent<HTMLInputElement> ) {
        setUserData(prevState => {
            return {...prevState, [e.target.name]: e.target.value};

        })
    }
    function cancelHandler() {
        navigate(-1);
    }
    async function registerUser() {
        console.log(userData);
        for(let [key,value] of Object.entries(userData)) {
            if(value.toString().trim() === "") {

                return;
            }
        }
        if(userData.password !== userData.confirmPassword) {
            return
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}user/register`,
                userData, {withCredentials: true});
                dispatch(({type: Actions.Login, payload: response.data.user}));
                navigate("/dashboard");
        } catch(err) {
            if(axios.isAxiosError(err)) {
                console.log(err.response?.data);
                const data = err.response?.data;
                setToastMessage(data.message);
                setTimeout(() => { setToastMessage(undefined);}, 2000);
                return;
            }

        }

    }
    return (
        <main className={classes['register-page']}>
            {toastMessage && <Toast message={toastMessage} header="Error" toastType={ToastTypes.Error}  />}
            <h1>Register</h1>
            <div className={classes['input-container']}>
                <div className={`${classes.username} ${classes.input}`}>
                    <Input label='Username' name="username" value={userData.username} onChange={changeDataHandler}  />
                </div>
                <div className={`${classes['display-name']} ${classes.input}`}>
                    <Input label='Display Name' name="displayName" value={userData.displayName} onChange={changeDataHandler}  />
                </div>
                <div className={`${classes.email} ${classes.input}`}>
                    <Input label='Email' name="email" value={userData.email} onChange={changeDataHandler}  />
                </div>
                <div className={`${classes.password} ${classes.input}`}>
                    <Input type="password" label='Password' name="password" value={userData.password} onChange={changeDataHandler} />
                </div>
                <div className={`${classes['confirm-password']} ${classes.input}`}>
                    <Input type="password" label='Confirm Password' name="confirmPassword" value={userData.confirmPassword} onChange={changeDataHandler} />
                </div>
                <Button label='Cancel' className={classes['cancel-button']} buttonType={ButtonTypes.BG} onClick={cancelHandler} />
                <Button label='Register' className={classes['register-button']} buttonType={ButtonTypes.Text} onClick={registerUser} />
            </div>
        </main>
    );
}

export default RegisterPage;