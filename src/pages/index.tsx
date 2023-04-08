import { Roboto_Slab } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { FC, useState } from "react";
import cn from "classnames";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

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
   const [activeBottom, setAcitiveBottom] = useState(false);

   return (
      <>
         <Layout
            title="Главная"
            description="Магазин суши и роллов в городе Тольятти по лучшим ценам!"
         >
            <AnimatePresence>
               <motion.main
                  className={cn(styles.main, RobotoSlabFont.className)}
                  key="home"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
               >
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
                  <motion.section
                     className={
                        activeBottom ? styles.activeBottom : styles.bottom
                     }
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1.5 }}
                     viewport={{ once: true, amount: 0.2 }}
                  >
                     <h3>Заказать суши в Бишкеке</h3>
                     <p>
                        Ресторан “Суши и Лапша” предлагаем своим клиентам самые
                        вкусные суши с доставкой на дом, приготовленные по
                        классическим и адаптированным к европейской аудитории
                        рецептам, а также собственным наработкам наших поваров.
                        Мы ценим время наших клиентов, поэтому вы можете
                        заказать суши в Харькове с доставкой на дом или в офис.
                     </p>
                     <ul className={styles.bottomList}>
                        <span>В нашем меню более 20 видов суши:</span>
                        <li>Классические с сырым лососем, тунцом, окунем.</li>
                        <li>
                           Экзотические с тигровой креветкой, морским гребешком.
                        </li>
                        <li>Пикантные с копченым лососем, угрем.</li>
                     </ul>
                     <p>
                        В меню также представлены гунканы: с начинкой из красной
                        икры и тобико, а также феликсы, где японский майонез
                        сочетается с рыбой, морепродуктами, угрем. Любители
                        острых блюд могут купить суши с соусом спайси.
                        Популярные начинки — копченая курица, снежный краб,
                        креветки, гребешки, тунец, лосось и окунь.
                     </p>
                     <div
                        className={styles.btnMore}
                        onClick={() => setAcitiveBottom(!activeBottom)}
                     >
                        Подробнее
                        {activeBottom ? (
                           <BiChevronUp className={styles.arrowIcon} />
                        ) : (
                           <BiChevronDown className={styles.arrowIcon} />
                        )}
                     </div>
                  </motion.section>
               </motion.main>
            </AnimatePresence>
         </Layout>
      </>
   );
};

export default Home;
