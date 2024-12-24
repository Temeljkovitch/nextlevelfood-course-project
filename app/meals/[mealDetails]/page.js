export default function MealDetailsPage({params}) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meal Details</h1>
      <p>{params.details}</p>
    </main>
  );
}
