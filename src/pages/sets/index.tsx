import styles from "./Sets.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import SetsImg from "../../../public/images/home/menu/2.png";
import { FC, useState } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { spawn } from "child_process";
import CardItem from "@/components/cardItem/CardItem";

const sortList: string[] = [
   "По умолчанию",
   "Название",
   "Сначала дешевле",
   "Сначала дороже",
   "Количество кусочков",
   "Вес",
];

const Sets: FC = (): JSX.Element => {
   const [activeList, setActiveList] = useState(false); // Открытие и закрытие сортировки
   const [activeSortIndex, setActiveSortIndex] = useState(0); // Активный индекс сортировки
   const [activeBottom, setAcitiveBottom] = useState(false); // Секция в низу скрыть/показать

   return (
      <>
         <Layout title="Сеты">
            <AnimatePresence>
               <motion.main
                  className={styles.main}
                  key="sets"
                  initial={{ opacity: 0, y: 30, borderRadius: "50%" }}
                  animate={{ opacity: 1, y: 0, borderRadius: "0%" }}
                  exit={{ opacity: 0, y: 30, borderRadius: "50%" }}
                  transition={{ delay: 0.2, duration: 0.3 }}
               >
                  <div className={styles.setsHeader}>
                     <div className={styles.containerImg}>
                        <Image
                           className={styles.setImg}
                           src={SetsImg}
                           alt=""
                           width={30}
                           height={30}
                           quality={100}
                        />
                        <h2 className={styles.h2}>Сеты</h2>
                     </div>

                     <div
                        className={
                           activeList ? styles.sortListActive : styles.sortList
                        }
                        onClick={() => setActiveList(!activeList)}
                     >
                        <h3>Сортировка</h3>
                        <span>{sortList[activeSortIndex]}</span>
                        {activeList && (
                           <div className={styles.popupList}>
                              {sortList.map((item, index) => (
                                 <span
                                    onClick={() => setActiveSortIndex(index)}
                                    className={
                                       activeSortIndex == index
                                          ? styles.activeIndex
                                          : styles.sortListItem
                                    }
                                    key={item}
                                 >
                                    {item}
                                 </span>
                              ))}
                           </div>
                        )}
                        {activeList ? (
                           <BiChevronUp className={styles.arrowIcon} />
                        ) : (
                           <BiChevronDown className={styles.arrowIcon} />
                        )}
                     </div>
                  </div>
                  <div className={styles.containerGallery}>
                     <div className={styles.containerCard}>
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                     </div>
                  </div>
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

export default Sets;
