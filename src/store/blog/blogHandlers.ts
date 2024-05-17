import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getPostComments, getSubs, getUserProfile } from "./blogActions";
import { blogState } from "./blogTypes";


export const getUserProfileHandler = (builder: ActionReducerMapBuilder<blogState>) => {
    builder
        .addCase(getUserProfile.pending,
            (state) => {
                console.log("Loading...");
                state.isLoading = true;
                state.isSuccess = false;
                state.error = undefined

            }
        )
        .addCase(getUserProfile.rejected,
            (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                // state.error = action.payload
            }
        )
        .addCase(getUserProfile.fulfilled,
            (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.error = undefined;
                console.log(action);
                state.profileUser = action.payload[0];
                state.posts = action.payload[1];
            }
        )
}

export const getPostCommentsHandler = (builder: ActionReducerMapBuilder<blogState>) => {
    builder
        .addCase(getPostComments.pending,
            (state) => {
                state.isLoadingComments = true;
            }
        )
        .addCase(getPostComments.rejected,
            (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                // state.error = action.payload
            }
        )
        .addCase(getPostComments.fulfilled,
            (state, action) => {
                state.posts = state.posts.map((post) => {
                    if (post.id == action.payload.comments[0].postId) {
                        post.comments = action.payload.comments;
                    }
                    return post;
                })
            }
        )
}

export const getSubsHandler = (builder: ActionReducerMapBuilder<blogState>) => {
    builder
        .addCase(getSubs.pending,
            (state) => {
                state.isLoading = true;
            }
        )
        .addCase(getSubs.rejected,
            (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                // state.error = action.payload
            }
        )
        .addCase(getSubs.fulfilled,
            (state, action) => {
                state.subs = action.payload;
                state.isSuccess = true;
                state.isLoading = false;
            }
        )
}