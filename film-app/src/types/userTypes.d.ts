type UserRegister = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

type UserLogin = {
    email: string,
    password: string
}

type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    imageFilename: string,
    authToken: string
}

type UserReturnWithEmail = {
    firstName: string,
    lastName: string,
    email:string
}

type UserReturn = {
    id: number
    firstName: string,
    lastName: string
}

type UserPatch = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    currentPassword: string
}
