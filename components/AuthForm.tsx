"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import Link from 'next/link'

type props = {
    type: "signin" | "signup"
    
}

const AuthForm = ({type}: props) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async(formDate: FormData) => {
        setIsLoading(true)

    }
  return (
    <div>
         <Card className="w-[450px] h-[500px]">
      <CardHeader>
        <CardTitle className='text-xl'>{type === "signin" ? "Login": "Signup"}</CardTitle>
        <CardDescription>{type === "signin" ? "Glad to have you back" : "Get started with your smart study"}</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">username</Label>
              <Input id="name" placeholder="elon" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input id="password" placeholder='password' />
              
            </div>
          </div>
        </form>

      </CardContent>
      <CardFooter className="flex flex-col justify-between items-start gap-3">
        
        <Button className='cursor-pointer'>{type === "signin" ? "Login" : "Create" }
            {isLoading ? 
            <div className='w-4 h-4 bg-white border-2 border-b-0 border-l-0 border-black animate-spin rounded-full'>

            </div> : ""}
        </Button>
        {type === "signin" ? <p>Don't have an account <Link className='underline italic' href={"/signup"}>create one</Link></p>: <p>Already have an account <Link href={"/signin"} className='underline italic'>signin</Link></p>}
      </CardFooter>
    </Card>

    </div>
  )
}

export default AuthForm