import React from 'react'
import Location from './React-icon/location'
import PropertyType from './React-icon/propertyType'
import Amitiy from './React-icon/aminities'

const SubHeroSection = () => {
    return (
        <div className='px-10  bg-sky-50 pt-20 font-sans'>
            <h2 className='text-4xl  text-center leading-normal text-gray-800 '>Diverse Properties, Infinite Possibilities</h2>
            <div className='flex py-10 flex-col justify-center items-center md:flex-row'>
                <div className=' px-5  mt-2 w-full md:w-2/6 flex flex-col justify-center items-center'>
                    <span className=' w-14 h-14 text-center'>
                    <Location/> 
                    </span>
                <h3 className='text-gray-800 text-2xl my-4'>Location</h3>
                <p className='text-center text-lg text-700'>Our properties are strategically located in vibrant neighborhoods, ensuring easy access to local attractions, dining, and for a convenient and exciting lifestyle.</p>
                </div>

                <div className='md:border-x-2 px-5 mt-2 w-full md:w-2/6 flex flex-col justify-center items-center'>
                    <span className=' w-14 h-14 text-center'>
                    <PropertyType/> 
                    </span>
                <h3 className='text-gray-800 text-2xl my-4'>Property Type</h3>
                <p className='text-center text-lg text-700'>Discover our diverse range of properties, from modern urban apartments to cozy countryside cottages, each designed to cater to your unique preferences and needs.</p>
                </div>

                <div className=' px-5 mt-2 w-full md:w-2/6 flex flex-col justify-center items-center'>
                    <span className=' w-14 h-14 text-center'>
                    <Amitiy/> 
                    </span>
                <h3 className='text-gray-800 text-2xl my-4'>Amentities</h3>
                <p className='text-center text-lg text-700'>Elevate your living experience with our top-notch amenities, including fitness centers, communal spaces communal spaces communal spaces,  designed to make your stay comfortable and enjoyable.</p>
                </div>
            </div>
        </div>
    )
}

export default SubHeroSection