import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import Layout from "@/components/layout/Layout";

const Sale: FC = (): JSX.Element => {
   return (
      <>
         <Layout title="Акции">
            <main className={styles.main}>
               <h2 className={styles.h2}>Акции</h2>
            </main>
         </Layout>
      </>
   );
};

export default Sale;
