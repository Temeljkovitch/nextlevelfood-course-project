import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals</h1>

      <p>
        <Link href="/">Back home</Link>
      </p>
    </main>
  );
}
