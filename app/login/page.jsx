"use client";
import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

function whatsappToEmail(whatsapp) { return `${whatsapp.replace(/\D/g, "")}@albagrazia.client`; }

export default function LoginPage() {
  const [mode, setMode] = useState("register");
  const [message, setMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const email = whatsappToEmail(data.whatsapp);
    try {
      if (mode === "register") {
        const res = await createUserWithEmailAndPassword(auth, email, data.password);
        await setDoc(doc(db, "users", res.user.uid), { name: data.name, whatsapp: data.whatsapp, role: "client", active: true, points: 0, level: "Silver", createdAt: serverTimestamp() });
        setMessage("Registrazione completata.");
      } else {
        await signInWithEmailAndPassword(auth, email, data.password);
        setMessage("Accesso effettuato.");
      }
    } catch (err) { setMessage(err.message); }
  }

  return (
    <main className="page" style={{maxWidth:760, margin:"0 auto"}}>
      <section className="panel">
        <p className="eyebrow">Area cliente</p><h2>{mode === "register" ? "Registrati" : "Accedi"}</h2>
        <form className="form" onSubmit={submit}>
          {mode === "register" && <input name="name" placeholder="Nome e cognome" required />}
          <input name="whatsapp" placeholder="Numero WhatsApp" required />
          <input name="password" type="password" placeholder="Password" required />
          <button className="btn primary">{mode === "register" ? "Crea account" : "Accedi"}</button>
        </form>
        <button className="btn" onClick={() => setMode(mode === "register" ? "login" : "register")} style={{marginTop:12}}>{mode === "register" ? "Ho già un account" : "Crea nuovo account"}</button>
        {message && <p>{message}</p>}
      </section>
    </main>
  );
}
