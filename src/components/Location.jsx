import { useState } from "react";

function Location() {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [mapUrl, setMapUrl] = useState("");

  function getLocation() {
    if (!navigator.geolocation) {
      setError("Geolocation not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        setLocation(`Latitude: ${lat.toFixed(5)}, Longitude: ${lon.toFixed(5)}`);
        setError("");

        // Google Maps embed preview
        const url = `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
        setMapUrl(url);
      },
      () => {
        setError("❌ Unable to fetch location. Please allow location access.");
      }
    );
  }

  return (
    <div className="card" style={{ textAlign: "center" }}>
      <h2>Live Location 🗺️</h2>
      <p style={{ color: "#6b7280" }}>
        Share your current location with emergency contacts
      </p>

      <button onClick={getLocation} className="primary-btn">
        📍 Share My Location
      </button>

      {/* Location Display */}
      {location && (
        <div
          style={{
            marginTop: "20px",
            background: "#ecfeff",
            padding: "12px",
            borderRadius: "10px",
            color: "#065f46",
            fontWeight: "bold",
          }}
        >
          {location}
        </div>
      )}

      {/* MAP PREVIEW */}
      {mapUrl && (
        <div style={{ marginTop: "20px" }}>
          <iframe
            title="map"
            src={mapUrl}
            width="100%"
            height="250"
            style={{ borderRadius: "12px", border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div
          style={{
            marginTop: "20px",
            background: "#fee2e2",
            padding: "12px",
            borderRadius: "10px",
            color: "#991b1b",
            fontWeight: "bold",
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
}

export default Location;
