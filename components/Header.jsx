import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar">
      <Link href="/" className="brand">
        <div className="ag">AG</div>
        <div>
          <strong>Alba&Grazia</strong>
          <small>Beauty Boutique</small>
        </div>
      </Link>
      <div className="menu">
        <Link href="/">Home</Link>
        <Link href="/catalogo">Catalogo</Link>
        <Link href="/club-prive">Club Privé</Link>
        <Link href="/account">Account</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </nav>
  );
}
