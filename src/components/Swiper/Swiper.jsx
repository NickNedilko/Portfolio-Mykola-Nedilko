import {  SwiperSlide, Swiper } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Image } from './Swiper.styled';


export const ImageSwiper = ({project}) => {
    
    
  return (
  
      <Swiper
          modules={[ Pagination, Navigation, EffectCoverflow]}
          pagination={true}
          navigation={true}
          loop={true}
          grabCursor={true}
          slidesPerView={3}
          effect={'coverflow'}
          centeredSlides={true}
          coverflowEffect={{rotate: 1, stretch: 80, depth: 150, modifier: 2}}
          >
    
              <SwiperSlide >
              <Image src={`.${project.images[0]}`} alt='ecosolution' loading="lazy"/>
          </SwiperSlide>
          <SwiperSlide >
              <Image  src={`.${project.images[1]}`} alt='ecosolution' loading="lazy"/>
      </SwiperSlide>
       <SwiperSlide >
              <Image  src={`.${project.images[2]}`} alt='ecosolution' loading="lazy"/>
      </SwiperSlide>
       
          </Swiper>
  
  )
}