import { gsap ,Power3,Expo} from 'gsap';
import React, { useEffect, useRef,useLayoutEffect } from 'react';
import Heder from './Heder'
import Slide from './Slide'
import Designation from './Designation'
import Catogary from './Catogary'
import Offer from './Offer'
import Footer from './Footer'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function Home() {
    const el = useRef();
 
    const tl = useRef();
    const yu = useRef()
      const timelineRef = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
             yu.current = gsap.timeline()
            
          tl.current = gsap
            .timeline()
           .to('.checkss',{
            x: 30,   duration: 1 ,ease : Power3.easeInOut,rotateX : 360,
             scrollTrigger : {
              trigger : '.checkss',
              start: 'right right',
              end: '+=300',
              scrub: true
             }
            
           })
           
            .from("#headline", {
             
            
              opacity :0,
              x : -180,
              duration: 1
            })
            .to(".subheadline", {
              duration: 0.5, fontSize : 50 ,color : 'red'
            }).to(timelineRef.current,{
              opacity: 0,  duration: 0.5
  
            },'-=0.3')
            .from("#checks",{
                  opacity :0,
                  y : -80,
                  duration: 1 
  
            })
            .from("#nows",{
  
              opacity :0,
              x : -180,
              duration: 1,
            //   scrollTrigger : {
            //     trigger : '.checkss',
            //     start: 'right right',
            //     end: '+=300',
            //     scrub: true
            //    }
            })
          
            
        }, el);
        return ()=> ctx.revert();
      }, []);
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <>
    <Heder ref={el} hxlass={"headline"} topbat={"checks"}/>
      <Slide/>
      <Designation/>
      <Catogary/>
      <Offer/>
      <Footer top={scrollToTop}/>
    </>
  )
}

export default Home
