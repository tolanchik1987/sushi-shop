import { Roboto_Slab } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import cn from "classnames";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import Img001 from "/public/images/home/swiper/001.png";
import Img002 from "/public/images/home/swiper/002.png";
import Img003 from "/public/images/home/swiper/003.png";
import Img004 from "/public/images/home/swiper/004.png";
import Img005 from "/public/images/home/swiper/005.png";
import ImgTop1 from "/public/images/home/top/001.png";
import ImgTop2 from "/public/images/home/top/002.png";
import ImgTop3 from "/public/images/home/top/003.png";
import ImgTop4 from "/public/images/home/top/004.png";
import ImgTop5 from "/public/images/home/top/005.png";

import {
   Autoplay,
   Navigation,
   Pagination,
   Scrollbar,
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
import SwiperMiddle from "@/components/swiperMidle/SwiperMiddle";


const RobotoSlabFont = Roboto_Slab({ subsets: ["latin"] });

const Home: FC = (): JSX.Element => {

   return (
      <>
         <Layout
            title="Главная"
            description="Магазин суши и роллов в городе Тольятти по лучшим ценам!"
         >
            <main className={cn(styles.main, RobotoSlabFont.className)}>
               <h1 className={styles.h1}>МАГАЗИН СУШИ</h1>
               <div className={styles.container_swiper}>
                  <Swiper
                     // install Swiper modules
                     modules={[
                        Autoplay,
                        // Navigation,
                        Pagination,
                        // Scrollbar,
                        A11y,
                        EffectCoverflow,
                     ]}
                     spaceBetween={10}
                     slidesPerView={1}
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                     }}
                     loop={true}
                     speed={1000}
                     effect="coverflow"
                     // navigation={{ nextEl: "none", prevEl: "none" }}
                     pagination={{ clickable: true }}
                     // scrollbar={{ draggable: true }}
                     // onSwiper={(swiper) => console.log(swiper)}
                     // onSlideChange={() => console.log("slide change")}
                  >
                     <SwiperSlide className={styles.SwiperSlide}>
                        <Image
                           className={styles.image_container}
                           src={Img001}
                           alt="001"
                           width={950}
                           height={470}
                           quality={100}
                           blurDataURL="@/public/images/home/001.png"
                           placeholder="blur"
                        />
                        <button className={styles.btn_slider}>Хочу!</button>
                     </SwiperSlide>
                     <SwiperSlide className={styles.SwiperSlide}>
                        <Image
                           className={styles.image_container}
                           src={Img002}
                           alt="002"
                           width={950}
                           height={470}
                           quality={100}
                           blurDataURL="@/public/images/home/002.png"
                           placeholder="blur"
                        />
                        <button className={styles.btn_slider}>Хочу!</button>
                     </SwiperSlide>
                     <SwiperSlide className={styles.SwiperSlide}>
                        <Image
                           className={styles.image_container}
                           src={Img003}
                           alt="003"
                           width={950}
                           height={470}
                           quality={100}
                           blurDataURL="@/public/images/home/003.png"
                           placeholder="blur"
                        />
                        <button className={styles.btn_slider}>Хочу!</button>
                     </SwiperSlide>
                     <SwiperSlide className={styles.SwiperSlide}>
                        <Image
                           className={styles.image_container}
                           src={Img004}
                           alt="004"
                           width={950}
                           height={470}
                           quality={100}
                           blurDataURL="@/public/images/home/004.png"
                           placeholder="blur"
                        />
                        <button className={styles.btn_slider}>Хочу!</button>
                     </SwiperSlide>
                     <SwiperSlide className={styles.SwiperSlide}>
                        <Image
                           className={styles.image_container}
                           src={Img005}
                           alt="005"
                           width={950}
                           height={470}
                           quality={100}
                           blurDataURL="@/public/images/home/005.png"
                           placeholder="blur"
                        />
                        <button className={styles.btn_slider}>Хочу!</button>
                     </SwiperSlide>
                  </Swiper>
               </div>
               <section className={styles.top}>
                  <div className={styles.container_grid}>
                     <div className={styles.chiken}>
                        <Image
                           className={styles.image_container}
                           src={ImgTop1}
                           alt="chiken"
                           width={450}
                           height={200}
                           quality={100}
                           blurDataURL="@/public/images/home/top/001.png"
                           placeholder="blur"
                        />
                        <h3>Чикен</h3>
                     </div>
                     <div className={styles.ugor}>
                        <Image
                           className={styles.image_container}
                           src={ImgTop2}
                           alt="ugor"
                           width={220}
                           height={200}
                           quality={100}
                           blurDataURL="@/public/images/home/top/001.png"
                           placeholder="blur"
                        />
                        <h3>С угрем</h3>
                     </div>
                     <div className={styles.corn}>
                        <Image
                           className={styles.image_container}
                           src={ImgTop3}
                           alt="corn"
                           width={220}
                           height={200}
                           quality={100}
                           blurDataURL="@/public/images/home/top/001.png"
                           placeholder="blur"
                        />
                        <h3>Корн дог</h3>
                     </div>
                     <div className={styles.pizza}>
                        <Image
                           className={styles.image_container}
                           src={ImgTop4}
                           alt="pizza"
                           width={455}
                           height={200}
                           quality={100}
                           blurDataURL="@/public/images/home/top/001.png"
                           placeholder="blur"
                        />
                        <h3>Пицца</h3>
                     </div>
                     <div className={styles.sale}>
                        <Image
                           className={styles.image_container}
                           src={ImgTop5}
                           alt="sale"
                           width={470}
                           height={200}
                           quality={100}
                           blurDataURL="@/public/images/home/top/001.png"
                           placeholder="blur"
                        />
                        <h3>Акции</h3>
                     </div>
                  </div>
               </section>
               <section className={styles.middle}>
                  <button className={styles.btn_prev}><AiOutlineArrowLeft /></button>
                  <SwiperMiddle />
                  <button className={styles.btn_next}><AiOutlineArrowRight /></button>
               </section>
               <section className={styles.bottom}></section>
            </main>
         </Layout>
      </>
   );
};

export default Home;
