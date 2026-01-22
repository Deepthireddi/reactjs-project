import { useState } from "react";

function SOSButton() {
  const [message, setMessage] = useState("");
  const [sentTo, setSentTo] = useState([]);
  const [locationLink, setLocationLink] = useState("");

  function handleSOS() {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    if (contacts.length === 0) {
      alert("No emergency contacts added!");
      return;
    }

    // Get live location
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const mapLink = `https://www.google.com/maps?q=${lat},${lon}`;
        setLocationLink(mapLink);

        // Save alert history
        const history = JSON.parse(localStorage.getItem("alertHistory")) || [];

        const now = new Date();
        const timeString = now.toLocaleString();

        const newAlert = {
          time: timeString,
          count: contacts.length,
          location: mapLink,
        };

        history.unshift(newAlert);
        localStorage.setItem("alertHistory", JSON.stringify(history));

        setSentTo(contacts);
        setMessage("🚨 Emergency Alert Sent with Live Location!");
      },
      () => {
        alert("❌ Unable to fetch location. Please allow location access.");
      }
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ marginBottom: "10px" }}>Emergency SOS 🚨</h2>
      <p style={{ color: "#6b7280", marginBottom: "25px" }}>
        Press the button in case of danger
      </p>

      {/* GLOWING SOS BUTTON */}
      <button className="sos-glow-btn" onClick={handleSOS}>
        SOS
      </button>

      {/* Success Message */}
      {message && (
        <p style={{ marginTop: "20px", color: "green", fontWeight: "bold" }}>
          {message}
        </p>
      )}

      {/* Location Link */}
      {locationLink && (
        <p style={{ marginTop: "10px" }}>
          📍 Location sent:{" "}
          <a href={locationLink} target="_blank" rel="noreferrer">
            View on Map
          </a>
        </p>
      )}

      {/* Sent To List */}
      {sentTo.length > 0 && (
        <div style={{ marginTop: "25px", textAlign: "left" }}>
          <h3>Alert Sent To:</h3>
          <ul>
            {sentTo.map((c, index) => (
              <li key={index}>
                📞 {c.name} - {c.phone}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SOSButton;
