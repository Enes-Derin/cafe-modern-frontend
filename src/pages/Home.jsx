import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const stats = [
    { value: "4.3", unit: "★", label: "Google Puanı" },
    { value: "120+", unit: "", label: "Menü Çeşidi" },
    { value: "9K+", unit: "", label: "Takipçi" },
];

const features = [
    { icon: "", title: "Kahvaltı Çeşitleri", desc: "Serpme kahvaltıdan omlete, her sabah taze ve dolu dolu bir başlangıç" },
    { icon: "", title: "Dünya Mutfağı", desc: "Farklı kültürlerden ilham alan zengin ve lezzetli dünya mutfağı tabakları" },
    { icon: "", title: "Kokteyller & İçecekler", desc: "Alkollü ve alkolsüz özel kokteyl çeşitleri, kahve ve soğuk içecekler" },
    { icon: "", title: "Nargile & Maç", desc: "Kaliteli nargile çeşitleri ve canlı maç yayını keyfi bir arada" },
];

const testimonials = [
    { name: "Emre T.", role: "Müşteri", text: "Kahvaltısı muhteşem, nargileleri kaliteli. Maç gecelerinde atmosfer ayrı bir güzel.", avatar: "E" },
    { name: "Büşra K.", role: "Müşteri", text: "Pazar sıra gecesi geliyoruz arkadaşlarla, her seferinde aynı keyfi buluyoruz.", avatar: "B" },
    { name: "Volkan A.", role: "Müşteri", text: "Dünya mutfağından seçenekler harika. Fiyat performans çok iyi, tavsiye ederim.", avatar: "V" },
];

const tags = [" Kahvaltı", " Dünya Mutfağı", " Kokteyller", " Nargile", " Maç Yayını", " Sıra Gecesi"];

function useInView(threshold = 0.1) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView];
}

function useIsMobile() {
    const [mobile, setMobile] = useState(() => typeof window !== "undefined" ? window.innerWidth < 768 : false);
    useEffect(() => {
        const fn = () => setMobile(window.innerWidth < 768);
        window.addEventListener("resize", fn);
        return () => window.removeEventListener("resize", fn);
    }, []);
    return mobile;
}

export default function Home() {
    const isMobile = useIsMobile();
    const [heroRef, heroInView] = useInView(0.05);
    const [statsRef, statsInView] = useInView(0.1);
    const [featRef, featInView] = useInView(0.05);
    const [testRef, testInView] = useInView(0.05);

    return (
        <div style={{ position: "relative", zIndex: 1 }}>

            {/* ── HERO ── */}
            <section ref={heroRef} style={{
                minHeight: "100svh",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
            }}>
                {/* BG */}
                <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                    <img
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.28) saturate(0.7)" }}
                    />
                    {/* Vignette */}
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,6,3,0.7) 100%)" }} />
                    {/* Bottom fade */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, #181410, transparent)" }} />
                    {/* Left fade desktop */}
                    {!isMobile && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,10,6,0.85) 0%, rgba(14,10,6,0.4) 50%, transparent 100%)" }} />}
                </div>

                {/* Content */}
                <div style={{
                    maxWidth: "1280px", margin: "0 auto", width: "100%",
                    padding: isMobile ? "110px 24px 90px" : "0 48px",
                    position: "relative", zIndex: 1,
                }}>
                    <div style={{
                        maxWidth: isMobile ? "100%" : "580px",
                        opacity: heroInView ? 1 : 0,
                        transform: heroInView ? "translateY(0)" : "translateY(32px)",
                        transition: "all 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}>

                        {/* Eyebrow */}
                        <div className="section-eyebrow" style={{ justifyContent: "flex-start", marginBottom: "24px" }}>
                            Eyüp · İstanbul
                        </div>

                        {/* Headline */}
                        <h1 style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: isMobile ? "clamp(3rem, 13vw, 4.2rem)" : "clamp(3.5rem, 6vw, 5.5rem)",
                            fontWeight: 700,
                            lineHeight: 1.05,
                            color: "var(--cream)",
                            marginBottom: "12px",
                        }}>
                            Her An
                        </h1>
                        <h1 style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: isMobile ? "clamp(3rem, 13vw, 4.2rem)" : "clamp(3.5rem, 6vw, 5.5rem)",
                            fontWeight: 400,
                            fontStyle: "italic",
                            lineHeight: 1.05,
                            color: "var(--gold)",
                            marginBottom: "28px",
                            textShadow: "0 2px 30px rgba(200,151,90,0.2)",
                        }}>
                            Keyif 34'te
                        </h1>

                        {/* Ornament */}
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                            <div style={{ flex: 1, maxWidth: "60px", height: "1px", background: "linear-gradient(to right, var(--gold), transparent)", opacity: 0.5 }} />
                            <span style={{ color: "var(--gold)", fontSize: "0.7rem", opacity: 0.6 }}>✦</span>
                        </div>

                        <p style={{
                            fontFamily: "'Lato', sans-serif",
                            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                            color: "rgba(240,230,216,0.65)",
                            lineHeight: 1.85,
                            marginBottom: "32px",
                            maxWidth: "440px",
                        }}>
                            Kahvaltıdan dünya mutfağına, kokteyllerden nargilelere kadar her şey bir arada.
                            Maç yayını ve her pazar sıra gecesi keyfi!
                        </p>

                        {/* Tags */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "36px" }}>
                            {tags.map((tag, i) => (
                                <span key={i} style={{
                                    fontFamily: "'Lato', sans-serif",
                                    fontSize: "0.72rem",
                                    fontWeight: 400,
                                    padding: "5px 12px",
                                    background: "rgba(200,151,90,0.07)",
                                    border: "1px solid rgba(200,151,90,0.2)",
                                    color: "rgba(200,151,90,0.8)",
                                    letterSpacing: "0.5px",
                                    borderRadius: "1px",
                                }}>{tag}</span>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
                            <Link to="/menu"><button className="btn-gold">Menüyü Keşfet</button></Link>
                        </div>


                    </div>
                </div>

                {/* Scroll indicator */}
                <div style={{
                    position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
                    opacity: 0.4, zIndex: 2,
                }}>
                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.58rem", letterSpacing: "3px", textTransform: "uppercase", color: "var(--gold)" }}>Kaydır</span>
                    <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--gold), transparent)", animation: "float 2.5s ease-in-out infinite" }} />
                </div>
            </section>



            {/* ── FEATURES ── */}
            <section ref={featRef} style={{ padding: "0 24px 80px", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "52px" }}>
                    <div className="section-eyebrow" style={{ justifyContent: "center", marginBottom: "16px" }}>Neden Keyif 34</div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--cream)", fontWeight: 600 }}>
                        Her Şey Bir <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Arada</em>
                    </h2>
                </div>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
                    gap: "1px",
                    background: "rgba(200,151,90,0.1)",
                    border: "1px solid rgba(200,151,90,0.14)",
                }}>
                    {features.map((f, i) => (
                        <div key={i} style={{
                            background: "rgba(18,13,9,0.95)",
                            padding: "36px 28px",
                            transition: "background 0.35s ease",
                            opacity: featInView ? 1 : 0,
                            transform: featInView ? "translateY(0)" : "translateY(28px)",
                            transitionDelay: `${i * 0.1}s`,
                            position: "relative",
                        }}
                            onMouseEnter={e => e.currentTarget.style.background = "rgba(28,20,12,0.98)"}
                            onMouseLeave={e => e.currentTarget.style.background = "rgba(18,13,9,0.95)"}
                        >
                            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--cream)", marginBottom: "10px", letterSpacing: "0.3px" }}>{f.title}</h3>
                            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "rgba(240,230,216,0.5)", lineHeight: 1.75, fontWeight: 300 }}>{f.desc}</p>
                            {/* Corner accent */}
                            <div style={{ position: "absolute", bottom: "12px", right: "12px", width: "14px", height: "14px", borderRight: "1px solid rgba(200,151,90,0.25)", borderBottom: "1px solid rgba(200,151,90,0.25)" }} />
                        </div>
                    ))}
                </div>
            </section>

            {/* ── FULL IMAGE STRIP ── */}
            <section style={{ marginBottom: "80px", position: "relative", height: "clamp(220px, 38vw, 500px)", overflow: "hidden" }}>
                <img
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=80"
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35) saturate(0.7)" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(14,10,6,0.3) 0%, rgba(14,10,6,0.75) 100%)" }} />
                <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    textAlign: "center", padding: "20px",
                }}>
                    {/* Decorative top */}
                    <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ width: "40px", height: "1px", background: "rgba(200,151,90,0.5)" }} />
                        <span style={{ color: "var(--gold)", fontSize: "0.8rem", opacity: 0.7 }}>✦</span>
                        <div style={{ width: "40px", height: "1px", background: "rgba(200,151,90,0.5)" }} />
                    </div>
                    <h2 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(1.6rem, 4.5vw, 3.5rem)",
                        fontWeight: 600,
                        color: "var(--cream)",
                        maxWidth: "640px",
                        letterSpacing: "0.5px",
                        lineHeight: 1.2,
                        textShadow: "0 4px 30px rgba(0,0,0,0.5)",
                    }}>
                        Her Pazar Sıra Gecesi Keyfi<br />
                        <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>Keyif 34'te</em>
                    </h2>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section ref={testRef} style={{ padding: "0 24px 80px", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "48px" }}>
                    <div className="section-eyebrow" style={{ justifyContent: "center", marginBottom: "16px" }}>Müşteri Yorumları</div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--cream)", fontWeight: 600 }}>
                        Onlar <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>Anlattı</em>
                    </h2>
                </div>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                    gap: "16px",
                }}>
                    {testimonials.map((t, i) => (
                        <div key={i} className="corner-decor" style={{
                            background: "rgba(20,14,9,0.9)",
                            border: "1px solid rgba(200,151,90,0.12)",
                            padding: "32px 28px",
                            opacity: testInView ? 1 : 0,
                            transform: testInView ? "translateY(0)" : "translateY(24px)",
                            transition: `all 0.6s ease ${i * 0.15}s`,
                        }}>
                            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", color: "var(--gold)", lineHeight: 1, marginBottom: "16px", opacity: 0.4 }}>"</div>
                            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(240,230,216,0.7)", marginBottom: "24px", fontWeight: 300 }}>{t.text}</p>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "1px solid rgba(200,151,90,0.1)" }}>
                                <div style={{
                                    width: "36px", height: "36px", borderRadius: "50%",
                                    background: "linear-gradient(135deg, rgba(200,151,90,0.3), rgba(168,117,64,0.2))",
                                    border: "1px solid rgba(200,151,90,0.3)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
                                    color: "var(--gold)", fontSize: "0.9rem", flexShrink: 0,
                                }}>{t.avatar}</div>
                                <div>
                                    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, color: "var(--cream)", fontSize: "0.85rem" }}>{t.name}</div>
                                    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", color: "rgba(200,151,90,0.6)", letterSpacing: "1px" }}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section style={{ margin: "0 24px 80px", maxWidth: "1232px", marginLeft: "auto", marginRight: "auto" }}>
                <div style={{ position: "relative", overflow: "hidden", borderRadius: "2px" }}>
                    <img
                        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=80"
                        alt=""
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.22) saturate(0.6)" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(18,12,8,0.4) 0%, rgba(18,12,8,0.8) 100%)" }} />
                    {/* Border lines */}
                    <div style={{ position: "absolute", inset: "16px", border: "1px solid rgba(200,151,90,0.15)", pointerEvents: "none" }} />

                    <div style={{ position: "relative", zIndex: 1, padding: "clamp(52px, 8vw, 100px) clamp(24px, 6vw, 80px)", textAlign: "center" }}>
                        <div className="section-eyebrow" style={{ justifyContent: "center", marginBottom: "20px" }}>Bize Ulaşın</div>
                        <h2 style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "clamp(2rem, 5vw, 3.8rem)",
                            fontWeight: 600, color: "var(--cream)", marginBottom: "16px",
                        }}>
                            Sizi Ağırlamaktan
                        </h2>
                        <h2 style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "clamp(2rem, 5vw, 3.8rem)",
                            fontWeight: 400, fontStyle: "italic",
                            color: "var(--gold)", marginBottom: "24px",
                        }}>
                            Mutluluk Duyarız
                        </h2>
                        <p style={{ fontFamily: "'Lato', sans-serif", color: "rgba(240,230,216,0.55)", fontSize: "0.88rem", marginBottom: "8px", letterSpacing: "0.5px" }}>
                            Akşemsettin Mah. Şahane Sok. No:1 — Eyüp / İstanbul
                        </p>
                        <p style={{ fontFamily: "'Lato', sans-serif", color: "rgba(200,151,90,0.65)", fontSize: "0.8rem", marginBottom: "8px", letterSpacing: "1px" }}>
                            Maç yayını var &nbsp;·&nbsp;  Her pazar sıra gecesi &nbsp;·&nbsp;  Nargile
                        </p>
                        <a href="tel:+905421006136" style={{
                            display: "inline-block", marginBottom: "32px",
                            fontFamily: "'Lato', sans-serif", fontWeight: 700,
                            color: "var(--gold)", fontSize: "1.1rem", letterSpacing: "1px",
                        }}> 0542 100 61 36</a>
                        <div>
                            <Link to="/contact">
                                <button className="btn-gold" style={{ fontSize: "0.78rem", padding: "15px 40px" }}>İletişime Geç</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}