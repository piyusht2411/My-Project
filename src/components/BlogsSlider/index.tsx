import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const BlogsSlider = () => {
  return (
    <div className="container" style={{ marginBottom: '2rem' }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ width: '100%', height: '50vh', minHeight: 300 }}
        //
      >
        <SwiperSlide>
          <img
            src="https://cms.imperium-lex.com/wp-content/uploads/2022/12/general.jpg"
            style={{ objectFit: 'contain', width: '100%' }}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cms.imperium-lex.com/wp-content/uploads/2022/12/general.jpg"
            style={{ objectFit: 'contain', width: '100%' }}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cms.imperium-lex.com/wp-content/uploads/2022/12/general.jpg"
            style={{ objectFit: 'contain', width: '100%' }}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cms.imperium-lex.com/wp-content/uploads/2022/12/general.jpg"
            style={{ objectFit: 'contain', width: '100%' }}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cms.imperium-lex.com/wp-content/uploads/2022/12/general.jpg"
            style={{ objectFit: 'contain', width: '100%' }}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogsSlider;
