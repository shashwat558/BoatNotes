"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import Link from 'next/link'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { loginAction, signupAction } from '@/actions/users'

type props = {
    type: "signin" | "signup"
    
}

const AuthForm = ({type}: props) => {

    const router = useRouter()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async(formData: FormData) => {
        setIsLoading(true)
        const email = formData.get("email") as string;
        
        const password = formData.get("password") as string;
        console.log(email, password)

        let errorMessage;
        let title;
        let description;
        if(type === "signin"){
          const loginResult = await loginAction(email, password);
          errorMessage = loginResult.errorMessage;
          title = "Logged in";
          description = "You have succesfully logged in";


         
        }else {
          const signupResult = await signupAction(email, password);
          errorMessage = signupResult?.errorMessage;
          
          title = "Signed up succesfully";
          description = "You have succesfully Signed Up now check your email";
        }

        if(!errorMessage){
          setIsLoading(false)
          toast.success(
            title,
            {
              description: description, 
            
            }
            
            
          );

          router.replace("/")
          
        } else {
          setIsLoading(false)
          toast.error(
            "Error",
            
            {
              description: errorMessage
            }
          )
        }
        
        

    }
  return (
    <div>
         <Card className="w-[450px] h-[500px]">
      <CardHeader>
        <CardTitle className='text-xl'>{type === "signin" ? "Login": "Signup"}</CardTitle>
        <CardDescription>{type === "signin" ? "Glad to have you back" : "Get started with your smart study"}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={async (e) => {

          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          console.log(formData)
          await handleSubmit(formData)
        }}>
          <div className="grid w-full items-center gap-4 mb-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">email</Label>
              <Input name='email' id="email" placeholder="elon@gmail.com..." />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input name='password' type='password' id="password" placeholder='password' />
              
            </div>
          </div>
          <Button type='submit' className='cursor-pointer'>{type === "signin" ? "Login" : "Create" }
            {isLoading ? 
            <div className='w-4 h-4 bg-white border-2 border-b-0 border-l-0 border-black animate-spin rounded-full'>

            </div> : ""}
        </Button>
        </form>

      </CardContent>
      <CardFooter className="flex flex-col justify-between items-start gap-3">
        
        
        {type === "signin" ? <p>Don't have an account <Link className='underline italic' href={"/signup"}>create one</Link></p>: <p>Already have an account <Link href={"/signin"} className='underline italic'>signin</Link></p>}
      </CardFooter>
    </Card>

    </div>
  )
}

export default AuthForm