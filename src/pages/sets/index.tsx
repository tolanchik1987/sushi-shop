import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import Layout from "@/components/layout/Layout";

const Sets: FC = (): JSX.Element => {
   return (
      <>
         <Layout title="Сеты">
            <main className={styles.main}>
               <h2 className={styles.h2}>Сеты</h2>
            </main>
         </Layout>
      </>
   );
};

export default Sets;
