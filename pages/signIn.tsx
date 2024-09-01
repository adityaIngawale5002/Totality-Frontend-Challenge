"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link"
import { useState } from "react";



export const Signinpage = () => {

  const [password,setPassword]=useState("")
  const [phone,setPhone]=useState('');


  const submitHandler=()=>{
     
  }
  return (
   <>
    <div className=" w-full h-screen flex flex-row justify-center items-center border">
        <div className="w-2/3 border border-sky-200 h-2/4 flex flex-col items-center p-2 bg-sky-100 rounded-3xl drop-shadow-xl overflow-auto">
               <h1 className="text-2xl font-bold text-center text-blue-400 my-1" >Rupay</h1>

               <h2 className="text-xl font-medium text-center my-3 text-slate-500">
                <span className=" text-blue-400">Login </span>
                 /
                <span><Link href={"/User/register"}> Sign up</Link> </span>
               </h2>
               
                <div className=" flex flex-col mb-2 px-5 gap-4 items-center justify-center w-full ">
                  <Input type={"text"} placeholder="Enter your Mobile Number" onChange={(e)=>{setPhone(e.target.value)}}/>
                  <Input type={"password"} placeholder="Enter your Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <Button className="mt-2" variant={'outline'}>Submit</Button>
        </div>
    </div>
   </>
  );
};
