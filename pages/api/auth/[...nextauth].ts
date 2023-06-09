import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/prisma/client";
//import { compare } from "bcrypt";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {},
      // @ts-ignore
      async authorize(credentials, _) {
        const {email, password } = credentials as {
          email: string;
          password: string;
        };
        if (!email || !password) {
          throw new Error("Missing username or password");
        }
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        // if user doesn't exist or password doesn't match
        if (!user || password !== user.password) {
          throw new Error("Invalid username or password");
        }
        return user;
      },
    }),
  ],
  callbacks:{
    async jwt({token}){

      const email = token?.email;
      let user: any;
      
      if(email){
        user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
      }
      
      token.role = user.role;
      return token;
    },
  }
});
