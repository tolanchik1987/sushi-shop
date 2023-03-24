import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import Layout from "@/components/layout/Layout";

const Pizza: FC = (): JSX.Element => {
   return (
      <>
         <Layout title="Пицца">
            <main className={styles.main}>
               <h2 className={styles.h2}>Пицца</h2>
            </main>
         </Layout>
      </>
   );
};

export default Pizza;
