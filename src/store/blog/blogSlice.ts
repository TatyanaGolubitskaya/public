import { createSlice } from "@reduxjs/toolkit";
import { blogState } from "./blogTypes";
import { getPostCommentsHandler, getSubsHandler, getUserProfileHandler } from "./blogHandlers";

const initialState: blogState = {
    profileUser: {},
    posts: [],
    subs: [],
    isLoading: false,
    isSuccess: false,
    error: '',
    isLoadingComments: false,
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        getUserProfileHandler(builder);
        getPostCommentsHandler(builder);
        getSubsHandler(builder);
    },
})



export const { } = blogSlice.actions

export default blogSlice.reducer