import React, { FC, useState } from "react";
import styles from "./Reviews.module.scss";
import cn from "classnames";

export interface IDataMessages {
   name: string;
   date: string;
   message: string;
}

const dataMessages: IDataMessages[] = [
   {
      name: "Розалия",
      date: "02.24.21",
      message:
         "Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя, всегда вежливые курьеры и девушки на телефоне",
   },
   {
      name: "Елена",
      date: "02.23.21",
      message: "Ооочень вкусно!!!!!",
   },
   {
      name: "Сергей Гаврилюк",
      date: "02.23.21",
      message:
         "Заказываем у Вас больше 2 -ух лет, были разные ситуации, но сервис стал лучше, суши вкуснее. За доставку сегодня на время, огромное спасибо, точь-в-точь в минута в минуту. Успехов Вам и приятных бонусов нам )",
   },
];

const Reviews: FC = () => {
   const [message, setMessage] = useState<string>("");
   const [user, setUser] = useState<string>("");
   const [date, setDate] = useState<string>("");
   const [openAddMessageForm, setOpenAddMessageForm] = useState<boolean>(false);

   const openMessageForm = (): void => {                 // Открытие\Закрытие модального окна добавления отзыва
      setOpenAddMessageForm(!openAddMessageForm);
   };

	const formSubmit = () => {  
		if (user === "" || date === "" || message === "") {
			return
		}                        // Добавление отзыва
		dataMessages.push({name: `${user}`, date: `${date}`, message: `${message}`});
		setOpenAddMessageForm(false);
	}

   return (
      <div className={styles.container}>
         <div className={styles.containerHeader}>
            <h2 className={styles.h2}>Отзывы</h2>
            <button
               className={styles.btnAddReviews}
               onClick={() => openMessageForm()}
            >
               + Добавить отзыв
            </button>
         </div>

         {/* Добавить сообщение */}
         <div
            className={
               openAddMessageForm
                  ? styles.wrapperFormAddMessage
                  : styles.notVisibleForm
            }
            // action="#"
         >
            <div className={styles.containerFormAddMessage}>
					<div className={styles.btnClose} title="Закрыть" onClick={() =>  setOpenAddMessageForm(false)}><p>x</p></div>
               <div>
                  <label htmlFor="userName">Введите имя:</label>
                  <input
                     name="userName"
                     className={styles.inputForm}
                     type="text"
                     value={user}
                     onChange={(e) => setUser(e.target.value)}
                  />
               </div>
               <div>
                  <label htmlFor="date">Введите дату:</label>
                  <input
                     name="date"
                     className={styles.inputForm}
                     type="text"
                     value={date}
                     onChange={(e) => setDate(e.target.value)}
                  />
               </div>
               <div>
                  <label htmlFor="message">Напишите ваш отзыв:</label>
                  <input
                     name="message"
                     className={cn(styles.inputForm, styles.inputFormMessage)}
                     type="text"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                  />
               </div>
					<button className={styles.btnSubmit} onClick={() => formSubmit()}>Отправить</button>
            </div>
         </div>

         {dataMessages.map((m) => (
            <div className={styles.containerMessage}>
               <div className={styles.containerUserAndDate}>
                  <h3 className={styles.nameUser}>{m.name}</h3>
                  <p className={styles.dateMessage}>{m.date}</p>
               </div>
               <span className={styles.messageUser}>{m.message}</span>
            </div>
         ))}
      </div>
   );
};

export default Reviews;
