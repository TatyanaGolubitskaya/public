import { createSlice } from "@reduxjs/toolkit";
import { userState } from "./userTypes";
import { userHandlers, loginHandlers } from "./userHandlers";

const initialState: userState = {
    curUser: {},
    isLoading: false,
    isSuccess: false,
    error: '',
    token: localStorage.getItem('token') ?? ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        USER_LOGOUT(state) {
            state.curUser = {};
            state.error = '';
            state.isLoading = false;
            state.isSuccess = false;
            state.token = '';
            localStorage.removeItem('token');
        }
    },
    extraReducers(builder) {
        loginHandlers(builder);
        userHandlers(builder);
    }
})

export const { USER_LOGOUT } = userSlice.actions

export default userSlice.reducer