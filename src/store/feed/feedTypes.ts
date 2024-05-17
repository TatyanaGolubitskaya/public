import { postType } from "../blog/blogTypes";

export type feedState = {
    posts: postType[],
    page: number,
    isLoading: boolean,
    isSuccess: boolean,
    error: string,
}