import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';

export default function HomePage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>

        <div>
          <h1 className={classes.title}>
            Witaj w aplikacji <span>Next.js</span>
          </h1>
          <p className={classes.subtitle}>
            Laboratorium – część 2: komponenty, routing i przygotowanie pod bazę danych.
          </p>
        </div>
      </header>

      <main className={classes.main}>
        <h2>Opis projektu</h2>
        <p>
          Aplikacja została przygotowana w oparciu o Next.js (App Router). Strona startowa została
          zrefaktoryzowana z użyciem CSS Modules, a w nagłówku osadzono komponent slideshow
          renderowany po stronie klienta.
        </p>

        <p>
          W kolejnych krokach projektu dodano stronę <b>Community</b>, przebudowano menu tak,
          aby wskazywało aktywną trasę, oraz przygotowano strukturę strony <b>Meals</b> wraz z
          komponentami siatki posiłków.
        </p>

        <p>
          Na następnym laboratorium planowane jest podłączenie prostej bazy danych SQLite
          (better-sqlite3) i dynamiczne ładowanie danych oraz obrazów w runtime.
        </p>
      </main>
    </>
  );
}
