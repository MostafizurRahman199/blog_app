import Featured from "@/component/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/component/categoryList/CategoryList";
import Cardlist from "@/component/cardlist/Cardlist";
import Menu from "@/component/menu/Menu";


export default function Home() {
  return (
    <div className={styles.container}>
    <Featured></Featured>
    <CategoryList></CategoryList>
    <div className={styles.content}>
      <Cardlist></Cardlist>
      <Menu></Menu>
    </div>
    </div>
  );
}
