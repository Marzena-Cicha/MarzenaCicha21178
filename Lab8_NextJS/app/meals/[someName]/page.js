export default function MealDetailsPage({ params }) {
  return (
    <>
      <h1>Meal Details</h1>
      <p>
        Parametr z URL: <strong>{params.someName}</strong>
      </p>
      <p>
        Wróć do <a href="/meals">/meals</a>
      </p>
    </>
  );
}
