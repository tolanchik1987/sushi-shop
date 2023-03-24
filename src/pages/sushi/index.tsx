import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import Layout from "@/components/layout/Layout";

const Sushi: FC = (): JSX.Element => {
   return (
      <>
         <Layout title="Суши">
            <main className={styles.main}>
               <h2 className={styles.h2}>Суши</h2>
            </main>
         </Layout>
      </>
   );
};

export default Sushi;
