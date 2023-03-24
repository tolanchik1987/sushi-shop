import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import Layout from "@/components/layout/Layout";

const Sups: FC = (): JSX.Element => {
   return (
      <>
         <Layout title="Супы">
            <main className={styles.main}>
               <h2 className={styles.h2}>Супы</h2>
            </main>
         </Layout>
      </>
   );
};

export default Sups;
