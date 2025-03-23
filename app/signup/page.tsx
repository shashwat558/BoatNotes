import AuthForm from '@/components/AuthForm'


import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen'>
        <div className='w-full h-full flex justify-center items-center flex-1'>
            <div className='w-1/2 h-full flex justify-center items-center'>
              <p className='text-2xl'>

                “Who are you and how did you get in here?!”
                <br />
                “I’m a locksmith, and, I’m a locksmith”.
            </p>
            </div>
            <div className='w-1/2 h-full bg-black flex justify-center items-center'>
              <AuthForm type='signup' />
              
            </div>
        </div>
    </div>
  )
}

export default page