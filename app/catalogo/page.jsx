"use client";
import { useState } from "react";
import { demoProducts } from "@/lib/data";

export default function CatalogoPage() {
  const [category, setCategory] = useState("Tutti");
  const products = category === "Tutti" ? demoProducts : demoProducts.filter((p) => p.category === category);

  function buy(p) {
    const phone = process.env.NEXT_PUBLIC_OWNER_WHATSAPP || "393000000000";
    const msg = `Ciao Angela, desidero acquistare: ${p.name} - Prezzo: ${p.price}€`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <main className="page">
      <section className="sectionTitle"><p className="eyebrow">Catalogo</p><h2>Collezioni Alba&Grazia</h2></section>
      <div style={{textAlign:"center", marginBottom:24}}>
        {["Tutti","Profumi","Cosmetici","Gioielli"].map((c) => <button className="btn" key={c} onClick={() => setCategory(c)} style={{margin:6}}>{c}</button>)}
      </div>
      <section className="products">
        {products.map((p) => (
          <article className="product" key={p.id}>
            <div className="productPhoto">{p.category}</div>
            <div className="productBody">
              <p className="eyebrow">{p.category}</p><h3>{p.name}</h3><p>{p.description}</p><p><em>{p.notes}</em></p>
              <div className="buy"><strong>{p.price}€</strong><button className="btn primary" onClick={() => buy(p)}>Acquista</button></div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
