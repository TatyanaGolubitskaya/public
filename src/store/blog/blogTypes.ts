import { userType } from "../user/userTypes";

export type commentType = {
    id: number,
    body: string,
    postId: number, 
    user: {
      id: number,
      username: string,
    },
}

export type subscriptionType = {
    id: number,
    profileId: number,
    title: string,
    description: string,
    price: number,
    image?: string, 
}

export type postType = {
    id: number,
    title: string,
    body: string,
    userId: number, 
    tags: string[],
    reactions: number,
    comments?: commentType[]
}

export type blogState = {
    profileUser: userType,
    posts: postType[],
    subs: subscriptionType[],
    isLoading: boolean,
    isSuccess: boolean,
    error?: string,
    isLoadingComments: boolean,
}