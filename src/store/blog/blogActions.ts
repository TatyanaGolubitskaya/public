import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";



export const getUserProfile = createAsyncThunk(
    "blog/getUserProfile",
    async (username: string, thunkAPI) => {
        try {
            let profileUserRes = await api.get('users/filter?key=username&value=' +  username);
            if (profileUserRes.status !== 200) {
                return thunkAPI.rejectWithValue(profileUserRes.data);
            } 

            let userPostsRes = await api.get(`users/${profileUserRes.data.users[0].id}/posts`);

            if (userPostsRes.status !== 200) {
                return thunkAPI.rejectWithValue(userPostsRes.data);
            } 

            return [profileUserRes.data.users[0], userPostsRes.data.posts]
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }

    }
)

export const getPostComments = createAsyncThunk(
    "blog/getPostComments",
    async (postId: number, thunkAPI) => {
        try {
            let res = await api.get('comments/post/' +  postId);
            if (res.status !== 200) {
                return thunkAPI.rejectWithValue(res.data);
            } 

            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }

    }
)

export const getSubs = createAsyncThunk(
    "blog/getSubs",
    async (profileId: number, thunkAPI) => {
        try {
            // let res = await api.get('users/subs/' +  profileId);
            let res = SUBS.filter((sub) => {
                if (sub.profileId == profileId) {
                    return sub;
                }
            })
            // if (res.status !== 200) {
            //     return thunkAPI.rejectWithValue(res.data);
            // } 

            // return res.data;
            return res
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }

    }
)

const SUBS = [
    {
        id: 1,
        profileId: 15,
        title: 'bimbim',
        description: '(((hehehe)))',
        price: 2,
        image: 'hehhe',
    },
    {
        id: 2,
        profileId: 15,
        title: 'hoho',
        description: 'ufufufu',
        price: 2,
        image: 'hehhe',
    },
    {
        id: 3,
        profileId: 1,
        title: 'lululala',
        description: 'w;ksvlknn',
        price: 2,
        image: 'hehhe',
    }
]