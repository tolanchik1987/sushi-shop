import React from "react";
import ImgMiddle1 from "/public/images/home/middle/001.png";
import ImgMiddle2 from "/public/images/home/middle/002.png";
import ImgMiddle3 from "/public/images/home/middle/003.png";
import {
   Autoplay,
   Navigation,
   Pagination,
   A11y,
   EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/autoplay";
import styles from "./SwiperMiddle.module.scss";
import Image from "next/image";

type Props = {};

const SwiperMiddle = (props: Props) => {
//    const swiper = useSwiper();
// console.log('swiper',swiper)
   return (
      <>
         <Swiper
            className={styles.mySwiper}
            modules={[Navigation, A11y, Autoplay]}
            slidesPerView={3}
            spaceBetween={0}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            navigation
         >
            <SwiperSlide>
               <div className={styles.containerSlide}>
                  <Image
                     className={styles.image_container}
                     src={ImgMiddle1}
                     alt="001"
                     width={253}
                     height={203}
                     quality={100}
                     blurDataURL="@/public/images/home/middle/001.png"
                     placeholder="blur"
                  />
                  <p>Саломон сет</p>
                  <p>1050 грамм, 30 кусочков</p>
                  <div className={styles.containerPrice}>
                     <p>1500 СОМ</p>
                     <button>Хочу!</button>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className={styles.containerSlide}>
               <Image
                  className={styles.image_container}
                  src={ImgMiddle2}
                  alt="002"
                  width={253}
                  height={203}
                  quality={100}
                  blurDataURL="@/public/images/home/middle/002.png"
                  placeholder="blur"
               />
               <p>Саломон сет</p>
                  <p>1050 грамм, 30 кусочков</p>
                  <div className={styles.containerPrice}>
                     <p>1500 СОМ</p>
                     <button>Хочу!</button>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={styles.containerSlide}>
               <Image
                  className={styles.image_container}
                  src={ImgMiddle3}
                  alt="003"
                  width={253}
                  height={203}
                  quality={100}
                  blurDataURL="@/public/images/home/middle/003.png"
                  placeholder="blur"
               />
               <p>Саломон сет</p>
                  <p>1050 грамм, 30 кусочков</p>
                  <div className={styles.containerPrice}>
                     <p>1500 СОМ</p>
                     <button>Хочу!</button>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={styles.containerSlide}>
               <Image
                  className={styles.image_container}
                  src={ImgMiddle2}
                  alt="004"
                  width={253}
                  height={203}
                  quality={100}
                  blurDataURL="@/public/images/home/middle/002.png"
                  placeholder="blur"
               />
               <p>Саломон сет</p>
                  <p>1050 грамм, 30 кусочков</p>
                  <div className={styles.containerPrice}>
                     <p>1500 СОМ</p>
                     <button>Хочу!</button>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={styles.containerSlide}>
               <Image
                  className={styles.image_container}
                  src={ImgMiddle1}
                  alt="005"
                  width={253}
                  height={203}
                  quality={100}
                  blurDataURL="@/public/images/home/middle/001.png"
                  placeholder="blur"
               />
               <p>Саломон сет</p>
                  <p>1050 грамм, 30 кусочков</p>
                  <div className={styles.containerPrice}>
                     <p>1500 СОМ</p>
                     <button>Хочу!</button>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={styles.containerSlide}>
               <Image
                  className={styles.image_container}
                  src={ImgMiddle3}
                  alt="006"
                  width={253}
                  height={203}
                  quality={100}
                  blurDataURL="@/public/images/home/middle/003.png"
                  placeholder="blur"
               />
               <p>Саломон сет</p>
                  <p>1050 грамм, 30 кусочков</p>
                  <div className={styles.containerPrice}>
                     <p>1500 СОМ</p>
                     <button>Хочу!</button>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   );
};

export default SwiperMiddle;
