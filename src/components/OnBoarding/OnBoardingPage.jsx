import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import "swiper/css/pagination"
import { OnBoardingImageOne } from "./OnBoardingImages";
import { useState } from "react";
import GetStarted from "./GetStarted";

import { Pagination } from "swiper/modules";
const OnBoardingPage = () => {
  const [nextOnboardingPage, setNextOnboardingPage] = useState(false)
  return (
    <>
    { !nextOnboardingPage ? 
    <>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{clickable: true}}
      modules={[Pagination]}
      >
        <SwiperSlide><OnBoardingImageOne /></SwiperSlide>
        <SwiperSlide><OnBoardingImageOne /></SwiperSlide>
      </Swiper> 
      <div className="w-fit mx-auto max-[397px]:w-full px-[20.8px]">
        <button onClick={()=> setNextOnboardingPage(true)} className="bg-[#A5C339] w-[300px] max-[397px]:w-full py-[15.6px] px-[13.87px] text-[#FFFFFF] text-center text-[13.87px] font-bold rounded-[73.87px]">Next</button>
      </div>
    </>
    :
    <>
      <GetStarted />
    </>
    }
    </>
  )
}

export default OnBoardingPage