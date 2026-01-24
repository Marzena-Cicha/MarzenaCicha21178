import Link from 'next/link';

export default function MealsPage() {
  return (
    <>
      <h1>Browse Meals</h1>
      <p>To jest /meals</p>

      <ul>
        <li>
          Przykład dynamiczny: <Link href="/meals/pierogi">/meals/pierogi</Link>
        </li>
        <li>
          Share: <Link href="/meals/share">/meals/share</Link>
        </li>
      </ul>
    </>
  );
}
