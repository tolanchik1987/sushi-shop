import React, { FC, useState } from "react";
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
   const router = useRouter();

   return (
      <>
         <nav className={styles.nav}>
            <menu>
               <ul>
                  {navMenu.map((item, index: number) => (
                     <li key={index}>
                        <Link
                           href={`/${LinkMenu[index]}`}
                           className={
                              router.asPath  === `/${LinkMenu[index]}` ? styles.active : ""
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
                     </li>
                  ))}
               </ul>
            </menu>
         </nav>
      </>
   );
};

export default NavMenu;
