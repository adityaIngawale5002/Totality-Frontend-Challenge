import React from 'react'

const ReviewData=[
  {
    text:"We couldn't have asked for a better experience with Real Estatoe. Their expertise and dedication made our home-buying process smooth and stress-free. They found us our dream home and negotiated a great deal. Highly recommended!",
    Name:"Jhon",
    place:"Lives in New York"
  },
  {
    text:"I recently sold my property with Real Estatoe, and I was impressed by their professionalism and market knowledge. They went above and beyond to showcase my home and secure a quick sale at a great price. Thank you!",
    Name:"Sarah L",
    place:"Lives in San Diego"
  },
  {
    text:"Working with Real Estatoe was a pleasure from start to finish. Their agents were attentive to our needs, patient with our questions, and provided valuable insights into the local market. We're now happily settled in our new home, all thanks to them.",
    Name:"David",
    place:"Lives in New York"
  },
  {
    text:"I can't thank Real Estatoe enough for helping me find the perfect rental property. They listened to my preferences and found me a beautiful apartment within my budget. Their attention to detail and commitment to customer satisfaction truly stand out.",
    Name:"Maria H",
    place:"Lives in San Fransico"
  },
  {
    text:"Selling my property through Real Estatoe was a breeze. Their team's marketing strategies and negotiation skills were impressive. I was kept informed at every step, and my property sold quickly. I highly recommend their services",
    Name:"Whitney K",
    place:"Lives in Michigan"
  },
  {
    text:"We had a fantastic experience with Real Estatoe when selling our family home. Their knowledge of the local market was invaluable, and their dedication to getting us the best deal was evident throughout the process. We couldn't be happier with the outcome.",
    Name:"Susan",
    place:"Lives in Dallas"
  },
  
]

const ReviewComponent = () => {
  return (
    <div className='px-10 bg-sky-50 font-sans py-10  border-b-2'>
      <h3  className='text-4xl  text-center leading-normal text-gray-800 '>Customers testmonials</h3>
        <div className='w-full px-5 py-10 grid gap-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2'>
            {
              ReviewData.map(({text,Name,place})=>(
                <ReviewCard key={Name} text={text} place={place} Name={Name}/>
              ))
            }
        </div>
    </div>
  )
}

export default ReviewComponent

interface ReviewCard{
  text:String,
  Name:String,
  place:String
}
const ReviewCard=({text,Name,place}:ReviewCard)=>{
  return (
    <div className='p-4 font-sans text-left w-full border rounded'>
      <p className='text-md text-gary-700 my-2'>
        {text}
      </p>
      <h4 className='text-lg text-gray-800 my-2'>{Name}</h4>
      <span className='text-sm text-gray-700 my-2'>{place}</span>
    </div>
  )
}