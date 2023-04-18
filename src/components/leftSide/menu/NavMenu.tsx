import React, { FC, useState, useEffect, useRef } from "react";
import styles from "./NavMenu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import SvgSelector from "./SvgSelector";

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
const navSvg = [
   "PizzaSvg",
   "SetsSvg",
   "WOKSvg",
   "RollsSvg",
   "SushiSvg",
   "SalatsSvg",
   "SupsSvg",
   "CornSvg",
   "DrinkSvg",
   "SaleSvg",
];

const NavMenu: FC = () => {
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
                              {/* <Image
                                 className={styles.image_container}
                                 src={navSvg[index]}
                                 alt=""
                                 width={30}
                                 height={30}
                                 quality={100}
                              /> */}
                              <span className={styles.image_container}><SvgSelector iconSvg={`${navSvg[index]}`}/></span>         
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
                              <span className={styles.image_container}><SvgSelector iconSvg={`${navSvg[index]}`}/></span>
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
