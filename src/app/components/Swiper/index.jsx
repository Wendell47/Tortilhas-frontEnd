'use client'

import { Navigation, Autoplay, Pagination } from 'swiper/modules'

import { Swiper } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Container } from "./styles";

  
export default function MySwiper ({children, slides,pagination, customNav}) {
    let MinWidth = window.screen.width;
    

  return (
    <Container>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={customNav && {
          nextEl: '.myswiper-button-next',
          prevEl: '.myswiper-button-prev',
        }}
        pagination={pagination && { clickable: true }}
        /*autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter:true
        }}*/
        
        slidesPerView={1}
        spaceBetween={20} 
        breakpoints={{
            "@0.90":{
              slidesPerView: slides || 1
          }}
        }
        className="mySwiper"
      >
       
       {children}
       
 
      </Swiper>
      
      </Container>
  );
}