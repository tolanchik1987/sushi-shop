import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import Layout from "@/components/layout/Layout";

const Salats: FC = (): JSX.Element => {
   return (
      <>
         <Layout title="Салаты">
            <main className={styles.main}>
               <h2 className={styles.h2}>Салаты</h2>
            </main>
         </Layout>
      </>
   );
};

export default Salats;
