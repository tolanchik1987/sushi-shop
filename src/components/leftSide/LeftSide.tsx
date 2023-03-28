import Image from "next/image";
import React, { FC } from "react";
import styles from "./LeftSide.module.scss";
import Logo from "../../../public/logo.png";
import NavMenu from "./menu/NavMenu";
import Link from "next/link";

const LeftSide: FC = ():JSX.Element => {
   
   return (
      <aside className={styles.container}>
         <Link href="/" title="На главную">
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
            <p className={styles.text_logo}>Mineev</p>
         </Link>
         <NavMenu />
      </aside>
   );
};

export default LeftSide;
