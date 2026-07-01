import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Alba&Grazia | Beauty Boutique Premium",
  description: "Boutique digitale premium per profumi, cosmetici, gioielli e consulenza beauty."
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <Header />
        {children}
        <footer className="footer">
          <strong>Alba&Grazia</strong>
          <p>Boutique digitale premium · Bellezza italiana · Consulenza indipendente</p>
        </footer>
      </body>
    </html>
  );
}
