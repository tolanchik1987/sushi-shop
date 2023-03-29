import React, { ReactNode } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import LeftSide from "@/components/leftSide/LeftSide";
import RightSide from "@/components/rightSide/RightSide";

export interface ILayoutProps {
   children: ReactNode;
   title: string;
   description?: string;
}

const Layout = ({ children, title, description }: ILayoutProps) => {
   return (
      <>
         <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link
               rel="apple-touch-icon"
               sizes="180x180"
               href="/apple-touch-icon.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="32x32"
               href="/favicon-32x32.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="16x16"
               href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
         </Head>
         <div className={styles.container}>
            <LeftSide />
            <div className={styles.wrapper}>
               <Header />
               {children}
               <Footer />
            </div>
            <RightSide />
         </div>
      </>
   );
};

export default Layout;
