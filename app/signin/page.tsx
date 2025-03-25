import AuthForm from '@/components/AuthForm'
import Image from 'next/image'


import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen '>
        <div className='w-full h-full flex justify-center items-center flex-1 gap-6'>
            <div className='w-1/2 h-full flex justify-end items-center'>
               <Image src={"/bg2.png"} alt='pic' width={400} height={800} className='object-cover h-[500px] rounded-2xl brightness-75 border-[1.2px] border-gray-300 shadow-md' />
            </div>
            <div className='w-1/2 h-full flex justify-start items-center'>
              <AuthForm type='signin' />
              
            </div>
        </div>
    </div>
  )
}

export default page