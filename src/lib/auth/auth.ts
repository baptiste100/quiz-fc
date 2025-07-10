import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import {resend} from "@/lib/auth/resend";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    emailAndPassword: {
        enabled: true,
        async sendResetPassword(data) {
            await resend.emails.send({
                from: "noreply@quizfc.app",
                to: data.user.email,
                subject: "Reset password",
                text: `Reset password : ${data.url}`
            })
        },
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }
    },
});