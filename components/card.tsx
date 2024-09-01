
import Link from "next/link";
import Location from "./React-icon/location";

function Card({ item }: any) {

    return (
        <div className="w-full p-4 hover:shadow-md  flex sm:flex-row flex-col justify-center items-center font-sans ">
            <Link href={`/${item.id}`} className=" w-full h-full sm:w-1/2    overflow-hidden">
                <img src={item.images[0]} className="w-full  sm:h-full   rounded-xl" alt="Image" />
            </Link>
            <div className=" w-full h-full px-2 py-2 sm:w-1/2 ">
                <h2 className="text-xl font-semibold ">
                    <Link href={`/${item.id}`}>{item.title}</Link>
                </h2>
                <p className="text-gray-700 my-4 flex flex-row">
                    <span className="w-5 h-5 text-center" >
                        <Location />
                    </span>
                    <span>{item.address}</span>
                </p>
                <p className="bg-yellow-200 my-3 max-w-fit p-1">$ {item.price}</p>
                <div className="flex flex-col  mt-5">
                    <div className=" flex flex-row  w-full ">
                        <div className="p-1 bg-slate-200 rounded">
                            
                            <span>{item.bedroom} bedroom</span>
                        </div>
                        <div className="ml-8 p-1 bg-slate-200 rounded">
                          
                            <span>{item.bathroom} bathroom</span>
                        </div>
                    </div>
                    <div className="w-full mt-5  gap-4 flex flex-row">
                        <div className="text-gray-700 font-semibold text-lg">
                           <Link href={'/'}>Add to cart</Link> 
                        </div>
                        <div className="text-red-400 font-semibold text-lg">
                        <Link href={'/'}>Book now</Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
