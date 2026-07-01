import Link from "next/link";
import { demoProducts } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">ALBA&GRAZIA</p>
          <h1>Lusso. Bellezza.<br /><em>Essenza di te.</em></h1>
          <p className="lead">Una boutique digitale premium per profumi, cosmetici, gioielli e consulenza beauty privata.</p>
          <Link className="btn primary" href="/catalogo">Scopri il catalogo</Link>
        </div>
        <div className="heroVisual"><div className="bottle">AG</div></div>
      </section>
      <section className="grid grid4" style={{marginTop:28}}>
        <div className="card"><h3>Campioni omaggio</h3><p>Con ogni ordine.</p></div>
        <div className="card"><h3>Spedizione rapida</h3><p>Consegna in 24/48h.</p></div>
        <div className="card"><h3>Pagamenti sicuri</h3><p>Revolut, PayPal e IBAN.</p></div>
        <div className="card"><h3>Assistenza dedicata</h3><p>Consulenza privata via WhatsApp.</p></div>
      </section>
      <section className="sectionTitle"><p className="eyebrow">Selezione esclusiva</p><h2>Prodotti in evidenza</h2></section>
      <section className="products">
        {demoProducts.map((p) => (
          <article className="product" key={p.id}>
            <div className="productPhoto">{p.category}</div>
            <div className="productBody">
              <p className="eyebrow">{p.category}</p><h3>{p.name}</h3><p>{p.description}</p><p><em>{p.notes}</em></p>
              <div className="buy"><strong>{p.price}€</strong><Link className="btn primary" href="/catalogo">Acquista</Link></div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
