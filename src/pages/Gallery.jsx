import React, { useState, useRef, useEffect } from "react";

const galleryImages = [
    { id: 1, imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80", title: "Kahve Hazırlığı", category: "Ürünler" },
    { id: 2, imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80", title: "Latte Art", category: "Ürünler" },
    { id: 3, imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80", title: "Café İç Mekan", category: "Mekan" },
    { id: 4, imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80", title: "Kahve Çekimi", category: "Ürünler" },
    { id: 5, imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80", title: "Özel Kahve", category: "Ürünler" },
    { id: 6, imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80", title: "Kahvaltı Masası", category: "Yemek" },
    { id: 7, imageUrl: "https://images.unsplash.com/photo-1559496417-e7f25cb247f6?auto=format&fit=crop&w=1200&q=80", title: "Filtre Kahve", category: "Ürünler" },
    { id: 8, imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80", title: "Çalışma Alanı", category: "Mekan" },
    { id: 9, imageUrl: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80", title: "Café Atmosferi", category: "Mekan" },
    { id: 10, imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1200&q=80", title: "Frappuccino", category: "Ürünler" },
    { id: 11, imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80", title: "Cheesecake", category: "Tatlı" },
    { id: 12, imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=80", title: "Tiramisu", category: "Tatlı" },
    { id: 13, imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80", title: "Pancake", category: "Yemek" },
    { id: 14, imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80", title: "Kahvaltı", category: "Yemek" },
    { id: 15, imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=80", title: "Özel İçecekler", category: "Ürünler" },
    { id: 16, imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80", title: "Espresso", category: "Ürünler" },
    { id: 17, imageUrl: "https://images.unsplash.com/photo-1536013000775-5f3e48f82d42?auto=format&fit=crop&w=1200&q=80", title: "Matcha Latte", category: "Ürünler" },
    { id: 18, imageUrl: "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1200&q=80", title: "Café Bar", category: "Mekan" },
    { id: 19, imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80", title: "Espresso Makinesi", category: "Mekan" },
    { id: 20, imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1200&q=80", title: "Brownie", category: "Tatlı" },
    { id: 21, imageUrl: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=1200&q=80", title: "Croissant", category: "Yemek" },
    { id: 22, imageUrl: "https://images.unsplash.com/photo-1607681034540-2c46cc71896d?auto=format&fit=crop&w=1200&q=80", title: "Mocha", category: "Ürünler" },
    { id: 23, imageUrl: "https://images.unsplash.com/photo-1606313564559-fd13f3c8c3ad?auto=format&fit=crop&w=1200&q=80", title: "Çikolatalı Kek", category: "Tatlı" },
    { id: 24, imageUrl: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?auto=format&fit=crop&w=1200&q=80", title: "Serpme Kahvaltı", category: "Yemek" },
];

const categories = ["Tümü", "Ürünler", "Mekan", "Yemek", "Tatlı"];

export default function Gallery() {
    const [filter, setFilter] = useState("Tümü");
    const [selected, setSelected] = useState(null);
    const [selectedIdx, setSelectedIdx] = useState(0);

    const filtered = filter === "Tümü" ? galleryImages : galleryImages.filter(img => img.category === filter);

    const openImage = (img, idx) => { setSelected(img); setSelectedIdx(idx); };
    const prev = () => { const i = (selectedIdx - 1 + filtered.length) % filtered.length; setSelected(filtered[i]); setSelectedIdx(i); };
    const next = () => { const i = (selectedIdx + 1) % filtered.length; setSelected(filtered[i]); setSelectedIdx(i); };

    useEffect(() => {
        if (!selected) return;
        const onKey = e => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
            if (e.key === "Escape") setSelected(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected, selectedIdx, filtered]);

    useEffect(() => {
        document.body.style.overflow = selected ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [selected]);

    return (
        <div style={{ minHeight: "100vh", padding: "40px 0 80px", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "48px", animation: "fadeUp 0.7s ease both" }}>
                    <div className="section-eyebrow" style={{ justifyContent: "center", marginBottom: "16px" }}>Görsel Galeri</div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--cream)", marginBottom: "14px" }}>
                        Gale<em style={{ fontStyle: "italic", color: "var(--gold)" }}>ri</em>
                    </h1>
                    <p style={{ color: "rgba(240,230,216,0.55)", fontSize: "1.05rem", maxWidth: "480px", margin: "0 auto" }}>
                        Café Modern'in samimi atmosferini ve lezzetli sunumlarını keşfedin
                    </p>
                </div>

                {/* Filter Pills */}
                <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
                    {categories.map(cat => {
                        const active = filter === cat;
                        return (
                            <button key={cat} onClick={() => setFilter(cat)} style={{
                                padding: "10px 22px", borderRadius: "50px",
                                border: active ? "none" : "1.5px solid rgba(200,151,90,0.3)",
                                background: active ? "linear-gradient(135deg, #c8975a, #a87540)" : "transparent",
                                color: active ? "#0d0a07" : "rgba(200,151,90,0.8)",
                                fontSize: "0.88rem", fontWeight: 600, cursor: "pointer",
                                transition: "all 0.25s ease",
                                letterSpacing: "0.3px",
                                boxShadow: active ? "0 4px 15px rgba(200,151,90,0.3)" : "none",
                            }}
                                onMouseEnter={e => { if (!active) { e.currentTarget.style.background = "rgba(200,151,90,0.1)"; e.currentTarget.style.color = "#c8975a"; } }}
                                onMouseLeave={e => { if (!active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(200,151,90,0.8)"; } }}
                            >{cat}</button>
                        );
                    })}
                </div>

                <p style={{ textAlign: "center", fontSize: "0.8rem", color: "rgba(200,151,90,0.45)", letterSpacing: "1px", marginBottom: "32px" }}>
                    {filtered.length} FOTOĞRAF
                </p>

                {/* Masonry-style Grid */}
                <div style={{
                    columns: "var(--cols)",
                    columnGap: "16px",
                    "--cols": "3",
                }}>
                    <style>{`
            @media (max-width: 768px) { div[style*="--cols"] { --cols: 2 !important; } }
            @media (max-width: 480px) { div[style*="--cols"] { --cols: 1 !important; } }
          `}</style>
                    {filtered.map((img, idx) => (
                        <div key={img.id} onClick={() => openImage(img, idx)} style={{
                            marginBottom: "16px", breakInside: "avoid",
                            borderRadius: "16px", overflow: "hidden",
                            position: "relative", cursor: "pointer",
                            animation: `scaleIn 0.4s ease ${idx * 0.03}s both`,
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.querySelector('.gal-overlay').style.opacity = "1";
                                e.currentTarget.querySelector('img').style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.querySelector('.gal-overlay').style.opacity = "0";
                                e.currentTarget.querySelector('img').style.transform = "scale(1)";
                            }}
                        >
                            <img src={img.imageUrl} alt={img.title} style={{ width: "100%", display: "block", transition: "transform 0.4s ease" }} loading="lazy" />
                            <div className="gal-overlay" style={{
                                position: "absolute", inset: 0,
                                background: "linear-gradient(to top, rgba(10,7,4,0.85) 0%, rgba(10,7,4,0.1) 100%)",
                                opacity: 0, transition: "opacity 0.3s ease",
                                display: "flex", flexDirection: "column", justifyContent: "flex-end",
                                padding: "18px 16px",
                            }}>
                                <h6 style={{ color: "var(--cream)", fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", marginBottom: "4px" }}>{img.title}</h6>
                                <span style={{ color: "rgba(200,151,90,0.8)", fontSize: "0.75rem" }}>{img.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selected && (
                <div style={{
                    position: "fixed", inset: 0, zIndex: 2000,
                    background: "rgba(5,3,2,0.95)", backdropFilter: "blur(20px)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "20px", animation: "scaleIn 0.2s ease both",
                }} onClick={() => setSelected(null)}>

                    {/* Close */}
                    <button onClick={() => setSelected(null)} style={{
                        position: "absolute", top: "20px", right: "20px",
                        background: "rgba(200,151,90,0.15)", border: "1px solid rgba(200,151,90,0.3)",
                        borderRadius: "50%", width: "44px", height: "44px",
                        color: "var(--gold)", fontSize: "1.3rem", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10,
                    }}>×</button>

                    {/* Prev */}
                    <button onClick={e => { e.stopPropagation(); prev(); }} style={{
                        position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)",
                        background: "rgba(200,151,90,0.15)", border: "1px solid rgba(200,151,90,0.25)",
                        borderRadius: "50%", width: "48px", height: "48px",
                        color: "var(--gold)", fontSize: "1.2rem", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10,
                    }}>‹</button>

                    {/* Next */}
                    <button onClick={e => { e.stopPropagation(); next(); }} style={{
                        position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)",
                        background: "rgba(200,151,90,0.15)", border: "1px solid rgba(200,151,90,0.25)",
                        borderRadius: "50%", width: "48px", height: "48px",
                        color: "var(--gold)", fontSize: "1.2rem", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10,
                    }}>›</button>

                    <div onClick={e => e.stopPropagation()} style={{
                        maxWidth: "min(900px, 90vw)", width: "100%",
                        borderRadius: "24px", overflow: "hidden",
                        position: "relative", boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
                        border: "1px solid rgba(200,151,90,0.15)",
                    }}>
                        <img src={selected.imageUrl} alt={selected.title} style={{ width: "100%", maxHeight: "75vh", objectFit: "cover", display: "block" }} />
                        <div style={{ background: "rgba(18,13,10,0.95)", padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <h4 style={{ fontFamily: "'Playfair Display', serif", color: "var(--cream)", marginBottom: "4px" }}>{selected.title}</h4>
                                <span style={{ fontSize: "0.8rem", color: "rgba(200,151,90,0.7)" }}>{selected.category}</span>
                            </div>
                            <span style={{ fontSize: "0.8rem", color: "rgba(240,230,216,0.35)", letterSpacing: "1px" }}>{selectedIdx + 1} / {filtered.length}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}