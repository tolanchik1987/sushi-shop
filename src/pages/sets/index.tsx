import styles from "./Sets.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";
import Layout from "@/components/layout/Layout";

const Sets: FC = (): JSX.Element => {
   return (
      <>
         <Layout title="Сеты">
            <AnimatePresence>
               <motion.main
                  className={styles.main}
                  key="sets"
                  initial={{ opacity: 0, y: 30, borderRadius: "50%" }}
                  animate={{ opacity: 1, y: 0, borderRadius: "0%" }}
                  exit={{ opacity: 0, y: 30, borderRadius: "50%" }}
                  transition={{ delay: 0.2, duration: 0.3 }}
               >
                  <h2 className={styles.h2}>Сеты</h2>
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Officia iure a nesciunt quaerat nihil nulla vero quidem
                     molestiae minus, obcaecati quis. Quis vero consequuntur
                     quae exercitationem laborum atque, modi ipsa. Et sunt
                     quisquam molestias non eos facilis ipsam id ab officiis
                     laboriosam expedita facere quo modi voluptatem eligendi
                     nesciunt laudantium, culpa earum! Autem quibusdam eveniet
                     repellat eos mollitia, atque deserunt. Optio natus quo
                     eveniet accusantium modi officiis, qui expedita provident,
                     reprehenderit praesentium unde? Quam numquam nihil
                     asperiores aliquam est hic ullam totam veritatis odit
                     voluptates libero, possimus accusamus dolorem magni? Earum
                     repudiandae molestias vero unde excepturi sed deleniti qui
                     tempora tenetur minima eligendi eos, blanditiis placeat
                     voluptates totam ipsum iure explicabo sunt eum consequatur
                     neque! Ipsum distinctio quo repellendus consectetur. Dicta
                     error quae, quia aliquid repellat cumque maxime nulla,
                     sequi temporibus iure libero expedita! Id labore laborum
                     dolorum quo magnam recusandae, necessitatibus quod unde
                     doloribus porro tenetur, eveniet voluptate enim. Veniam
                     tempore similique sit consequatur saepe qui vel ad eum
                     exercitationem assumenda corrupti dolor, asperiores hic!
                     Nam distinctio odit quibusdam eaque, nesciunt facere
                     inventore officia dolor, reprehenderit vel accusantium
                     quod. Repudiandae in tempore molestiae, amet recusandae
                     est. Blanditiis nobis corporis molestias aspernatur, animi
                     dignissimos veritatis vitae ex dolor dicta assumenda
                     voluptates aliquam amet inventore vel magnam doloribus et
                     natus tempora! Et, quisquam enim adipisci, asperiores
                     praesentium corporis culpa laudantium aliquam sint
                     voluptatibus voluptatem dolorum officia, in deleniti eum
                     consequuntur saepe quod placeat vero maiores? Tenetur
                     quibusdam totam illum amet dolorem. Recusandae ex cumque
                     tenetur laudantium obcaecati doloribus placeat aperiam
                     vitae quidem saepe fugit, voluptas, pariatur ab rem
                     consequatur incidunt numquam necessitatibus accusantium
                     repellat odit. Assumenda voluptatibus laudantium
                     accusantium qui nemo. Accusantium architecto iure suscipit
                     fugiat nam repellat quidem aut sed amet itaque autem, quis
                     labore optio assumenda molestias, fuga obcaecati placeat
                     minima. Repellendus asperiores molestiae iure dolor, cumque
                     nisi illo?
                  </p>
               </motion.main>
            </AnimatePresence>
         </Layout>
      </>
   );
};

export default Sets;
