import React from 'react'

function Heder(props,ref) {
  return (
    <div ref={ref}>
      <div className=' w-full  bg-white'>
        <div className=' ml-14  mr-14 lg:grid lg:grid-cols-2 gap-3 bg-white '>
        <div className=' mt-2  bg-white ' id={props.hxlass}>
            {/* <img src='https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Shangri-La_Hotels_and_Resorts_logo.svg/1200px-Shangri-La_Hotels_and_Resorts_logo.svg.png'   className='w-[150px] h-[60px] max-lg:justify-center'/> */}
            <img src='https://ajhotel.com.br/wp-content/uploads/2022/03/LOGO-AJ-HOTEL-2-TOM-DE-AMARELO-BRANCO.png'   className='w-[150px] h-[60px] max-lg:justify-center'/>
        </div>
        <div className='   mt-2 bg-white  max-lg:hidden'>
        <ul class="mr-8 flex flex-1 items-center  justify-end gap-6 py-4 px-4  text-black" >
            <li className= ' bg-white  h-7 w-[90px] flex col-span-2 gap-2' id={props.hxlass}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

                <a>
                       SING IN |</a></li>
                       <li className= ' bg-white 'id={props.hxlass}>
            
                <a>
               JOIN NOW |</a></li>
            
             
               <li className= ' bg-white  ' id={props.hxlass}>
            
                <a>
               FIND RESERVETION |</a></li>
               <li className= ' bg-white  h-7 w-[90px] flex col-span-2 gap-2  mt-1' id={props.hxlass}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

                <a>
               ENGLISH  </a></li>
               <li className= ' bg-white ' id={props.hxlass}>
                <a>
               LKR |</a></li>
               <li className= ' bg-white  ' id={props.hxlass}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

                </li>
        </ul>
        </div>
        </div>
        
      </div>
      <div className=' w-full '>
        <div className='grid  justify-center w-full bg-black  mt-2'id={props.topbat}>
       <div className=' '>
       <ul class="mr-8 flex flex-1 items-center  justify-center gap-10 max-lg:hidden py-2 px-2  text-white">
       <li className= '   h-7 w-[90px] flex col-span-2 gap-2  mt-1   '>
     <a>
               ENGLISH  </a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg></li>
            <li className= '   h-7 w-[90px] flex col-span-2 gap-2  mt-1   '><a>ROOM&SUITES</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
            </li>
            <li className= '   h-7 w-[90px] flex col-span-2 gap-2  mt-1   '><a>DINNER</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
            </li>
            <li className= '   h-7 w-[90px] flex col-span-2 gap-2  mt-1   '><a>EXPERIANCE</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
            </li>
            <li className= '   h-7 w-[90px] flex col-span-2 gap-2  mt-1   '><a>EVENT</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
            </li>
            <li className= '   h-7 w-[90px] flex col-span-2 gap-2  mt-1   '> <a>GALLARY</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
            </li>
            <li className= '   h-7 w-[90px] flex col-span-2 gap-2  mt-1   '><a>OFFER</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
            </li>
            <button className=' py-2 px-6 border-solid border-2 border-white '>FIND HOTEL</button>
        </ul>
       </div>
       
        </div>
           
      
      </div>
    </div>
  )
}

export default React.forwardRef(Heder)
