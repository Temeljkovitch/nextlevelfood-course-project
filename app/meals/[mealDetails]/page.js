import Image from "next/image";
import styles from "./page.module.css";
import { getSingleMeal } from "@/db/meal";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meal = getSingleMeal(params.mealDetails);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage(request) {
  const meal = getSingleMeal(request.params.mealDetails);
  if (!meal) {
    notFound();
  }
  const { title, image, creator, creator_email, summary } = meal;
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <main>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>

      <p
        className={styles.instructions}
        dangerouslySetInnerHTML={{ __html: meal.instructions }}
      ></p>
    </main>
  );
}
