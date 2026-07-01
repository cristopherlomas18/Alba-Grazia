export default function AccountPage() {
  return (
    <main className="page">
      <section className="sectionTitle"><p className="eyebrow">Area riservata</p><h2>Beauty Passport</h2></section>
      <section className="grid grid3">
        <div className="card"><h3>Ordini</h3><p>Storico acquisti e richieste.</p></div>
        <div className="card"><h3>Notifiche</h3><p>Avvisi e aggiornamenti dal pannello admin.</p></div>
        <div className="card"><h3>Club Privé</h3><p>Punti, livello e coupon disponibili.</p></div>
      </section>
    </main>
  );
}
