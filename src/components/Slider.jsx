import styled from "@emotion/styled";
import {Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import {COLORS} from "../constants/colors";
import image1 from '../assets/images/3.jpg'
import image2 from '../assets/images/4.jpg'
import image3 from '../assets/images/5.jpg'
import image4 from '../assets/images/6.jpg'
import image5 from '../assets/images/7.jpg'
import image6 from '../assets/images/8.jpg'
import image7 from '../assets/images/9.jpg'
import image8 from '../assets/images/10.webp'
import image9 from '../assets/images/11.jpg'


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`
const StyledSwiper = styled(Swiper)`
  height: 400px;
  & .swiper-pagination-bullet-active {
    background: ${COLORS.green.default};
  }
  & .swiper-button-prev, & .swiper-button-next {
    height: 48px;
    width: 48px;
    border-radius: 24px;
    background: ${COLORS.green.default};
    color: white;
    &:after {
      font-size: 24px;
    }
    &.swiper-button-prev:after {
      margin-left: -4px;
    }
    &.swiper-button-next:after {
      margin-right: -4px;
    }
    
  }
  
`
export const Slider = () => {
  return (
    <StyledSwiper
      loop
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <Image key={image} src={image} alt="" />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  )
}
