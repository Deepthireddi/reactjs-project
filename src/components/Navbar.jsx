function Navbar() {
  function scrollTo(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #bd25eb, #343efa)",
        padding: "18px 40px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <h2 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        🛡️ <span>Women Safety</span>
      </h2>

      {/* Links */}
      <div style={{ display: "flex", gap: "30px", fontSize: "16px" }}>
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("home")}>
          Home
        </span>
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("contacts")}>
          Contacts
        </span>
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("location")}>
          Location
        </span>
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("history")}>
          History
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
