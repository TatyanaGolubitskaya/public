import { createAsyncThunk } from "@reduxjs/toolkit/react";
import api from "../api";
import { userLoginData } from "./userTypes";

export const userLogin = createAsyncThunk(
    "user/userLogin",
    async (userLoginData: userLoginData, thunkAPI) => {
        try {
            let res = await api.post('auth/login', userLoginData);

            if (res.status !== 200) {
                return thunkAPI.rejectWithValue(res.data);
            }

            return res.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const getCurUser = createAsyncThunk(
    "user/getCurUser",
    async (token: string, thunkAPI) => {
        try {
            let res = await api.get('auth/me', {
                headers: {
                    Authorization: 'Bearer ' + token, 
                }
            });

            if (res.status !== 200) {
                return thunkAPI.rejectWithValue(res.data);
            }

            return res.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

