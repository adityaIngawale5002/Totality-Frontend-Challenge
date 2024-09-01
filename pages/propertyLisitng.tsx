
"use client"
import axios from 'axios';
import React, { useEffect,useState } from 'react'
import {lisitngs} from '../lib/Datatype'
import Card from '@/components/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

 function PropertyLisintg(){
    const [ListData,setListData]=useState<lisitngs[]>([]);
    const [Location,setLocation]=useState<String>('');
    const [Price,setPrice]=useState<Number>(0);
    const [BedRooms,setBedRooms]=useState<Number>(0);
    const [BathRooms,setBathRooms]=useState<Number>(0);

    useEffect(()=>{
        axios.get('/api/listings')
        .then((response)=>{
            console.log(response);
            setListData(response.data.list)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    const SerachFilters=()=>{
        axios.get(`/api/listings/?filters=${[Location,Price,BedRooms,BathRooms]}`)
        .then((response)=>{
            setListData(response.data.list);
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
  return (
    <div className='w-full    bg-gradient-to-b flex flex-col from-sky-300 to-sky-50'>
        <div className='w-full  px-5'>
            <h3 className='m-5 text-gray-700 text-xl'>Search result for</h3>
            <div className='mx-5'>
                <Input id='location' onChange={(e)=>setLocation(e.target.value)} type='text' placeholder='City Location' className='bg-transparent  text-gray-900 text-lg '/>
            </div>
            <div className='mx-5 my-4 grid md:grid-cols-4 gap-4 grid-cols-2'>
                <Input  type='text' placeholder='Max-Price' className='bg-transparent  text-gray-900 text-lg ' onChange={(e)=>setPrice(Number(e.target.value))}/>
                <Input  type='number' min={0} placeholder='Bedrooms' className='bg-transparent  text-gray-900 text-lg ' onChange={(e)=>setBedRooms(Number(e.target.value))}/>
                <Input  type='number' min={0} placeholder='Bathrooms' className='bg-transparent  text-gray-900 text-lg ' onChange={(e)=>setBathRooms(Number(e.target.value))}/>
                <Button variant={'outline'} onClick={SerachFilters} className='bg-sky-100 text-gray-900 text-lg'>Search</Button>
            </div>
        </div>
        <div className='w-full pt-5 px-5 grid lg:grid-cols-2'>
            {
                ListData?.map(item=>(
                    <Card item={item} key={item.id}/>
                ))
            }
        </div>
       
    </div>
  )
}

export default PropertyLisintg