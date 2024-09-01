import React from 'react'
import { InputWithButton } from './ui/inputWithButton'
import { NavBarLinks } from './navbar'

const Footer = () => {
  return (
    <div className='w-full px-10 py-5 bg-sky-50   flex flex-col md:flex-row '>

      <div className=' w-full md:w-3/6 '>
        <h2 className='text-2xl text-gray-700 font-bold text-left mt-10 mb-5'>RealEstate</h2>
        <p className='mb-5 text-md text-gray-600'>Join our newsletter to stay up to date on features and releases.
        </p>
        <InputWithButton />
        <p className='text-xs mt-5 pr-10 text-gray-600'>By subscribing you agree to with our <span className='    underline'>Privacy Policy</span> and provide consent to receive updates from our company.</p>
      </div>

      <div className='w-full md:w-1/6'>
          <h3 className='mt-10 text-center font-bold text-gray-800'>Pages</h3>
          <ul>
              <NavBarLinks text={"Home"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
              <NavBarLinks text={"Browse Listing"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
              <NavBarLinks text={"Add Listing"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
              <NavBarLinks text={"About"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
              <NavBarLinks text={"Blogs"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
              <NavBarLinks text={"FAQ"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
              
          </ul>
      </div>

      <div className='w-full md:w-1/6 '>
          <h3 className='mt-10 text-center font-bold text-gray-800'>Admin</h3>
          <ul>
              <NavBarLinks text={"Style Guide"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
              <NavBarLinks text={"License"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
              <NavBarLinks text={"Instruction"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
              <NavBarLinks text={"Password"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
              <NavBarLinks text={"404"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
          </ul>
      </div>
      
      <div className='w-full md:w-1/6 '>
          <h3 className='mt-10 text-center font-bold text-gray-800'>Follow Us</h3>
          <ul>
              <NavBarLinks text={"Instagram"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
              <NavBarLinks text={"Youtube"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
              <NavBarLinks text={"LinkedIn"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
              <NavBarLinks text={"Twitter"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
              <NavBarLinks text={"Facebook"} NavigateLink={"/"} classname={"text-gray-700 text-center my-2"}/>
          </ul>
      </div>

    </div>
  )
}

export default Footer