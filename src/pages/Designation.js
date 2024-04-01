import React from 'react'
import Btton from '../componets/Btton'
function Designation() {
  return (
    <div className=' w-full h-[500px]  bg-white font-serif' >
    
    <div className=' mt-5'>
    <div>
         <h1 className='  font-serif text-bn-cl text-center  lg:text-[90px] max-lg:text-[50px]' >Our Destinations</h1>
     </div>
    </div >
     <div className=' bg-white mt-2 flex justify-center text-[20px] '>
     <select name="cars" id="cars" className=' py-7 px-7 w-[500px] border-solid  border-2  border-bn-cl'>
    <option value="volvo" className='  text-red-600 py-5 px-5'>shale-la colombo Hotele</option>
    <option value="saab" className=' border-solid  border-2  border-purple-500'>shale-la colombo Hotel</option>
    <option value="opel" className=' border-solid  border-2  border-purple-500'>shale-la colombo Hotel</option>
    <option value="audi" className=' border-solid  border-2  border-purple-500'>shale-la colombo Hotel</option>
  </select>
     </div>

     <div className='  flex justify-center bg-white mt-11'>
           <div className=' lg:relative '>
           <img src='https://cdn.wallpapersafari.com/68/2/MShsNr.jpg' className=' w-[900px] ' />
           <div className='lg:absolute h-[350px]   -right-[75px]  bottom-12   lg:bg-slate-50 sm:bg-white w-[400px]   drop-shadow-2xl'>
               <div className=' py-2 px-2 ml-9'>
                        <h1 className=' text-3xl mt-7 text-bn-cl'>AJ cinone Dhonveli Maldives</h1>
                        <p className=' mt-6 mr-4  text-black '>Feel an irrepressible wave of excitement as you have the best surfing experience, set to the backdrop of serenity, and pristine blue waters.</p>
                        <Btton sty={' py-2 px-5  bg-blue-950 text-white mt-5 '}  name={'Discover More'}/>
               </div>
           </div>
           </div>
     </div>
    </div>
  )
}

export default React.forwardRef(Designation)
