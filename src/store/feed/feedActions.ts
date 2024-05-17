import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getFeedPosts = createAsyncThunk(
    "feed/getFeedPosts",
    async (pageNum: number, thunkAPI) => {
        try {
            let skip = pageNum * 10 - 10;
            let res = await api.get('posts?limit=10&skip=' + skip);
            if (res.status !== 200) {
                return thunkAPI.rejectWithValue(res.data);
            } 

            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }

    }
)