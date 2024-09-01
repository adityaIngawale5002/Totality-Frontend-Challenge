import React, { useReducer } from 'react';
import { Button } from './ui/button';
import LogoIcon from './React-icon/LogoIcon'

import Link from 'next/link';
import { DrawerComponent } from './drawerComponent';


export const Navbar = () => {
  return (
    <div className='w-full border-box   h-20 font-sans bg-gradient-to-b from-sky-400 to-sky-300 sm:px-10 '>
        <nav className='flex justify-around items-center h-full '>

            <div className='sm:w-2/3 flex flex-row   justify-center items-center md:w-1/6'>
                <a href='/' className=' min-h-10 min-w-10'>
                   <LogoIcon/>
                </a>
                <span className=' mx-2 text-3xl font-semibold '>
                    RealEstate
                </span>
            </div>

            <div className='hidden  md:flex  w-4/6 '>
                <ul className='w-full md:flex font-semibold flex-row justify-evenly items-start text-lg my-1'>
                    <NavBarLinks text={"Home"} NavigateLink={"/"} />
                    <NavBarLinks text={"Add Listing"} NavigateLink={"/"} />
                    <NavBarLinks text={"About"} NavigateLink={"/"} />
                    <NavBarLinks text={"Contact"} NavigateLink={"/"} />
                </ul>
            </div>


            <div className='hidden  w-1/6 md:flex  flex-row justify-around  '>
                <Button className='bg-sky-100' variant={'ghost'}>
                    <Link href={"/User/signin"}>Sign-in</Link></Button>
                <Button className='bg-sky-100' variant={'ghost'}>
                 <Link href={"/User/register"}>register</Link>
                </Button>
            </div>

            <div className='flex md:hidden w-1/3 flex-row justify-center'>
                {/* <div className='h-10 w-10 cursor-pointer'>
                  <DrawerIcon />  
                </div> */}
                <DrawerComponent/>
            </div>
        </nav>
    </div>
  )
}


interface NavBarLinks{
    NavigateLink:String,
    text:String,
    classname?:String,
}

export const NavBarLinks=({NavigateLink,text,classname}:NavBarLinks)=>{
   
    return(
        <li  className={`${classname}`}>
            <Link href="/" >{text}</Link>
        </li>
    )
}