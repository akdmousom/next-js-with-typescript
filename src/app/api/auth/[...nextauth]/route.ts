import NextAuth from "next-auth/next";
import {configs} from './auth'

const handlers = NextAuth(configs)
export {handlers as GET, handlers as POST}