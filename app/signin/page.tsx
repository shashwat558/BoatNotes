import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen'>
        <div className='w-full h-full flex justify-center items-center flex-1'>
            <div className='w-1/2 h-full'></div>
            <div className='w-1/2 h-full bg-black flex justify-center items-center'>
               <Card className="w-[450px] h-[500px]">
      <CardHeader>
        <CardTitle className='text-xl'>Login</CardTitle>
        <CardDescription>Glad to have you back. Welcome!</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">username</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
              
            </div>
        </div>
    </div>
  )
}

export default page