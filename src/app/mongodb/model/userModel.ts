import mongoose, { Schema, model } from "mongoose";

interface userSchema {
    email: String,
    username: String,
    password: String,

}

const userSchema = new Schema<userSchema>({
    email: {type: String,  required: true,},
    username: {type: String,  required: true,},
    password: {type: String,  required: true,},
})

export const User = mongoose.models.User || mongoose.model<userSchema>('User', userSchema);

