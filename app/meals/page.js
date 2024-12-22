import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import MealsHeader from "@/components/meals/meals-header";
import { getMeals } from "@/db/meal";

export default function Meals() {
  const meals = getMeals();
  return (
    <>
      <MealsHeader />
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
