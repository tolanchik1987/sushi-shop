import styles from "./Pizza.module.scss";
import { FC } from "react";
import Layout from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";


const Pizza: FC = (): JSX.Element => {
   return (
      <>
         <Layout title="Пицца">
            <AnimatePresence>
               <motion.main
                  key="pizza"
                  initial={{ opacity: 0, y: 30, borderRadius: "50%" }}
                  animate={{ opacity: 1, y: 0, borderRadius: "0%" }}
                  exit={{ opacity: 0, y: 30, borderRadius: "50%" }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className={styles.main}
               >
                  <h2 className={styles.h2}>Пицца</h2>
                  <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Cupiditate blanditiis perferendis aperiam adipisci
                     recusandae, ad, facilis accusamus placeat commodi expedita
                     laudantium possimus, voluptatibus rerum ipsum est. Ab
                     placeat earum quibusdam? Enim totam nisi delectus, sapiente
                     nesciunt obcaecati quae odio corrupti quaerat inventore
                     dicta vel. Ullam aut voluptates quaerat repellendus.
                     Facilis sit consequatur deserunt quidem hic fugiat sapiente
                     quos accusamus blanditiis! Eius labore explicabo provident
                     eos illum nulla perferendis nisi, voluptatem sed! Delectus
                     enim necessitatibus numquam commodi impedit, sapiente ex a
                     quae, temporibus sint iure saepe voluptatum, illo doloribus
                     in distinctio! Enim illum perspiciatis fugiat saepe aliquid
                     neque vero laborum, quis corporis vel nulla nihil doloribus
                     exercitationem beatae quae ut sit voluptatibus officiis
                     dolor perferendis porro eveniet. Ea assumenda quis vero?
                     Placeat, eligendi magnam? Eligendi, vero esse. Cupiditate
                     harum mollitia officia libero commodi sed deleniti
                     asperiores sequi, ab inventore quisquam nulla laborum.
                     Ratione ab quidem magnam blanditiis ea porro commodi
                     ducimus. Asperiores esse modi fugit, natus est distinctio
                     odio illum repellat molestiae magnam, neque reiciendis iure
                     vitae, ullam quaerat incidunt expedita. Cupiditate,
                     architecto! Quo ut nisi nam, magni deleniti odio! Tenetur!
                     Ratione, eum? Sint eveniet vitae quibusdam molestias sed!
                     Quod iure possimus voluptatibus repellat dicta modi minus
                     quasi fuga atque voluptatum nostrum quae, nemo maiores
                     dolorem excepturi rem a. Corrupti, dolore! Cumque
                     necessitatibus debitis ipsum, ea eum facilis ipsa quas
                     obcaecati? Nisi quia voluptate ex quod illo corrupti rem
                     deserunt ut sapiente, non ullam hic expedita, amet
                     voluptatibus nemo id aut? Voluptate placeat officiis porro
                     ea quas! Quo, repellat quod cum repellendus, harum deleniti
                     repudiandae commodi beatae alias, pariatur corporis
                     deserunt molestiae esse eum ullam illum ipsam nulla.
                     Voluptas, in iste? Temporibus laboriosam velit ab alias
                     corporis sint voluptatem repellendus architecto voluptatum
                     explicabo odio aut possimus quisquam consequuntur
                     asperiores iure praesentium, animi laudantium enim!
                     Reprehenderit nihil quo omnis perspiciatis sequi unde.
                     Voluptate corrupti, et rem nisi nulla iure assumenda
                     suscipit inventore dolor vitae pariatur adipisci ab ullam
                     debitis consequuntur cupiditate dolore atque cum ipsum
                     officia veritatis unde! Libero aut eligendi ducimus.
                     Tempora cupiditate nihil officia soluta libero repellat
                     minima placeat amet asperiores, nemo repellendus accusamus
                     laborum rerum optio commodi ipsa laudantium beatae hic
                     deleniti? Veritatis soluta fugit odio excepturi obcaecati
                     dolorum. Omnis natus eligendi ratione hic nesciunt labore
                     illo iste reprehenderit tempore unde, nostrum ut maxime
                     voluptatum vel doloremque quo magnam. Temporibus officia,
                     eum nostrum quidem consequuntur exercitationem iusto
                     molestiae? Sapiente. Architecto, a dicta illo esse quaerat
                     ullam molestiae, quibusdam odit aut non quo fugiat nihil
                     asperiores iure quod dolore facilis temporibus, inventore
                     rem? Qui id autem repellat accusamus odit iste. Minima nemo
                     vero accusamus repellat explicabo quis voluptate! Cum ipsum
                     modi numquam fugiat tenetur! Repellendus earum similique
                     porro distinctio placeat recusandae, iure soluta tempore
                     quos, velit excepturi quaerat ut molestiae. Earum placeat
                     ut optio aliquid consequatur tenetur fugit iste error
                     dolorum. Qui sequi accusantium neque eligendi aperiam hic
                     animi quae tempore, sed in! Earum in dolor neque omnis
                     incidunt vel. Qui, vero veritatis voluptates quam maxime
                     distinctio id tempora architecto dolor tenetur, iure
                     nostrum voluptatem aliquid repellendus fugiat illo beatae
                     culpa error odio, et velit sapiente animi facere vel. Iure.
                     Voluptate, cum placeat! Labore, explicabo voluptates
                     possimus quia totam voluptatibus nostrum consectetur, in
                     reiciendis laboriosam quos eos atque quasi officia quo a
                     corrupti doloremque pariatur! Odio, eum id? Quos, minima.
                     Beatae temporibus perspiciatis id sit nisi ab recusandae,
                     aspernatur quis sint dolore similique adipisci illum sunt
                     possimus earum aliquid porro dolorem corrupti voluptates?
                     Dolor ipsam esse hic ipsum, exercitationem architecto? Non
                     quia mollitia minus possimus, officia cum aliquam
                     temporibus libero tempora molestias, architecto consectetur
                     necessitatibus sapiente! Labore numquam magnam qui tempora
                     vero itaque neque quam ratione nihil! Culpa, quo
                     aspernatur. Culpa ratione quaerat aspernatur dolor debitis
                     magni. Inventore obcaecati culpa ipsam dolor veniam ullam
                     est, hic delectus cum itaque vel quam perferendis a
                     incidunt, debitis laborum modi facere tenetur. Quisquam.
                     Consequatur exercitationem ea dolor deleniti commodi
                     blanditiis suscipit ducimus earum, asperiores possimus
                     dolore porro voluptas quisquam animi natus deserunt,
                     tempore dolorem ex. Nemo corrupti ipsa repellat! Labore
                     quaerat deserunt cum? Deserunt accusantium architecto
                     quisquam repudiandae facilis. Obcaecati assumenda maiores,
                     dolore, enim dolores quis labore ea molestiae illum quos,
                     minima exercitationem velit aliquid voluptates reiciendis
                     dignissimos placeat nesciunt dolorum incidunt
                     reprehenderit! Est eaque temporibus alias ex nemo vel
                     adipisci asperiores at error, consequuntur, aliquam numquam
                     optio inventore placeat animi perferendis, odio nobis. Enim
                     suscipit vero totam voluptas ullam, voluptates placeat
                     illum? Odit qui vel suscipit, quasi debitis minima
                     doloremque sunt excepturi laborum cupiditate inventore
                     sapiente maxime ipsa ex obcaecati reprehenderit asperiores
                     officiis vitae, mollitia dignissimos temporibus magni,
                     consequatur molestias. Suscipit, dolorem! Reprehenderit
                     voluptatem voluptatibus nostrum aliquid, illum tempora et
                     earum vel! Voluptas natus provident maxime illo in
                     consequuntur sunt ipsam ut voluptate, repellendus quaerat,
                     quibusdam facere perferendis ipsum quam cumque magnam!
                     Odio, fugit! Impedit aliquid vitae dignissimos libero
                     asperiores est ea nihil illo nobis doloremque atque
                     expedita, quibusdam eaque quisquam distinctio quae totam,
                     sed amet dolores, ipsum et quidem natus maiores. Commodi,
                     pariatur? Nulla magnam corrupti qui voluptatum aliquam
                     nesciunt, illo eius rerum culpa at corporis quia commodi
                     voluptates odio nam dignissimos. Labore reprehenderit ipsam
                     quam architecto natus rerum aperiam. Provident. Repellendus
                     praesentium repellat quibusdam laudantium porro aliquam eum
                     harum itaque nulla, blanditiis fugiat soluta ratione
                     excepturi hic aspernatur delectus similique doloremque quod
                     deserunt! Tempore, laborum enim in earum perferendis
                     commodi? In quidem quas tempore ex, non mollitia! Harum,
                     debitis alias nisi ab beatae nam deserunt eveniet quae
                     perspiciatis vero, esse architecto adipisci provident!
                     Consequatur inventore, qui atque aliquid ratione beatae?
                     Doloremque iure corporis ex dicta id libero aut porro
                     commodi dolore sapiente officia, delectus molestiae
                     excepturi eum tenetur quam voluptatem. Dolor eum numquam
                     modi perferendis minima excepturi vitae a sapiente!
                     Architecto sed placeat sint eum quas exercitationem ullam
                     labore nemo, blanditiis voluptatibus. Quos, facere libero!
                     Itaque unde iusto nam cum pariatur, quisquam expedita.
                     Animi laborum modi ipsa accusamus esse assumenda. Suscipit
                     labore incidunt, sit officiis, facere voluptatum adipisci,
                     tempora placeat autem sint nemo voluptatibus nobis animi
                     tenetur nihil veritatis sunt ipsam commodi ea provident qui
                     hic blanditiis repellat. Dignissimos, fugit? Cumque eaque
                     nam ad reiciendis obcaecati temporibus laboriosam, facere
                     architecto, expedita corrupti iure? Nam commodi nulla,
                     iusto beatae vero exercitationem possimus, dignissimos
                     veniam a culpa quia quasi itaque architecto perferendis.
                     Error, pariatur veritatis? Odio, aliquid pariatur! Pariatur
                     recusandae officia autem laborum esse alias, officiis
                     eligendi similique asperiores vel enim voluptates expedita
                     sunt aut distinctio accusantium dolores illo quasi est
                     praesentium. Delectus blanditiis impedit eaque voluptatum
                     amet soluta provident nemo expedita modi animi, accusantium
                     veniam consectetur. Inventore commodi assumenda dolorem
                     quisquam. Praesentium libero at ex aliquid veniam nostrum
                     impedit amet excepturi! Odio, aperiam. Necessitatibus ipsum
                     voluptates obcaecati? Unde corrupti saepe veniam porro
                     natus explicabo quam sunt deserunt id. Magni quae quam odit
                     aliquam ipsam omnis accusantium, perferendis veniam eius
                     error facilis. Aspernatur soluta doloribus quas nesciunt
                     vero, natus numquam at inventore deserunt possimus sed rem
                     tempore, fugiat dicta! Alias rem placeat, repellendus
                     quidem consequuntur illum eaque necessitatibus porro
                     cupiditate error perspiciatis. Dolorem ipsa aspernatur
                     doloribus recusandae sint assumenda ipsam odit dolorum eos
                     earum voluptatum unde, eius aut debitis quam ducimus
                     laudantium quisquam nihil facere explicabo doloremque iusto
                     impedit reiciendis architecto? Aperiam? Voluptatum
                     inventore vel autem illum alias repellat dolorum, aut ex
                     eligendi aspernatur optio architecto odio cupiditate
                     doloremque tenetur aliquid praesentium laborum dicta eos
                     quia error tempora! Sapiente autem sint perspiciatis?
                     Eveniet magni consequuntur, culpa nam amet asperiores
                     tempora voluptate facere omnis obcaecati, aliquam explicabo
                     delectus ipsa reiciendis a sapiente, hic iste neque
                     incidunt. Nam hic ex, a libero ratione incidunt. Blanditiis
                     officiis unde ut minus consectetur molestias officia odio
                     adipisci error, ipsam consequatur eius accusamus recusandae
                     enim, expedita corporis, doloribus ipsum inventore commodi
                     quaerat doloremque voluptate. Earum totam ea omnis. Est,
                     error? Saepe, ipsa dolore temporibus totam corrupti
                     accusamus, pariatur voluptate, perspiciatis beatae
                     doloribus dicta architecto aut ipsum aliquam itaque
                     distinctio at. Neque commodi, ullam fugiat eum dolores
                     temporibus quas? Saepe nobis ullam dolores! Debitis hic
                     quae aliquam provident laborum, et nostrum eaque nulla?
                     Ducimus, natus qui quis dolore culpa unde dolor laboriosam
                     consectetur quae suscipit, cumque accusamus aut ad.
                     Repellendus, pariatur iusto totam eligendi quia inventore
                     magnam esse nesciunt beatae est error, repellat vero
                     dolore. Ipsum, similique. Dolorum repellendus dolores
                     similique nobis, sequi cum eligendi est quis voluptatem
                     cupiditate! Quasi aliquid repudiandae repellat sint,
                     doloribus non quos quis officiis, optio dolor, accusantium
                     neque soluta! Assumenda dolor libero amet repellat
                     perspiciatis, praesentium incidunt qui. Dolores laudantium
                     similique eligendi quae error. Reprehenderit culpa harum
                     illum impedit ipsam nostrum sequi accusamus repudiandae
                     exercitationem quia? Minima soluta enim magni, tenetur quos
                     earum aliquam doloribus facilis error libero sunt
                     inventore, voluptates, non nihil eaque. Corrupti distinctio
                     ratione, dolores a sint dicta quis, suscipit repellat
                     minima veniam fugiat officia perspiciatis earum impedit ab,
                     nostrum atque magnam! Atque, fugit ipsum hic sit nemo
                     inventore nisi cum. Quidem possimus dolore aut, soluta
                     similique, in minus saepe asperiores quos ipsam architecto
                     excepturi expedita! Laboriosam, nisi aspernatur aliquid
                     possimus id non, deserunt recusandae tempore sunt quos
                     repellendus incidunt eligendi? Temporibus, id consectetur,
                     eligendi, delectus sint eaque est quibusdam saepe quam
                     voluptates expedita dolores molestias! Itaque sequi quidem
                     autem harum aperiam. Reiciendis quo dolorem laudantium
                     iusto, molestias illo nobis sint.q
                  </p>
               </motion.main>
            </AnimatePresence>
         </Layout>
      </>
   );
};

export default Pizza;
