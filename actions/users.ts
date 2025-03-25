"use server"

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
    console.log(email, password , "fldkfsdl")

    try {
        const client = await createClient();
        console.log(client)
        const auth = client.auth
        console.log("reached here")
        const response= await auth.signUp({
            email, 
            password
        })

        console.log("here also")
        
        if(response.error){
            
            throw response.error

        }

        const user = response.data.user;
        const userId = user?.id;

        if(!userId) throw new Error("Error signin up");

        return {errorMessage: null}

        

    } catch (error) {

        return handleError(error)
        
    }

}