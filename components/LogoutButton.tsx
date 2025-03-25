"use client"
import { logoutActions } from '@/actions/users';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'sonner';
import { Button } from './ui/button';

const LogoutButton = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        try {

            setLoading(true)

             const response = await logoutActions();
        if(!response.ErrorMessage){
            router.push("/signin")

        } else {
            toast.info(
                "Succesfully logged out",
                {
                    description: "You have succesfully logged out",
                    
                }
            )
        }
            
        } catch (error) {
            setLoading(false)
            console.error(error)
            
        } finally {

            setLoading(false)
        }
       
    }
  return (
    <Button onClick={handleLogout} className='cursor-pointer'>Logout
            {loading ? 
            <div className='w-4 h-4 bg-white border-2 border-b-0 border-l-0 border-black animate-spin rounded-full'>

            </div> : ""}
        </Button>
  )
}

export default LogoutButton