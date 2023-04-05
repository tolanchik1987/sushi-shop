import React, { FC, useState, useEffect, useRef } from "react";
import styles from "./NavMenu.module.scss";
import PizzaImg from "../../../../public/images/home/menu/1.png";
import SetsImg from "../../../../public/images/home/menu/2.png";
import WOKImg from "../../../../public/images/home/menu/3.png";
import RollsImg from "../../../../public/images/home/menu/4.png";
import SushiImg from "../../../../public/images/home/menu/5.png";
import SalatsImg from "../../../../public/images/home/menu/6.png";
import SupsImg from "../../../../public/images/home/menu/7.png";
import CornImg from "../../../../public/images/home/menu/8.png";
import DrinkImg from "../../../../public/images/home/menu/9.png";
import SaleImg from "../../../../public/images/home/menu/10.png";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const containerMotion = {
   hidden: { opacity: 1 },
   visible: {
      opacity: 1,
      // scale: 1,
      transition: {
         delayChildren: 0.2,
         staggerChildren: 0.1,
      },
   },
};

const itemsMotion = {
   hidden: { x: -20, opacity: 0 },
   visible: {
      x: 0,
      opacity: 1,
   },
};

const navMenu: string[] = [
   "Пицца",
   "Сеты",
   "WOK",
   "Роллы",
   "Суши",
   "Салаты",
   "Супы",
   "Корн доги",
   "Напитки",
   "Акции",
];
const LinkMenu: string[] = [
   "pizza",
   "sets",
   "wok",
   "rolls",
   "sushi",
   "salats",
   "sups",
   "corn",
   "drinks",
   "sale",
];
const navImg = [
   PizzaImg,
   SetsImg,
   WOKImg,
   RollsImg,
   SushiImg,
   SalatsImg,
   SupsImg,
   CornImg,
   DrinkImg,
   SaleImg,
];

const NavMenu: FC = (): JSX.Element => {
   const isMounted = useRef(false);
   const router = useRouter();

   useEffect(() => {
      isMounted.current = true;
   }, []);

   return (
      <>
         <nav className={styles.nav}>
            <menu>
               {router.asPath === "/" ? (
                  <motion.ul
                     className="container"
                     variants={containerMotion}
                     initial="hidden"
                     animate="visible"
                  >
                     {navMenu.map((item, index: number) => (
                        <motion.li
                           key={index}
                           variants={itemsMotion}
                           whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 1.1 }}
                        >
                           <Link
                              href={`/${LinkMenu[index]}`}
                              className={
                                 router.asPath === `/${LinkMenu[index]}`
                                    ? styles.active
                                    : ""
                              }
                           >
                              <Image
                                 className={styles.image_container}
                                 src={navImg[index]}
                                 alt=""
                                 width={30}
                                 height={30}
                                 quality={100}
                              />
                              {item}
                           </Link>
                        </motion.li>
                     ))}
                  </motion.ul>
               ) : (
                  <ul className="container">
                     {navMenu.map((item, index: number) => (
                        <motion.li
                           key={index}
                           variants={itemsMotion}
                           whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 1.1 }}
                        >
                           <Link
                              href={`/${LinkMenu[index]}`}
                              className={
                                 router.asPath === `/${LinkMenu[index]}`
                                    ? styles.active
                                    : ""
                              }
                           >
                              <Image
                                 className={styles.image_container}
                                 src={navImg[index]}
                                 alt=""
                                 width={30}
                                 height={30}
                                 quality={100}
                              />
                              {item}
                           </Link>
                        </motion.li>
                     ))}
                  </ul>
               )}
            </menu>
         </nav>
      </>
   );
};

export default NavMenu;
