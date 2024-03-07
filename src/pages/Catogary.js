import React from 'react'
import hotelplaces from '../Viewplaces.json'
function Catogary() {
  return (
    <div className=' w-full   bg-white font-serif mt-96'>
        <div className=' py-5 px-3 ml-6 mr-6 mt-2'>
        <h1 className=' font-semibold text-bn-cl text-[45px]'>Save more, do more</h1>
        <p className=' text-gray-400'>
        Choose from our exclusive offers, and get more from your next stay.
        </p>
        </div>
        <div className='py-4 px-5 lg:grid lg:grid-cols-3  gap-3'>
            {
                hotelplaces.map((places)=>(
                    <>
                                 <div className=' w-full h-full  bg-white mt-5'>
                  
                  <div className=' relative'>
                  <img src={places.images} className=' w-full h-[500px]' />
                  <div className='absolute inset-x-0 bottom-0  hover:bottom-[60px] h-[450px]    hover:text-center   '>
                          <div className='absolute inset-x-0 bottom-5   '>
                          <h1 className=' font-bold text-2xl text-white px-4 bottom-0'>{places.palacedata}</h1>
                          </div>
                  </div>
                  </div>
                 
           </div>
                    </>
                ))
            }
           
        </div>
    
    </div>
  )
}

export default Catogary
