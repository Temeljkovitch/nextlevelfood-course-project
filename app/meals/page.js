import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import MealsHeader from "@/components/meals/meals-header";
import { getMeals } from "@/db/meal";
import { Suspense } from "react";

async function Meals() {
  const meals = getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <MealsHeader />
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
