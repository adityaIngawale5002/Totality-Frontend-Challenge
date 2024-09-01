"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button';
import HeroImage from '../public/HeroImage.png';
import { useRouter } from 'next/navigation';

const HeroComponent = () => {
  const router=useRouter()

  return (
    <div className='bg-gradient-to-b from-sky-300 to-sky-50 w-full flex flex-col items-center justify-center'>
        <div className='w-2/3  text-center mt-14 '>
            <h1 className=' text-3xl sm:text-5xl leading-normal text-gray-700 mt-10'>
             Your Home Search, Simplified – Explore with Us!
            </h1>
            <p className=' leading-2 mt-10 px-10   text-lg '>
            Welcome to Real Estatoe, where your journey to finding the perfect home begins. Whether you're searching for a cozy apartment, a spacious family house, or an investment property, we have the expertise and resources to make your vision a reality.
            </p>
            <div className=' mt-10 flex flex-col justify-center items-center sm:flex-row'>
                <Button className='sm:mr-2 my-1 text-lg' onClick={()=>router.push("/listings")} variant={'secondary'} >Browse Listing</Button>
                <Button className='sm:ml-2 my-1 text-lg' variant={'outline'}>List your Place</Button>
            </div>
        </div>
        <div className='mt-16'>
            <Image alt='building' src={HeroImage}/>
        </div>
    </div>
  )
}

export default HeroComponent;