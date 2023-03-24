import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import Layout from "@/components/layout/Layout";

const Corn: FC = (): JSX.Element => {
   return (
      <>
         <Layout title="Corn">
            <main className={styles.main}>
               <h2 className={styles.h2}>Corn</h2>
            </main>
         </Layout>
      </>
   );
};

export default Corn;
