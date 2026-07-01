"use client";
import { useState } from "react";
import { demoProducts } from "@/lib/data";

export default function AdminPage() {
  const [logged, setLogged] = useState(false);
  const [products, setProducts] = useState(demoProducts);

  function login(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (data.name.toLowerCase().trim() === "angela lomas" && data.password === "0023") setLogged(true);
    else alert("Accesso non autorizzato.");
  }

  function addProduct(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setProducts([{ id: Date.now().toString(), ...data, price: Number(data.price), stock: Number(data.stock) }, ...products]);
    e.currentTarget.reset();
  }

  if (!logged) return (
    <main className="page" style={{maxWidth:760, margin:"0 auto"}}>
      <section className="panel"><p className="eyebrow">Pannello riservato</p><h2>Accesso Admin</h2>
        <form className="form" onSubmit={login}><input name="name" placeholder="Nome admin" required /><input name="password" type="password" placeholder="Password" required /><button className="btn primary">Entra</button></form>
      </section>
    </main>
  );

  return (
    <main className="page">
      <section className="sectionTitle"><p className="eyebrow">Centro di controllo</p><h2>Pannello Admin</h2></section>
      <section className="grid grid4">
        <div className="card kpi"><strong>0€</strong><span>Fatturato</span></div><div className="card kpi"><strong>0</strong><span>Ordini</span></div><div className="card kpi"><strong>{products.length}</strong><span>Prodotti</span></div><div className="card kpi"><strong>—</strong><span>Top prodotto</span></div>
      </section>
      <section className="grid grid3" style={{marginTop:24}}>
        <div className="panel"><h3>Nuovo prodotto</h3>
          <form className="form" onSubmit={addProduct}>
            <input name="name" placeholder="Nome prodotto" required /><select name="category"><option>Profumi</option><option>Cosmetici</option><option>Gioielli</option></select><input name="price" type="number" placeholder="Prezzo" required /><input name="stock" type="number" placeholder="Disponibilità" required /><textarea name="description" placeholder="Descrizione premium" /><input name="notes" placeholder="Note / stile" /><button className="btn primary">Salva prodotto</button>
          </form>
        </div>
        <div className="panel"><h3>Prodotti</h3>{products.map((p) => <p key={p.id}><strong>{p.name}</strong><br />{p.category} · {p.price}€ · stock {p.stock}</p>)}</div>
        <div className="panel"><h3>Prossimi moduli Firebase</h3><p>Ordini, cuponi, notifiche, clienti, inventario e statistiche saranno collegati a Firestore.</p></div>
      </section>
    </main>
  );
}
