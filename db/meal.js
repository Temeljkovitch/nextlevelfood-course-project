import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = () => {
  return db.prepare("SELECT * FROM meals").all(); // used for fetching all the data
};
