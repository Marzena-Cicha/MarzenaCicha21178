import './globals.css';
import MainHeader from '../components/main-header';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <MainHeader />
        <main style={{ width: '90%', maxWidth: '60rem', margin: '2rem auto' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
