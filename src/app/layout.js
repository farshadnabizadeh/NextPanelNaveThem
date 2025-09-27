import './globals.css';
import Layout from '../components/Layout';

export const metadata = {
  title: 'پنل مدیریت',
  description: 'پنل مدیریت مدرن با Next.js و TailwindCSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className="bg-gray-100">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}