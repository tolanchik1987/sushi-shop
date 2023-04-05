import Image from "next/image";
import React, { FC } from "react";
import styles from "./LeftSide.module.scss";
import Logo from "../../../public/logo.png";
import NavMenu from "./menu/NavMenu";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const logoText = ["M", "i", "n", "e", "e", "v"];

const containerMotion = {
   hidden: { opacity: 1 },
   visible: {
      opacity: 1,
      // scale: 1,
      transition: {
         delayChildren: 0.3,
         staggerChildren: 0.2,
      },
   },
};

const textLogoMotion = {
   hidden: { x: -50, opacity: 0 },
   visible: {
      x: 0,
      opacity: 1,
   },
};

const LeftSide: FC = (): JSX.Element => {
   const route = useRouter();

   return (
      <aside className={styles.container}>
         <Link href="/" title="На главную">
            {route.asPath == '/' ? <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{ duration: 1.5 }} >
            <Image
               className={styles.image_container}
               src={Logo}
               alt="logo"
               width={130}
               height={130}
               quality={100}
               blurDataURL="../../../public/logo.png"
               placeholder="blur"
            />
               </motion.span> : 
            <Image
               className={styles.image_container}
               src={Logo}
               alt="logo"
               width={130}
               height={130}
               quality={100}
               blurDataURL="../../../public/logo.png"
               placeholder="blur"
            />}
            {route.asPath == '/' ? <motion.ul
               variants={containerMotion}
               initial="hidden"
               animate="visible"
               className={styles.ul_text_logo}
            >
               {logoText.map((item, index) => (
                  <motion.li
                     variants={textLogoMotion}
                     className={styles.li_text_logo}
                     key={index}
                  >
                     {item}
                  </motion.li>
               ))}
            </motion.ul> : <ul
               className={styles.ul_text_logo}
            >
               {logoText.map((item, index) => (
                  <li
                     className={styles.li_text_logo}
                     key={index}
                  >
                     {item}
                  </li>
               ))}
            </ul>}
         </Link>
         <NavMenu />
      </aside>
   );
};

export default LeftSide;
