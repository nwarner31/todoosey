export type UserInput = {
    id?: number;
    username: string;
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const defaultUserData = {
    username: "",
    displayName: "",
    email: ""
}