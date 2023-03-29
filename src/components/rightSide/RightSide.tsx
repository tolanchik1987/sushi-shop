import React from "react";
import styles from "./RightSide.module.scss";

type Props = {};

const RightSide = (props: Props) => {
   return (
      <aside className={styles.container}>
         <div className={styles.cart_and_adress}>
            <p>Ваша корзина пуста.</p>
            <p>Добавьте же скорее что-нибудь!</p>
            <button className={styles.btn}>Бесплатная доставка от 800 СОМ</button>
            <iframe
               className={styles.map}
               src="https://yandex.ru/map-widget/v1/?um=constructor%3A14e6e1f94f738edc067edbf925bb7de10f30d92bc423ea57f19be68a35c3352c&amp;source=constructor"
               width="290"
               height="116"
            ></iframe>
            <p>Укажите адрес</p>
            <p>И узнайте время доставки</p>
         </div>
      </aside>
   );
};

export default RightSide;
