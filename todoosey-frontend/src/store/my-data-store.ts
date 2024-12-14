import { configureStore } from "@reduxjs/toolkit";
import { User } from "./models";

export enum Actions {
    Login = "login"
}

export interface ReduxState {
    loggedIn: boolean,
    user: User
}

const initialState = {
    loggedIn: false,
    user: {id: -1, username: "", displayName: "", email: ""}
}

const myReducer = (state: ReduxState = initialState, action: { type: Actions, payload: any} ) => {
    switch(action.type) {
        case Actions.Login:
            return { ...state, loggedIn: true, user: action.payload};
        default:
            return state;
    }
}

const store = configureStore({reducer: myReducer});
export default store;