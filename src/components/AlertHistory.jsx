import { useState, useEffect } from "react";

function AlertHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("alertHistory")) || [];
    setHistory(saved);
  }, []);

  function clearHistory() {
    localStorage.removeItem("alertHistory");
    setHistory([]);
  }

  return (
    <div className="card">
      <h2>Alert History 📜</h2>
      <p style={{ color: "#6b7280", marginBottom: "15px" }}>
        Past emergency alerts and notifications
      </p>

      {/* No history */}
      {history.length === 0 && (
        <div
          style={{
            background: "#f9fafb",
            padding: "15px",
            borderRadius: "10px",
            color: "#6b7280",
            textAlign: "center",
          }}
        >
          🚫 No alerts yet. Stay safe!
        </div>
      )}

      {/* History List */}
      <div>
        {history.map((item, index) => (
          <div key={index} className="history-item">
            <div>
              <strong>🚨 SOS Alert</strong>
              <div style={{ fontSize: "14px", color: "#374151" }}>
                {item.time}
              </div>
            </div>

            <div style={{ fontWeight: "bold", color: "#2563eb" }}>
              👥 {item.count}
            </div>
          </div>
        ))}
      </div>

      {/* Clear Button */}
      {history.length > 0 && (
        <button
          onClick={clearHistory}
          className="danger-btn"
          style={{ marginTop: "20px" }}
        >
          🗑️ Clear Alert History
        </button>
      )}
    </div>
  );
}

export default AlertHistory;
