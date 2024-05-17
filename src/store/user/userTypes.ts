export type userType = Partial<{
    id: number,
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    username: string,
    image: string,
}>

export type userState = {
    curUser: userType,
    isLoading: boolean,
    isSuccess: boolean,
    error?: string, // ????
    token: string,
}

export type userLoginData = {
    username: string,
    password: string,
}