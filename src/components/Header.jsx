import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
    { to: "/", label: "Anasayfa" },
    { to: "/menu", label: "Menü" },
    { to: "/gallery", label: "Galeri" },
    { to: "/contact", label: "İletişim" },
];

export default function Header() {
    const { pathname } = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    useEffect(() => { setMobileOpen(false); }, [pathname]);
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            <header style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
                transition: "all 0.5s ease",
                background: scrolled
                    ? "rgba(28, 20, 14, 0.97)"
                    : "linear-gradient(to bottom, rgba(20,14,10,0.9) 0%, transparent 100%)",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(139,38,53,0.22)" : "none",
            }}>
                {/* Üst şerit */}
                <div style={{
                    height: "2px",
                    background: "linear-gradient(to right, transparent, rgba(139,38,53,0.75), rgba(212,168,130,0.6), rgba(139,38,53,0.75), transparent)",
                }} />

                <div style={{
                    maxWidth: "1280px", margin: "0 auto",
                    padding: scrolled ? "12px 24px" : "18px 24px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    transition: "padding 0.4s ease",
                }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                        <span style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "clamp(1.1rem, 4vw, 1.4rem)",
                            fontWeight: 700, color: "#f0e6d4",
                            letterSpacing: "2px", lineHeight: 1,
                        }}>Keyif 34 Cafe</span>
                        <span style={{
                            fontFamily: "'Jost', sans-serif",
                            fontSize: "0.52rem", letterSpacing: "4.5px",
                            textTransform: "uppercase",
                            color: "rgba(212,168,130,0.55)", fontWeight: 300,
                        }}>Eyüp · İstanbul</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                        {navItems.map(item => {
                            const active = pathname === item.to;
                            return (
                                <Link key={item.to} to={item.to} style={{
                                    fontFamily: "'Jost', sans-serif",
                                    fontSize: "0.66rem", fontWeight: 500,
                                    letterSpacing: "3px", textTransform: "uppercase",
                                    padding: "9px 16px",
                                    color: active ? "#f0e6d4" : "rgba(240,230,212,0.48)",
                                    background: active ? "rgba(139,38,53,0.22)" : "transparent",
                                    borderRadius: "2px",
                                    position: "relative", transition: "all 0.3s ease",
                                }}
                                    onMouseEnter={e => { if (!active) { e.currentTarget.style.color = "rgba(240,230,212,0.85)"; e.currentTarget.style.background = "rgba(139,38,53,0.1)"; } }}
                                    onMouseLeave={e => { if (!active) { e.currentTarget.style.color = "rgba(240,230,212,0.48)"; e.currentTarget.style.background = "transparent"; } }}
                                >
                                    {item.label}
                                    {active && <span style={{ position: "absolute", bottom: "3px", left: "50%", transform: "translateX(-50%)", width: "14px", height: "1px", background: "rgba(212,168,130,0.7)" }} />}
                                </Link>
                            );
                        })}

                        <a href="tel:+905421006136" style={{
                            marginLeft: "14px",
                            fontFamily: "'Jost', sans-serif",
                            fontSize: "0.66rem", fontWeight: 500,
                            letterSpacing: "1.5px", textTransform: "uppercase",
                            padding: "9px 18px",
                            background: "rgba(139,38,53,0.28)",
                            border: "1px solid rgba(139,38,53,0.5)",
                            color: "rgba(240,230,212,0.85)", borderRadius: "2px",
                            transition: "all 0.3s ease", whiteSpace: "nowrap",
                        }}
                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(139,38,53,0.5)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "rgba(139,38,53,0.28)"; }}
                        >☎ 0542 100 61 36</a>
                    </nav>

                    {/* Hamburger */}
                    <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} style={{
                        background: "rgba(139,38,53,0.18)", border: "1px solid rgba(139,38,53,0.35)",
                        borderRadius: "2px", width: "42px", height: "42px",
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center",
                        gap: "6px", cursor: "pointer", padding: "10px", transition: "all 0.3s",
                    }}
                        onMouseEnter={e => e.currentTarget.style.background = "rgba(139,38,53,0.35)"}
                        onMouseLeave={e => e.currentTarget.style.background = "rgba(139,38,53,0.18)"}
                    >
                        {[0, 1, 2].map(i => (
                            <span key={i} style={{
                                display: "block",
                                width: i === 1 ? (mobileOpen ? "0" : "18px") : "24px",
                                height: "1.5px",
                                background: "rgba(240,230,212,0.75)",
                                transition: "all 0.35s ease",
                                transform: mobileOpen
                                    ? i === 0 ? "rotate(45deg) translate(5px, 6px)"
                                        : i === 2 ? "rotate(-45deg) translate(5px, -6px)"
                                            : "scaleX(0)"
                                    : "none",
                            }} />
                        ))}
                    </button>
                </div>
            </header>

            {/* Backdrop */}
            <div onClick={() => setMobileOpen(false)} style={{
                position: "fixed", inset: 0, zIndex: 998,
                background: "rgba(8,4,2,0.75)", backdropFilter: "blur(6px)",
                opacity: mobileOpen ? 1 : 0,
                pointerEvents: mobileOpen ? "auto" : "none",
                transition: "opacity 0.4s ease",
            }} />

            {/* Drawer */}
            <div style={{
                position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 999,
                width: "min(290px, 86vw)",
                background: "linear-gradient(160deg, #221510 0%, #1a0f0d 100%)",
                borderLeft: "1px solid rgba(139,38,53,0.3)",
                transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
                transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
                display: "flex", flexDirection: "column", overflow: "hidden",
            }}>
                <div style={{ height: "2px", background: "linear-gradient(to right, transparent, rgba(139,38,53,0.8), rgba(212,168,130,0.6), transparent)", flexShrink: 0 }} />

                <div style={{ padding: "32px 26px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ marginBottom: "36px", paddingBottom: "22px", borderBottom: "1px solid rgba(139,38,53,0.18)" }}>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.45rem", fontWeight: 700, color: "#f0e6d4", marginBottom: "4px" }}>Keyif 34 Cafe</div>
                        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.52rem", letterSpacing: "4px", color: "rgba(212,168,130,0.5)", textTransform: "uppercase" }}>Eyüp · İstanbul</div>
                    </div>

                    <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2px" }}>
                        {navItems.map(item => {
                            const active = pathname === item.to;
                            return (
                                <Link key={item.to} to={item.to} style={{
                                    padding: "14px 18px",
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "1.2rem", fontWeight: active ? 600 : 400,
                                    color: active ? "#f0e6d4" : "rgba(240,230,212,0.55)",
                                    borderLeft: `2px solid ${active ? "rgba(139,38,53,0.8)" : "transparent"}`,
                                    background: active ? "rgba(139,38,53,0.15)" : "transparent",
                                    transition: "all 0.25s ease",
                                }}
                                    onMouseEnter={e => { if (!active) { e.currentTarget.style.color = "#f0e6d4"; e.currentTarget.style.background = "rgba(139,38,53,0.08)"; } }}
                                    onMouseLeave={e => { if (!active) { e.currentTarget.style.color = "rgba(240,230,212,0.55)"; e.currentTarget.style.background = "transparent"; } }}
                                >{item.label}</Link>
                            );
                        })}
                    </nav>

                    <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(139,38,53,0.15)" }}>
                        <a href="tel:+905421006136" style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            padding: "12px 16px",
                            background: "rgba(139,38,53,0.22)",
                            border: "1px solid rgba(139,38,53,0.38)",
                            borderRadius: "2px", marginBottom: "14px",
                            color: "#f0e6d4", fontFamily: "'Jost', sans-serif",
                            fontWeight: 500, fontSize: "0.88rem", letterSpacing: "0.5px",
                            transition: "background 0.3s",
                        }}
                            onMouseEnter={e => e.currentTarget.style.background = "rgba(139,38,53,0.4)"}
                            onMouseLeave={e => e.currentTarget.style.background = "rgba(139,38,53,0.22)"}
                        >☎ 0542 100 61 36</a>
                        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "rgba(240,230,212,0.3)", lineHeight: 1.7, fontWeight: 300 }}>
                            📍 Akşemsettin Mah. Şahane Sok.<br />No:1, Eyüp / İstanbul
                        </div>
                        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "rgba(212,168,130,0.4)", marginTop: "6px" }}>📸 @keyif34_cafe</div>
                    </div>
                </div>
            </div>

            <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        a { text-decoration: none !important; color: inherit !important; }
      `}</style>
        </>
    );
}