import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = () => {
  return db.prepare("SELECT * FROM meals").all(); // "all" method is used for fetching all rows
};

export const getSingleMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // "get" method is used for fetching a single row
};
