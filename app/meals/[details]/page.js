export default function MealDetails({params}) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meal Details</h1>
      <p>{params.details}</p>
    </main>
  );
}
