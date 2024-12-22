
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import MealsHeader from "@/components/meals/meals-header";

export default function Meals() {
  return (
    <>
      <MealsHeader />
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
