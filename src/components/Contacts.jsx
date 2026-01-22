import { useState, useEffect } from "react";

function Contacts() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function addContact(e) {
    e.preventDefault();
    if (!name || !phone) {
      alert("Enter name and phone");
      return;
    }

    setContacts([...contacts, { name, phone }]);
    setName("");
    setPhone("");
  }

  function clearContacts() {
    localStorage.removeItem("contacts");
    setContacts([]);
  }

  return (
    <div className="card">
      <h2>Emergency Contacts 📞</h2>

      {/* FORM */}
      <form onSubmit={addContact}>
        <div className="contact-form">
          <input
            type="text"
            placeholder="Contact Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type="submit" className="primary-btn">
          ➕ Add Contact
        </button>
      </form>

      {/* LIST */}
      <div style={{ marginTop: "20px" }}>
        {contacts.length === 0 && <p>No contacts added yet.</p>}

       {contacts.map((c, index) => (
  <div key={index} className="contact-item">
    <span>
      👤 {c.name} <br />
      📞{" "}
      <a
        href={`tel:${c.phone.replace(/\s+/g, "")}`}
        style={{
          color: "#2563eb",
          textDecoration: "none",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {c.phone}
      </a>
    </span>
  </div>
))}

      </div>

      {/* CLEAR */}
      {contacts.length > 0 && (
        <button
          onClick={clearContacts}
          className="danger-btn"
          style={{ marginTop: "15px" }}
        >
          🗑️ Clear All Contacts
        </button>
      )}
    </div>
  );
}

export default Contacts;
