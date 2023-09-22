import { useState } from "react";
import Layout from "../Layout";


export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      // reset the form
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }
  return (
    <Layout sidebarActiveLink="payments-section-link">
    <main id="main-section">
       <h2 id="main-section-title">CONTACTO</h2>
          <div id="main-section-content">
      <form onSubmit={handleSubmit} className="form-contacto">
      <div className="item-principal">
        <label className="item-labelsub" htmlFor="name">
          Nombre
        </label>
        <input
          type="text"
          minLength={3}
          maxLength={150}
          required
          className="item-limput"
          autoComplete="off"
          id="name"
        />
      </div>
      <div className="item-principal">
        <label className="item-labelsub" htmlFor="email">
          Correo
        </label>
        <input
          type="email"
          minLength={5}
          maxLength={150}
          required
          className="item-limput"
          autoComplete="off"
          id="email"
        />
      </div>
      <div>
        <label className="item-labelsub" htmlFor="message">
          Mensaje
        </label>
        <textarea
          rows={4}
          required
          minLength={10}
          maxLength={500}
          name="message"
          className="item-limput"
        />
      </div>
      <button className="b-t-n_message" type="submit" disabled={loading}>
        Enviar
      </button>
    </form>
    </div>
    </main>
    </Layout>
  );
}
