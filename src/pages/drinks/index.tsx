import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import Layout from "@/components/layout/Layout";

const Drinks: FC = (): JSX.Element => {
   return (
      <>
         <Layout title="Напитки">
            <main className={styles.main}>
               <h2 className={styles.h2}>Напитки</h2>
            </main>
         </Layout>
      </>
   );
};

export default Drinks;
