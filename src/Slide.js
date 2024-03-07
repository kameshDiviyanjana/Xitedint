import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Slide() {
  return (
    <div>
        
       <Swiper
        style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            
          }}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='relative group w-full lg:h-[590px] '
       
      >
        <SwiperSlide> <div>
        <img src='https://sitecore-cd.shangri-la.com/-/media/Shangri-La/colombo_shangrila/about/SLCBServicesandFacilities.jpg' alt='image'  className=''/>
           
        </div>
         </SwiperSlide>
         <SwiperSlide> <div>
        <img src='https://www.kayak.co.in/rimg/himg/3f/ba/97/revato-997340-12560142-088270.jpg?width=1366&height=768&crop=true' alt='image' className=' w-full'/>
           
        </div>
         </SwiperSlide>
         <SwiperSlide>
         <img src='https://photos.hotelbeds.com/giata/original/60/608797/608797a_hb_ro_016.jpg' alt='image' />
         </SwiperSlide>
        
      </Swiper>
   
     
    </div>
  )
}

export default Slide
