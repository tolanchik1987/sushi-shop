import { Roboto_Slab } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import cn from "classnames";
import Layout from "@/components/layout/Layout";
import Img001 from "/public/images/home/001.png";
import Img002 from "/public/images/home/002.png";
import Img003 from "/public/images/home/003.png";
import Img004 from "/public/images/home/004.png";
import Img005 from "/public/images/home/005.png";
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
import Image from "next/image";

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
                        Navigation,
                        Pagination,
                        Scrollbar,
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
                     navigation={{ nextEl: 'none', prevEl: 'none'}}
                     pagination={{ clickable: true }}
                     scrollbar={{ draggable: true }}
                     onSwiper={(swiper) => console.log(swiper)}
                     onSlideChange={() => console.log("slide change")}
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
            </main>
         </Layout>
      </>
   );
};

export default Home;
