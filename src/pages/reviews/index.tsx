import Layout from "@/components/layout/Layout";
import Reviews from "@/components/reviews/Reviews";
import React from "react";
import styles from '@/styles/Home.module.scss'

type Props = {};

const index = (props: Props) => {
   return (
      <>
         <Layout title="Отзывы">
            <main className={styles.main}>
               <h2 className={styles.h2}>Отзывы</h2>
               <Reviews />
            </main>
         </Layout>
      </>
   );
};

export default index;
