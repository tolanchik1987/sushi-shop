import { Roboto_Slab } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import cn from "classnames";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

import ImgTop1 from "/public/images/home/top/001.png";
import ImgTop2 from "/public/images/home/top/002.png";
import ImgTop3 from "/public/images/home/top/003.png";
import ImgTop4 from "/public/images/home/top/004.png";
import ImgTop5 from "/public/images/home/top/005.png";
import SwiperTop from "@/components/swiperTop/SwiperTop";
// Import Swiper styles
import SwiperMiddle from "@/components/swiperMidle/SwiperMiddle";

const RobotoSlabFont = Roboto_Slab({ subsets: ["latin"] });

const containerMotion = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         delayChildren: 0.2,
         staggerChildren: 0.1,
      },
   },
};

const textMotion = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
   },
};
const h1Array = ["М", "А", "Г", "А", "З", "И", "Н", " ", "С", "У", "Ш", "И"];

const Home: FC = (): JSX.Element => {
   return (
      <>
         <Layout
            title="Главная"
            description="Магазин суши и роллов в городе Тольятти по лучшим ценам!"
         >
            <main className={cn(styles.main, RobotoSlabFont.className)}>
               <motion.h1
                  variants={containerMotion}
                  initial="hidden"
                  animate="visible"
                  className={styles.h1}
               >
                  {h1Array.map((item, index) => (
                     <motion.span
                        variants={textMotion}
                        className={styles.itemH1}
                        key={index}
                     >
                        {item}
                     </motion.span>
                  ))}
               </motion.h1>
               <SwiperTop />
               <section className={styles.top}>
                  <div className={styles.container_grid}>
                     <motion.div
                        className={styles.chiken}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                           duration: 0.3,
                           delay: 0.2,
                           opacity: { duration: 1 },
                           ease: "linear",
                        }}
                     >
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
                     </motion.div>
                     <motion.div
                        className={styles.ugor}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                           duration: 0.3,
                           delay: 0.3,
                           opacity: { duration: 1 },
                           ease: "linear",
                        }}
                     >
                        <Image
                           className={styles.image_container}
                           src={ImgTop2}
                           alt="ugor"
                           width={220}
                           height={200}
                           quality={100}
                           blurDataURL="@/public/images/home/top/002.png"
                           placeholder="blur"
                        />
                        <h3>С угрем</h3>
                     </motion.div>
                     <motion.div
                        className={styles.corn}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                           duration: 0.3,
                           delay: 0.4,
                           opacity: { duration: 1 },
                           ease: "linear",
                        }}
                     >
                        <Image
                           className={styles.image_container}
                           src={ImgTop3}
                           alt="corn"
                           width={220}
                           height={200}
                           quality={100}
                           blurDataURL="@/public/images/home/top/003.png"
                           placeholder="blur"
                        />
                        <h3>Корн дог</h3>
                     </motion.div>
                     <motion.div
                        className={styles.pizza}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                           duration: 0.3,
                           delay: 0.5,
                           opacity: { duration: 1 },
                           ease: "linear",
                        }}
                     >
                        <Image
                           className={styles.image_container}
                           src={ImgTop4}
                           alt="pizza"
                           width={455}
                           height={200}
                           quality={100}
                           blurDataURL="@/public/images/home/top/004.png"
                           placeholder="blur"
                        />
                        <h3>Пицца</h3>
                     </motion.div>
                     <motion.div
                        className={styles.sale}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                           duration: 0.3,
                           delay: 0.6,
                           opacity: { duration: 1 },
                           ease: "linear",
                        }}
                     >
                        <Image
                           className={styles.image_container}
                           src={ImgTop5}
                           alt="sale"
                           width={470}
                           height={200}
                           quality={100}
                           blurDataURL="@/public/images/home/top/005.png"
                           placeholder="blur"
                        />
                        <h3>Акции</h3>
                     </motion.div>
                  </div>
               </section>
               <section className={styles.middle}>
                  <button className={styles.btn_prev}>
                     <AiOutlineArrowLeft className={styles.prevIcon} />
                  </button>
                  <SwiperMiddle />
                  <button className={styles.btn_next}>
                     <AiOutlineArrowRight className={styles.nextIcon} />
                  </button>
               </section>
               <section className={styles.bottom}></section>
            </main>
         </Layout>
      </>
   );
};

export default Home;
