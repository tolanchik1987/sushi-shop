import { Roboto_Slab } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import cn from "classnames";
import Layout from "@/components/layout/Layout";

const RobotoSlabFont = Roboto_Slab({ subsets: ["latin"] });

const Home: FC = (): JSX.Element => {
   return (
      <>
         <Layout
            title="Главная"
            description="Магазин суши и роллов в городе Тольятти по лучшим ценам!"
         >
            <main className={cn(styles.main, RobotoSlabFont.className)}>
               <h1 className={styles.h1}>МАГАЗИН СУШИ</h1>
            </main>
         </Layout>
      </>
   );
};

export default Home;
