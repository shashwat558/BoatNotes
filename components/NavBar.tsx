import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './ModeChangingMenu'

const NavBar = () => {
  return (
    <header className='relative h-24 w-full flex item-center justify-between bg-popover px-3 sm:px-8 py-2 shadow-xl border-b-2 border-0 shadow-gray-800' >
        <Link href={"#"} className='flex items-center justify-center gap-3'>
           <Image src={"/boat.png"} alt='logo' width={60} height={60} className='shadow-2xl bg-gray-200 rounded-2xl hover:scale-105 transition ease-in-out duration-200'/>

           <h1 className='text-xl font-extrabold text-center hover:text-blue-300'>Boat <br />Notes</h1>
        </Link>

        <div className='flex items-center justify-center gap-5'>
            <ModeToggle />
            <Button asChild variant={"outline"} className='cursor-pointer'>
                <Link href={"/login"}>Login</Link>
            </Button>
            <Button variant={"outline"} className='cursor-pointer sm:block hidden'>
                <Link href={"/signup"}>
                  Signup

               </Link>
            </Button>
            
        </div>
        


    </header>
  )
}

export default NavBar