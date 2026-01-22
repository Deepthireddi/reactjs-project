import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SOSButton from "./components/SOSButton";
import Contacts from "./components/Contacts";
import Location from "./components/Location";
import AlertHistory from "./components/AlertHistory";

function App() {
  const [dark, setDark] = useState(false);

  const appStyle = {
    backgroundColor: dark ? "#0f172a" : "#f4f7fb",
    color: dark ? "white" : "black",
    minHeight: "100vh",
  };

  return (
    <div style={appStyle}>
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="app-container">
        {/* HEADER */}
        <div className="header">
          <h1>Women Safety Alert App 🛡️</h1>
          <p>Emergency assistance at your fingertips</p>

          <button
            className="primary-btn"
            onClick={() => setDark(!dark)}
            style={{ marginTop: "15px" }}
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* SOS CENTER SECTION */}
        <div
          id="home"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "400px",
              background: "white",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            }}
          >
            <SOSButton />
          </div>
        </div>

        {/* TWO COLUMN SECTION */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            marginBottom: "40px",
          }}
        >
          
          <div id="contacts" style={{ scrollMarginTop: "100px" }}>
            <Contacts />
          </div>

          <div id="location" style={{ scrollMarginTop: "100px" }}>
            <Location />
          </div>

        </div>

        {/* HISTORY FULL WIDTH */}
        <div id="history" style={{ scrollMarginTop: "100px" }}>
          <AlertHistory />
        </div>

      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
