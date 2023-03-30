import Link from "next/link";
import React, { FC, useState } from "react";
import styles from "./Header.module.scss";

type Props = {};

const Header: FC = (props: Props): JSX.Element => {
   const [searchValue, setSearchValue] = useState("");
   const [visibleSearch, setVisibleSearch] = useState(false);
   const [placeholderValue, setPlaceholderValue] = useState("поиск");

   return (
      <header className={styles.container}>
         <div className={styles.contact}>
            <div className={styles.tel}>
               <p>Наш телефон</p>
               <a href="tel:+996 705 188 955">+996 705 188 955</a>
               <a href="tel:+996 555 188 955">+996 555 188 955</a>
            </div>
            <div className={styles.contact_Img}>
               <img src="../../../images/header/Clock.png" alt="clock" />
               <p>работаем с 10:00 до 00:00</p>
            </div>
         </div>
         <div className={styles.search}>
            <div className={styles.city}>
               <p>Город:</p>
               <p>Бишкек</p>
            </div>
            <div className={styles.nav_search}>
               <Link href="/reviews">Отзывы</Link>
               <Link href="/dostavka">Доставка и оплата</Link>
               <img
                  src="../../../images/header/Search.png"
                  alt="search"
                  onClick={() => setVisibleSearch(!visibleSearch)}
               />
               <input
                  className={
                     visibleSearch
                        ? styles.searchInputActive
                        : styles.searchInput
                  }
                  type="search"
                  placeholder={placeholderValue}
                  value={searchValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                     setSearchValue(e.target.value);
                  }}
                  onFocus={() => setPlaceholderValue("")}
                  onBlur={() => {
                     setPlaceholderValue("поиск");
                     setVisibleSearch(!visibleSearch);
                  }}
               />
            </div>
         </div>
      </header>
   );
};

export default Header;
