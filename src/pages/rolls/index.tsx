import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import Layout from "@/components/layout/Layout";

const Rolls: FC = (): JSX.Element => {
   return (
      <>
         <Layout title="Роллы">
            <main className={styles.main}>
               <h2 className={styles.h2}>Роллы</h2>
            </main>
         </Layout>
      </>
   );
};

export default Rolls;
