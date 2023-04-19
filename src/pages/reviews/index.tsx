import Layout from "@/components/layout/Layout";
import Reviews from "@/components/reviews/Reviews";
import React from "react";
import styles from "@/styles/Home.module.scss";

const index = () => {

   return (
      <>
         <Layout title="Отзывы">
            <main className={styles.main}>
               <Reviews />
            </main>
         </Layout>
      </>
   );
};

export default index;
