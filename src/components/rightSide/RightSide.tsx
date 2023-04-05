import React from "react";
import styles from "./RightSide.module.scss";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {};

const RightSide = (props: Props) => {
   const route = useRouter();

   return (
      <aside className={styles.container}>
         {route.asPath == "/" ? (
            <motion.div
               className={styles.cart_and_adress}
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{
                  duration: 0.5,
                  opacity: { duration: 1 },
                  // ease: "linear",
               }}
            >
               <p>Ваша корзина пуста.</p>
               <p>Добавьте же скорее что-нибудь!</p>
               <button className={styles.btn}>
                  Бесплатная доставка от 800 СОМ
               </button>
               <iframe
                  className={styles.map}
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A14e6e1f94f738edc067edbf925bb7de10f30d92bc423ea57f19be68a35c3352c&amp;source=constructor"
                  width="290"
                  height="116"
               ></iframe>
               <p>Укажите адрес</p>
               <p>И узнайте время доставки</p>
            </motion.div>
         ) : (
            <div className={styles.cart_and_adress}>
               <p>Ваша корзина пуста.</p>
               <p>Добавьте же скорее что-нибудь!</p>
               <button className={styles.btn}>
                  Бесплатная доставка от 800 СОМ
               </button>
               <iframe
                  className={styles.map}
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A14e6e1f94f738edc067edbf925bb7de10f30d92bc423ea57f19be68a35c3352c&amp;source=constructor"
                  width="290"
                  height="116"
               ></iframe>
               <p>Укажите адрес</p>
               <p>И узнайте время доставки</p>
            </div>
         )}
      </aside>
   );
};

export default RightSide;
