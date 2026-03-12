import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Typewriter from "./components/Typewriter";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Login from "./pages/admin/Login";
import "./App.css";

export default function App() {
  const [intro, setIntro] = useState(true);

  return (
    <>
      {intro && <Typewriter onComplete={() => setIntro(false)} />}

      <div style={{
        minHeight: "100vh",
        background: "var(--dark)",
        color: "var(--text-primary)",
        display: "flex", flexDirection: "column",
        opacity: intro ? 0 : 1,
        transition: "opacity 0.6s ease",
      }}>
        <Header />

        <main style={{ flex: 1, paddingTop: "70px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <footer style={{ position: "relative", zIndex: 1, background: "#0f0a07", borderTop: "1px solid rgba(139,38,53,0.22)" }}>
          <div style={{ height: "2px", background: "linear-gradient(to right, transparent, rgba(139,38,53,0.7), rgba(212,168,130,0.5), rgba(139,38,53,0.7), transparent)" }} />

          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "52px 24px 0" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,200px),1fr))",
              gap: "48px", paddingBottom: "48px",
              borderBottom: "1px solid rgba(139,38,53,0.1)",
            }}>
              {/* Brand */}
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 700, color: "#f0e6d4", marginBottom: "6px" }}>Keyif 34 Cafe</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.55rem", letterSpacing: "4px", color: "rgba(212,168,130,0.45)", textTransform: "uppercase", marginBottom: "20px" }}>Eyüp · İstanbul</div>
                {/* Renk bar */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
                  <div style={{ height: "2px", flex: 3, background: "rgba(139,38,53,0.55)" }} />
                  <div style={{ height: "2px", flex: 1, background: "rgba(212,168,130,0.4)" }} />
                  <div style={{ height: "2px", flex: 1, background: "rgba(61,82,102,0.4)" }} />
                </div>
                <p style={{ fontFamily: "'Spectral', serif", fontStyle: "italic", fontSize: "0.85rem", color: "rgba(240,230,212,0.32)", lineHeight: 1.85, fontWeight: 300 }}>
                  Kahvaltıdan dünya mutfağına, kokteyllerden nargilelere kadar her şey bir arada.
                </p>
              </div>

              {/* Nav */}
              <div>
                <h6 style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.58rem", letterSpacing: "3.5px", textTransform: "uppercase", color: "rgba(139,38,53,0.75)", marginBottom: "20px", fontWeight: 500 }}>Sayfalar</h6>
                {[["Anasayfa", "/"], ["Menü", "/menu"], ["Galeri", "/gallery"], ["İletişim", "/contact"]].map(([l, t]) => (
                  <a key={t} href={t} style={{ display: "block", fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "rgba(240,230,212,0.35)", marginBottom: "12px", letterSpacing: "0.3px", fontWeight: 300, transition: "color 0.25s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "rgba(232,170,180,0.75)"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(240,230,212,0.35)"}
                  >{l}</a>
                ))}
              </div>

              {/* Contact */}
              <div>
                <h6 style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.58rem", letterSpacing: "3.5px", textTransform: "uppercase", color: "rgba(139,38,53,0.75)", marginBottom: "20px", fontWeight: 500 }}>İletişim</h6>
                {[
                  { text: "Akşemsettin Mah. Şahane Sok.\nNo:1, Eyüp / İstanbul" },
                  { text: "0542 100 61 36", href: "tel:+905421006136" },
                  { text: "@keyif34_cafe", href: "https://instagram.com/keyif34_cafe" },
                ].map((item, i) => (
                  <div key={i}
                    onClick={() => item.href && window.open(item.href, "_blank")}
                    style={{
                      fontFamily: "'Jost', sans-serif", fontSize: "0.82rem",
                      color: item.href ? "rgba(232,170,180,0.55)" : "rgba(240,230,212,0.32)",
                      marginBottom: "12px", lineHeight: 1.65,
                      cursor: item.href ? "pointer" : "default",
                      transition: "color 0.25s", whiteSpace: "pre-line", fontWeight: 300,
                    }}
                    onMouseEnter={e => { if (item.href) e.currentTarget.style.color = "rgba(232,170,180,0.88)"; }}
                    onMouseLeave={e => { if (item.href) e.currentTarget.style.color = "rgba(232,170,180,0.55)"; }}
                  >{item.text}</div>
                ))}
              </div>
            </div>

            <div style={{ padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.68rem", color: "rgba(240,230,212,0.18)", letterSpacing: "0.3px", margin: 0, fontWeight: 300 }}>
                © {new Date().getFullYear()} Keyif 34 Cafe. Tüm hakları saklıdır.
              </p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.82rem", fontStyle: "italic", color: "rgba(139,38,53,0.45)", margin: 0 }}>
                Eyüp, İstanbul · Her an keyif
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}