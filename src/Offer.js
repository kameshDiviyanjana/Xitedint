import React from 'react'
import Btton from './componets/Btton'
import offerlist from './Offers.json'
function Offer() {
  return (
    <div className='w-full  bg-white mt-7'>
        <div className=' px-8 py-5 '>
       <div className=''>
       <h1 className=' text-center font-serif text-4xl  textm '>Offers</h1>
       </div>
       <div className=' lg:grid lg:grid-cols-3 gap-5 mb-12 '>

             {
               offerlist && offerlist.map((its)=>(
                    <>
                       <div className='w-full h-full  bg-slate-50 mt-6 mb-10 shadow-2xl '>
                    <div>
                        <img src={its.images}  className=' w-full h-[250px]'/>
                    </div>
                    <div className=' px-4 py-4 mr-7 ml-7 text-center'>
                    <h4 className=' text-center mb-3 text-gray-500'>Rooms & Suites</h4>
                    <p className=' font-bold text-black text-[15px]'>{its.type}</p>
                    <p className=' mt-5 text-gray-500'>{its.offerdata}</p>
                    <p className=' mt-11'>{its.price}</p>
                    </div>
                    <div className=' flex justify-center '> 
                    <Btton sty={' py-2 px-5  bg-blue-950 text-white mt-5  mb-5'}  name={'Discover More'}/>
                    </div>
                    
                  </div>
                    </>
                ))
             }
                  
               
                  {/* <div className='w-full h-full  bg-slate-50 mt-3 mb-10 shadow-2xl '>
                    <div>
                        <img src=''  className=' w-full  h-[250px]'/>
                    </div>
                    <div className=' px-4 py-4 mr-7 ml-7 text-center'>
                    <h4 className=' text-center mb-3 text-gray-500'>Rooms & Suites</h4>
                    <p className=' font-bold text-black text-[15px]'>Shangri–La Circle Exclusive Member Rate with Breakfast</p>
                    <p className=' mt-5 text-gray-500'>Exclusive Member Rate with Breakfast for Shangri-La Circle member.</p>
                    <p className=' mt-11'>From LKR 55,472.40 Average Per Night</p>
                    </div>
                    <div className=' flex justify-center '> 
                    <Btton sty={' py-2 px-5  bg-blue-950 text-white mt-5 mb-5'}  name={'Discover More'}/>
                    </div>
                    
                  </div>
                  <div className='w-full h-full  bg-slate-50 mt-3 mb-10 shadow-2xl'>
                    <div>
                        <img src=''  className=' w-full  h-[250px]'/>
                    </div>
                    <div className=' px-4 py-4 mr-7 ml-7 text-center'>
                    <h4 className=' text-center mb-3 text-gray-500'>Rooms & Suites</h4>
                    <p className=' font-bold text-black text-[15px]'>Shangri–La Circle Exclusive Member Rate with Breakfast</p>
                    <p className=' mt-5 text-gray-500'>Exclusive Member Rate with Breakfast for Shangri-La Circle member.</p>
                    <p className=' mt-11'>From LKR 55,472.40 Average Per Night</p>
                    </div>
                    <div className=' flex justify-center '> 
                    <Btton sty={' py-2 px-5  bg-blue-950 text-white mt-5  mb-5 '}  name={'Discover More'}/>
                    </div>
                    
                  </div> */}
       </div>
        </div>
    
    </div>
  )
}

export default Offer
