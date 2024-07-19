import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../asserts/images/cricket_1.jpg'
import img2 from '../asserts/images/cricket_2.jpg'
import img3 from '../asserts/images/cricket_3.jpg'
import img4 from '../asserts/images/cricket_4.jpg'

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={4}
      loop={true}
      navigation
      effect='coverflow'
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      width={600}
      height={200}
    >
      <SwiperSlide>
        <img src={img1} alt="cricket image 1" style={{ width: '100%', height: '200px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="cricket image 2" style={{ width: '100%', height: '200px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="cricket image 3" style={{ width: '100%', height: '200px' }} />
      </SwiperSlide>
      <SwiperSlide>
         <img src={img4} alt="cricket image 4" style={{ width: '100%', height: '200px' }} />
      </SwiperSlide>
    </Swiper>
  );
};