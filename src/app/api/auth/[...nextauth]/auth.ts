import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const configs: NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
              },

              async authorize(credentials, req): Promise<any> {
                  const user = {id: 21, username:'akd', password: 'akd'}

                  if(credentials?.username === user.username && credentials.password === user.password){
                    return user
                  }else{
                    return null
                  }
              },
        })
    ], secret: process.env.NEXTAUTH_SECRET
}