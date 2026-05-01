import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    
    baseURL: "https://book-borro.vercel.app"
})



// export const { signIn, signUp, useSession } = createAuthClient() 