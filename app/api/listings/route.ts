import { listData } from "@/lib/fakeData";
import { NextRequest, NextResponse } from "next/server";

interface filter{
    Bedroom?:Number,
    Bathroom?:Number,
    Price?:Number,
    Location?:String,
}

export  function GET(req: NextRequest) {
   
    const filters:any=req.nextUrl.searchParams.get('filters')
    // console.log(filters)
    if(filters==null){
        return NextResponse.json({list:listData});
    }
    const filterArrya=filters.split(',');
    // console.log(filterArrya)
    // console.log(filterArrya.length)

    if(filterArrya[0]==='' && filterArrya[1]==='0' && filterArrya[2]==='0' && filterArrya[3]==='0'){
        return NextResponse.json({list:listData});
    }
    else{
        let newList
        if(filterArrya[0]!=''){
           newList=listData.filter((item)=>item.address.includes(filterArrya[0]));
           console.log(newList);
        }
        if(filterArrya[1]!='0'){
            if(filterArrya[0]==''){
                newList=listData.filter((item)=>item.price<=Number(filterArrya[1]));
                
            }
            else{
                newList=newList?.filter((item)=>item.price<=Number(filterArrya[1]));
            }
           
        }
        if(filterArrya[2]!='0'){
            if(filterArrya[0]=='' && filterArrya[1]=='0'){
                newList=listData.filter((item)=>item.bedroom==Number(filterArrya[2]));
            }
            else{
                newList=newList?.filter((item)=>item.bedroom==Number(filterArrya[2]));
            }
           
        }
        if(filterArrya[3]!='0'){
            if(filterArrya[0]=='' && filterArrya[1]=='0' && filterArrya[2]=='0'){
                newList=listData.filter((item)=>item.bathroom==Number(filterArrya[3]));
            }
            else{
                newList=newList?.filter((item)=>item.bathroom==Number(filterArrya[3]));
            }
           
        }
        return NextResponse.json({list:newList})
    }
   
}

