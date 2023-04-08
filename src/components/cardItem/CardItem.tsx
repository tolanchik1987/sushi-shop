import React from 'react'
import { motion } from "framer-motion";
import styles from './CardItem.module.scss'
import Image from 'next/image';

import Img001 from "/public/images/pages/sets/001.png";
import Img002 from "/public/images/pages/sets/002.png";
import Img003 from "/public/images/pages/sets/003.png";
import Img004 from "/public/images/pages/sets/004.png";
import Img005 from "/public/images/pages/sets/005.png";
import Img006 from "/public/images/pages/sets/006.png";
import Img007 from "/public/images/pages/sets/007.png";
import Img008 from "/public/images/pages/sets/008.png";
import Img009 from "/public/images/pages/sets/009.png";



type Props = {}

const ImgCard = [
   Img001,
   Img002,
   Img003,
   Img004,
   Img005,
   Img006,
   Img007,
   Img008,
   Img009,
];

const CardItem = (props: Props) => {
  return (
   <motion.div
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   transition={{ duration: 1.5 }}
   viewport={{ once: true , amount: 0.2}}
   className={styles.container}
>
   <Image
      className={styles.image_container}
      src={ImgCard[0]}
      alt="001"
      width={253}
      height={203}
      quality={100}
      blurDataURL="/public/images/pages/sets/001.png"
      placeholder="blur"
   />
   <p>Саломон сет</p>
   <p>1050 грамм, 30 кусочков</p>
   <div className={styles.containerPrice}>
      <p>1500 СОМ</p>
      <button>Хочу!</button>
   </div>
</motion.div>
  )
}

export default CardItem