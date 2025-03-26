"use server"

import { prisma } from "@/lib/prisma"
import { handleError } from "@/lib/utils"
import { createClient } from "@/lib/utils/supabase/server"

export const loginAction = async (email:string, password: string ) => {

    try {
        const {auth} = await createClient()

        const response= await auth.signInWithPassword({
            email, 
            password
        })
        if(response.error){
            throw response.error

        }

        return {errorMessage: null}

    } catch (error) {

        return handleError(error)
        
    }

}

export const signupAction = async (email:string, password: string ) => {
    

    try {
        const client = await createClient();
        
        const auth = client.auth
        
        const response= await auth.signUp({
            email, 
            password
        })

        
        
        if(response.error){
            
            throw response.error

        }

        const user = response.data.user;
        const userId = user?.id;

        await prisma.user.create({
            data: {
                id: userId,
                email: email
            }
        })

        if(!userId) throw new Error("Error signin up");

        return {errorMessage: null}

        

    } catch (error) {

        return handleError(error)
        
    }

}


export const logoutActions = async () => {
    const client = await createClient();
    const {error} = await client.auth.signOut();
    if(error){
        throw new Error
    }

    return {ErrorMessage: null}
}