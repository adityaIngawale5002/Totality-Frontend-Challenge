"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link"
import { useState } from "react";



export const SignupPage = () => {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setphone]=useState("")
  const [password,setPassword]=useState("");


  const onsubmitHandler=()=>{
   
  }

  return (
    <div className=" w-full h-screen flex flex-row justify-center items-center border">
        <div className="w-2/3 border border-sky-200 h-2/3 flex flex-col items-center p-2 bg-sky-100 rounded-3xl drop-shadow-xl overflow-auto">
               <h1 className="text-2xl font-bold text-center text-blue-400 my-1" >Rupay</h1>

               <h2 className="text-xl font-medium text-center my-3 text-slate-500">
                <span className=" text-blue-400">Sign up </span>
                /
                <span><Link href={"/User/signin"}> Login</Link> </span>
               </h2>
               
                <div className=" flex gap-4 px-4 flex-col items-center justify-center w-full ">
                  <Input type={"text"} placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)} />
                  <Input type={"email"} placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}/>
                  <Input type={"text"} placeholder="Enter your Mobile Number" onChange={(e)=>setphone(e.target.value)}/>
                  <Input type={"password"} placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <Button className="mt-4 " variant={'outline'}>Submit</Button>
        </div>
    </div>
  );
};


