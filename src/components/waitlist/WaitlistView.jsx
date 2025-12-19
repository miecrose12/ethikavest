// src/components/waitlist/WaitlistView.jsx
import React, { useState, useEffect } from "react";

const WaitlistView = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcodeInput, setPasscodeInput] = useState("");
  const [passcodeError, setPasscodeError] = useState("");

  const [waitlist, setWaitlist] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [totalMembers, setTotalMembers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const CORRECT_PASSCODE = "ethika2025"; // Change this!

  const API_ENDPOINT = "https://halalbackend-production-76e9.up.railway.app/api/waitlist";

  const handlePasscodeSubmit = (e) => {
    e.preventDefault();
    if (passcodeInput.trim() === CORRECT_PASSCODE) {
      setIsAuthenticated(true);
      setPasscodeError("");
    } else {
      setPasscodeError("Incorrect passcode. Please try again.");
      setPasscodeInput("");
    }
  };

  const fetchWaitlist = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_ENDPOINT);
      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();
      if (!result.success) throw new Error(result.message || "Error");

      const entries = Array.isArray(result.data?.data) ? result.data.data : [];
      const total = result.data?.total || entries.length;

      setWaitlist(entries);
      setFilteredList(entries);
      setTotalMembers(total);
    } catch (err) {
      setError("Unable to load waitlist.");
      console.error(err);
      setWaitlist([]);
      setFilteredList([]);
      setTotalMembers(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchWaitlist();
  }, [isAuthenticated]);

  useEffect(() => {
    if (!Array.isArray(waitlist)) return;
    const filtered = waitlist.filter((person) => {
      const term = searchTerm.toLowerCase();
      return (
        (person.firstname || "").toLowerCase().includes(term) ||
        (person.lastname || "").toLowerCase().includes(term) ||
        (person.email || "").toLowerCase().includes(term)
      );
    });
    setFilteredList(filtered);
  }, [searchTerm, waitlist]);

  const exportToCSV = () => {
    if (filteredList.length === 0) return;

    const headers = ["No.", "First Name", "Last Name", "Email", "Joined On"];
    const rows = filteredList.map((p, i) => [
      i + 1,
      p.firstname || "",
      p.lastname || "",
      p.email || "",
      p.created_at ? new Date(p.created_at).toLocaleDateString("en-GB") : "",
    ]);

    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ethikavest_waitlist_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // === ELEGANT PASSCODE SCREEN - FULLY RETAINED ===
  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0faf5",
        padding: "20px",
      }}>
        <div style={{
          background: "white",
          padding: "50px 40px",
          borderRadius: "16px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
          width: "100%",
          maxWidth: "440px",
          textAlign: "center",
        }}>
          <h2 style={{
            fontSize: "28px",
            color: "#26975C",
            marginBottom: "16px",
            fontWeight: "bold"
          }}>
            Admin Access
          </h2>
          <p style={{
            color: "#666",
            marginBottom: "32px",
            fontSize: "16px"
          }}>
            Enter the passcode to view the EthikaVest waitlist.
          </p>

          <form onSubmit={handlePasscodeSubmit}>
            <input
              type="password"
              value={passcodeInput}
              onChange={(e) => {
                setPasscodeInput(e.target.value);
                setPasscodeError("");
              }}
              placeholder="Enter passcode"
              autoFocus
              required
              style={{
                width: "100%",
                padding: "16px",
                fontSize: "18px",
                borderRadius: "12px",
                border: "2px solid #e0e0e0",
                marginBottom: "20px",
                boxSizing: "border-box",
              }}
            />

            {passcodeError && (
              <p style={{
                color: "#c53030",
                margin: "0 0 20px 0",
                fontWeight: "500"
              }}>
                {passcodeError}
              </p>
            )}

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "16px",
                backgroundColor: "#26975C",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.2s"
              }}
            >
              Access Dashboard
            </button>
          </form>

          <p style={{
            marginTop: "32px",
            color: "#999",
            fontSize: "14px"
          }}>
            Unauthorized access is prohibited.
          </p>
        </div>
      </div>
    );
  }

  // === FULLY RESPONSIVE DASHBOARD ===
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f7fafc", padding: "30px 15px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "32px", color: "#26975C", fontWeight: "bold" }}>
            EthikaVest Waitlist Dashboard
          </h1>
          <p style={{ fontSize: "18px", color: "#555" }}>
            Total Members: <strong>{totalMembers}</strong>
            {filteredList.length !== totalMembers && ` (Showing ${filteredList.length} filtered)`}
          </p>
        </header>

        {/* Controls - Responsive Stack on Mobile */}
        <div style={{ marginBottom: "30px" }}>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 16px",
              fontSize: "16px",
              borderRadius: "12px",
              border: "1px solid #ccc",
              marginBottom: "16px",
              boxSizing: "border-box"
            }}
          />
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={fetchWaitlist}
              disabled={loading}
              style={{
                flex: 1,
                padding: "14px",
                backgroundColor: "#26975C",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              {loading ? "Loading..." : "Refresh"}
            </button>
            <button
              onClick={exportToCSV}
              disabled={filteredList.length === 0}
              style={{
                flex: 1,
                padding: "14px",
                backgroundColor: "#4a5568",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: "600",
                opacity: filteredList.length === 0 ? 0.6 : 1
              }}
            >
              Export CSV
            </button>
          </div>
        </div>

        {error && (
          <div style={{ background: "#fee", color: "#c53030", padding: "16px", borderRadius: "12px", marginBottom: "24px", textAlign: "center" }}>
            {error}
          </div>
        )}

        {loading && (
          <div style={{ textAlign: "center", padding: "60px", color: "#666" }}>
            Loading waitlist...
          </div>
        )}

        {!loading && filteredList.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px", color: "#666" }}>
            <h3>No members found</h3>
            <p>{searchTerm ? "Try a different search" : "No one has joined yet"}</p>
          </div>
        )}

        {!loading && filteredList.length > 0 && (
          <>
            {/* Desktop & Tablet: Scrollable Table */}
            <div className="desktop-view">
              <div style={{
                background: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                overflowX: "auto"
              }}>
                <table style={{ width: "100%", minWidth: "700px", borderCollapse: "collapse" }}>
                  <thead style={{ backgroundColor: "#f0faf5" }}>
                    <tr>
                      <th style={{ padding: "18px 16px", textAlign: "left", color: "#26975C", fontWeight: "600" }}>#</th>
                      <th style={{ padding: "18px 16px", textAlign: "left", color: "#26975C", fontWeight: "600" }}>First Name</th>
                      <th style={{ padding: "18px 16px", textAlign: "left", color: "#26975C", fontWeight: "600" }}>Last Name</th>
                      <th style={{ padding: "18px 16px", textAlign: "left", color: "#26975C", fontWeight: "600" }}>Email</th>
                      <th style={{ padding: "18px 16px", textAlign: "left", color: "#26975C", fontWeight: "600" }}>Joined On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredList.map((person, index) => (
                      <tr key={person.uuid || index} style={{ borderBottom: "1px solid #eee" }}>
                        <td style={{ padding: "16px" }}>{index + 1}</td>
                        <td style={{ padding: "16px" }}>{person.firstname || "-"}</td>
                        <td style={{ padding: "16px" }}>{person.lastname || "-"}</td>
                        <td style={{ padding: "16px" }}>{person.email || "-"}</td>
                        <td style={{ padding: "16px" }}>
                          {person.created_at
                            ? new Date(person.created_at).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })
                            : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile: Beautiful Cards */}
            <div className="mobile-view">
              {filteredList.map((person, index) => (
                <div
                  key={person.uuid || index}
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "24px",
                    marginBottom: "20px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
                  }}
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px"
                  }}>
                    <span style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#26975C"
                    }}>
                      #{index + 1}
                    </span>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "18px", fontWeight: "bold", color: "#26975C" }}>
                        {person.firstname} {person.lastname}
                      </div>
                    </div>
                  </div>
                  <div style={{ color: "#444", fontSize: "16px" }}>
                    <p style={{ margin: "12px 0" }}>
                      <strong>Email:</strong> {person.email || "-"}
                    </p>
                    <p style={{ margin: "12px 0" }}>
                      <strong>Joined:</strong> 
                      {person.created_at
                        ? new Date(person.created_at).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "-"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button
            onClick={() => {
              setIsAuthenticated(false);
              setPasscodeInput("");
              setWaitlist([]);
              setFilteredList([]);
            }}
            style={{
              padding: "14px 32px",
              background: "#e2e8f0",
              color: "#4a5568",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-view {
            display: none;
          }
          .mobile-view {
            display: block;
          }
        }
        @media (min-width: 769px) {
          .desktop-view {
            display: block;
          }
          .mobile-view {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default WaitlistView;