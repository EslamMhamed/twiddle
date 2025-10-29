import User from "../models/user.model"
import { connectToDB } from "../mongoose"


type CreateUserParams = {
    userId: string,
    email: string,
    username: string,
    name: string,
    image: string
}

export async function createUser({userId,email, username, name, image}: CreateUserParams) {
    try {
        connectToDB()
        await User.create({
            id:userId, 
            username: username?.toLowerCase()
        })
    } catch (error: any) {
        throw new Error(`Failed to create user: ${error.message}`)
    }
}