import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import Layout from "@/components/layout/Layout";

const Wok: FC = (): JSX.Element => {
   return (
      <>
         <Layout title="WOK">
            <main className={styles.main}>
               <h2 className={styles.h2}>WOK</h2>
            </main>
         </Layout>
      </>
   );
};

export default Wok;
