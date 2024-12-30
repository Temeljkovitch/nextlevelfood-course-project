import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export const getMeals = () => {
  return db.prepare("SELECT * FROM meals").all(); // "all" method is used for fetching all rows
};

export const getSingleMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // "get" method is used for fetching a single row
};

export const postMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true }); // generate url-friendly slug from title (Brazilian BQQ would become brazilian-bbq)
  meal.instructions = xss(meal.instructions); // sanitize instructuions field to prevent cross-site-scripting
  const extension = meal.image.name.split(".").pop(); // extracts only file extension from image
  const fileName = `${meal.slug}.${extension}`; // creates new filename combining slugified title and image extesion (brazillian-bbq.png)
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });
  meal.image = `/images/${fileName}`;
  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
    `
  ).run(meal);
};
