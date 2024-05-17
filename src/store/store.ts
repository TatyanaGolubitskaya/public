import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import userSlice from "./user/userSlice";
import blogSlice from "./blog/blogSlice";
import feedSlice from "./feed/feedSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        blog: blogSlice,
        feed: feedSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
