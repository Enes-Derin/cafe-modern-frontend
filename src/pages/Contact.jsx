import React, { useState, useRef, useEffect } from "react";

const contactInfo = [
    { icon: "", label: "Adres", value: "Akşemsettin Mah. Şahane Sok. No:1", sub: "Eyüp / İstanbul" },
    { icon: " ", label: "Telefon", value: "0542 100 61 36", sub: "Hemen arayabilirsiniz", href: "tel:+905421006136" },
    { icon: "", label: "Instagram", value: "@keyif34_cafe", sub: "353 gönderi · 9.020 takipçi" },
    { icon: "", label: "Çalışma Saatleri", value: "Her Gün Açık", sub: "Sabahtan geç saatlere kadar" },
];

const socials = [
    { name: "Maç Yayını", handle: "Canlı yayın var", icon: "", url: "#" },
    { name: "Sıra Gecesi", handle: "Her pazar", icon: "", url: "#" },
];

function useInView(threshold = 0.1) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setInView(true); },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView];
}

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [ref, inView] = useInView();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => { setSending(false); setSent(true); }, 1800);
    };

    const inputStyle = {
        width: "100%", padding: "14px 18px",
        background: "rgba(40,30,20,0.7)",
        border: "1px solid rgba(200,151,90,0.15)",
        borderRadius: "12px", color: "var(--cream)",
        fontSize: "0.95rem", fontFamily: "'DM Sans', sans-serif",
        outline: "none", transition: "all 0.25s ease",
        boxSizing: "border-box",
    };

    const labelStyle = {
        display: "block", marginBottom: "8px",
        fontSize: "0.78rem", fontWeight: 600,
        letterSpacing: "1px", textTransform: "uppercase",
        color: "rgba(200,151,90,0.7)",
    };

    return (
        <div style={{ minHeight: "100vh", padding: "40px 0 80px", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "64px", animation: "fadeUp 0.7s ease both" }}>
                    <div className="section-eyebrow" style={{ justifyContent: "center", marginBottom: "16px" }}>Bize Ulaşın</div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--cream)", marginBottom: "14px" }}>
                        İleti<em style={{ fontStyle: "italic", color: "var(--gold)" }}>şim</em>
                    </h1>
                    <p style={{ color: "rgba(240,230,216,0.55)", fontSize: "1.05rem", maxWidth: "480px", margin: "0 auto" }}>
                        Rezervasyon, özel etkinlik ya da maç gecesi için masa ayırtmak için buradayız
                    </p>
                </div>

                <div ref={ref} style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                    gap: "24px",
                    alignItems: "start",
                }}>

                    {/* Sol — Bilgi */}
                    <div style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateX(0)" : "translateX(-30px)",
                        transition: "all 0.7s ease",
                    }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "24px" }}>
                            {contactInfo.map((item, i) => (
                                <div key={i} style={{
                                    background: "rgba(28,22,16,0.85)",
                                    border: "1px solid rgba(200,151,90,0.12)",
                                    borderRadius: "16px", padding: "20px 16px",
                                    backdropFilter: "blur(10px)",
                                    transition: "all 0.3s ease",
                                    animation: `fadeUp 0.5s ease ${i * 0.1}s both`,
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(200,151,90,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(200,151,90,0.12)"; e.currentTarget.style.transform = "translateY(0)"; }}
                                >
                                    <div style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{item.icon}</div>
                                    <div style={{ fontSize: "0.68rem", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(200,151,90,0.6)", marginBottom: "6px" }}>{item.label}</div>
                                    <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--cream)", lineHeight: 1.4, marginBottom: "4px" }}>{item.value}</div>
                                    <div style={{ fontSize: "0.73rem", color: "rgba(240,230,216,0.4)" }}>{item.sub}</div>
                                </div>
                            ))}
                        </div>

                        {/* Öne çıkan bilgiler */}
                        <div style={{
                            background: "rgba(28,22,16,0.85)", border: "1px solid rgba(200,151,90,0.12)",
                            borderRadius: "16px", padding: "24px", backdropFilter: "blur(10px)", marginBottom: "24px",
                        }}>
                            <div style={{ fontSize: "0.68rem", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(200,151,90,0.6)", marginBottom: "16px" }}>Özelliklerimiz</div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                {socials.map((s, i) => (
                                    <div key={i} style={{
                                        display: "flex", alignItems: "center", justifyContent: "space-between",
                                        padding: "10px 14px", borderRadius: "10px",
                                        background: "rgba(200,151,90,0.05)", border: "1px solid rgba(200,151,90,0.08)",
                                        cursor: "pointer", transition: "all 0.25s ease",
                                    }}
                                        onMouseEnter={e => { e.currentTarget.style.background = "rgba(200,151,90,0.1)"; e.currentTarget.style.borderColor = "rgba(200,151,90,0.25)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = "rgba(200,151,90,0.05)"; e.currentTarget.style.borderColor = "rgba(200,151,90,0.08)"; }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <span style={{ fontSize: "1.1rem" }}>{s.icon}</span>
                                            <span style={{ fontWeight: 600, color: "var(--cream)", fontSize: "0.9rem" }}>{s.name}</span>
                                        </div>
                                        <span style={{ fontSize: "0.78rem", color: "rgba(200,151,90,0.6)" }}>{s.handle}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Harita */}
                        <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(200,151,90,0.15)" }}>
                            <iframe
                                title="Keyif 34 Cafe Harita"
                                src="https://maps.google.com/maps?q=Akşemsettin+Mah+Şahane+Sok+No:1+Eyüp+Istanbul&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%" height="220"
                                style={{ border: "0", display: "block", filter: "grayscale(20%) invert(5%)" }}
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Sağ — Form */}
                    <div style={{
                        background: "rgba(28,22,16,0.85)",
                        border: "1px solid rgba(200,151,90,0.15)",
                        borderRadius: "24px", padding: "clamp(24px, 4vw, 40px)",
                        backdropFilter: "blur(12px)",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateX(0)" : "translateX(30px)",
                        transition: "all 0.7s ease 0.15s",
                    }}>
                        {sent ? (
                            <div style={{ textAlign: "center", padding: "48px 24px" }}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px", animation: "float 2s ease-in-out infinite" }}>✉️</div>
                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "var(--cream)", marginBottom: "12px" }}>Mesajınız Ulaştı!</h3>
                                <p style={{ color: "rgba(240,230,216,0.55)", lineHeight: 1.7 }}>En kısa sürede size geri dönüş yapacağız. Keyif 34 Cafe'yi tercih ettiğiniz için teşekkür ederiz.</p>
                                <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                                    className="btn-gold" style={{ marginTop: "28px" }}>Yeni Mesaj</button>
                            </div>
                        ) : (
                            <>
                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "var(--cream)", marginBottom: "6px" }}>Mesaj Gönderin</h3>
                                <p style={{ color: "rgba(240,230,216,0.45)", fontSize: "0.9rem", marginBottom: "32px" }}>Rezervasyon ve tüm sorularınız için</p>

                                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                                        <div>
                                            <label style={labelStyle}>Adınız</label>
                                            <input name="name" value={form.name} onChange={handleChange} required placeholder="Ahmet Yılmaz" style={inputStyle}
                                                onFocus={e => { e.target.style.borderColor = "rgba(200,151,90,0.5)"; e.target.style.background = "rgba(50,38,26,0.8)"; }}
                                                onBlur={e => { e.target.style.borderColor = "rgba(200,151,90,0.15)"; e.target.style.background = "rgba(40,30,20,0.7)"; }}
                                            />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Telefon / E-posta</label>
                                            <input name="email" value={form.email} onChange={handleChange} required placeholder="05xx veya mail" style={inputStyle}
                                                onFocus={e => { e.target.style.borderColor = "rgba(200,151,90,0.5)"; e.target.style.background = "rgba(50,38,26,0.8)"; }}
                                                onBlur={e => { e.target.style.borderColor = "rgba(200,151,90,0.15)"; e.target.style.background = "rgba(40,30,20,0.7)"; }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyle}>Konu</label>
                                        <select name="subject" value={form.subject} onChange={handleChange} required style={inputStyle}>
                                            <option value="" style={{ background: "#1c1610" }}>Konu seçin...</option>
                                            <option value="rezervasyon" style={{ background: "#1c1610" }}>Masa Rezervasyonu</option>
                                            <option value="ozel-etkinlik" style={{ background: "#1c1610" }}>Özel Etkinlik</option>
                                            <option value="oneri" style={{ background: "#1c1610" }}>Öneri & Şikayet</option>
                                            <option value="oneri" style={{ background: "#1c1610" }}>Başka</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label style={labelStyle}>Mesajınız</label>
                                        <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                                            placeholder="Merhaba, rezervasyon yapmak istiyorum..." style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                                            onFocus={e => { e.target.style.borderColor = "rgba(200,151,90,0.5)"; e.target.style.background = "rgba(50,38,26,0.8)"; }}
                                            onBlur={e => { e.target.style.borderColor = "rgba(200,151,90,0.15)"; e.target.style.background = "rgba(40,30,20,0.7)"; }}
                                        />
                                    </div>

                                    <button type="submit" className="btn-gold" style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "16px" }} disabled={sending}>
                                        {sending ? (
                                            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                <span style={{ width: "16px", height: "16px", border: "2px solid rgba(0,0,0,0.3)", borderTopColor: "#0d0a07", borderRadius: "50%", animation: "spin 0.8s linear infinite", display: "inline-block" }} />
                                                Gönderiliyor...
                                            </span>
                                        ) : "Mesaj Gönder →"}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}