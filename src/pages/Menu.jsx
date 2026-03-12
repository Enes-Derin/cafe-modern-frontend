import React, { useState, useRef, useEffect } from "react";

const menuData = {
    categories: [
        { id: 1, name: "Sıcak Kahveler", emoji: "", imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80" },
        { id: 2, name: "Soğuk Kahveler", emoji: "", imageUrl: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80" },
        { id: 3, name: "Özel İçecekler", emoji: "", imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80" },
        { id: 4, name: "Tatlılar", emoji: "", imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80" },
        { id: 5, name: "Kahvaltı", emoji: "", imageUrl: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?auto=format&fit=crop&w=800&q=80" },
        { id: 6, name: "Atıştırmalıklar", emoji: "", imageUrl: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=800&q=80" },
    ],
    items: {
        1: [
            { id: 101, name: "Espresso", description: "Klasik İtalyan kahvesi, yoğun ve aromatik", price: "45", imageUrl: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&w=600&q=80", badge: "Klasik" },
            { id: 102, name: "Americano", description: "Espresso ve sıcak su karışımı, hafif ve dengeli", price: "50", imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80" },
            { id: 103, name: "Cappuccino", description: "Espresso, süt ve süt köpüğünün mükemmel uyumu", price: "60", imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80", badge: "Popüler" },
            { id: 104, name: "Latte", description: "Yumuşak süt ve espresso, kremalı doku", price: "65", imageUrl: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=600&q=80" },
            { id: 105, name: "Flat White", description: "Kadifemsi mikro köpük ve çift shot espresso", price: "70", imageUrl: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9e?auto=format&fit=crop&w=600&q=80" },
            { id: 106, name: "Mocha", description: "Espresso, çikolata sosu ve süt köpüğü", price: "75", imageUrl: "https://images.unsplash.com/photo-1607681034540-2c46cc71896d?auto=format&fit=crop&w=600&q=80" },
            { id: 107, name: "Türk Kahvesi", description: "Geleneksel yöntemle pişirilmiş, yoğun aromalı", price: "40", imageUrl: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=600&q=80", badge: "Geleneksel" },
            { id: 108, name: "Filtre Kahve", description: "El yapımı filtre kahve, özel çekirdeklerle", price: "55", imageUrl: "https://images.unsplash.com/photo-1559496417-e7f25cb247f6?auto=format&fit=crop&w=600&q=80" },
        ],
        2: [
            { id: 201, name: "Ice Americano", description: "Buzlu americano, serinletici ve ferahlatıcı", price: "55", imageUrl: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=600&q=80" },
            { id: 202, name: "Ice Latte", description: "Soğuk süt ve espresso, kremalı buzlu lezzet", price: "70", imageUrl: "https://images.unsplash.com/photo-1578374173705-0ec98d1d2d8c?auto=format&fit=crop&w=600&q=80", badge: "Popüler" },
            { id: 203, name: "Ice Mocha", description: "Soğuk çikolatalı kahve, tatlı ve ferahlatıcı", price: "75", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
            { id: 204, name: "Cold Brew", description: "12 saat soğuk demleme, yumuşak ve aromatik", price: "80", imageUrl: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=600&q=80", badge: "Özel" },
            { id: 205, name: "Frappuccino", description: "Buzlu kahve shake, kremşanti ile", price: "85", imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80" },
            { id: 206, name: "Affogato", description: "Vanilyalı dondurma üzerine sıcak espresso", price: "70", imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80", badge: "Şef Önerisi" },
        ],
        3: [
            { id: 301, name: "Chai Latte", description: "Baharatlı çay ve süt köpüğü", price: "65", imageUrl: "https://images.unsplash.com/photo-1578899952107-9d0d3a1b4ab4?auto=format&fit=crop&w=600&q=80" },
            { id: 302, name: "Matcha Latte", description: "Japon yeşil çayı ve süt, antioksidan deposu", price: "70", imageUrl: "https://images.unsplash.com/photo-1536013000775-5f3e48f82d42?auto=format&fit=crop&w=600&q=80", badge: "Sağlıklı" },
            { id: 303, name: "Sıcak Çikolata", description: "Belçika çikolatası ile özel tarif", price: "60", imageUrl: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80" },
            { id: 304, name: "Taze Portakal", description: "100% doğal, taze portakallardan", price: "50", imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80" },
            { id: 305, name: "Limonata", description: "Ev yapımı limonata, naneli ve serinletici", price: "45", imageUrl: "https://images.unsplash.com/photo-1523677011781-c91d1bbe1c98?auto=format&fit=crop&w=600&q=80" },
            { id: 306, name: "Smoothie Bowl", description: "Mevsim meyveleri ile hazırlanan smoothie", price: "75", imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80" },
        ],
        4: [
            { id: 401, name: "Cheesecake", description: "Orman meyveli, ev yapımı cheesecake", price: "80", imageUrl: "https://images.unsplash.com/photo-1533134242-3ba46b0e8d11?auto=format&fit=crop&w=600&q=80", badge: "Popüler" },
            { id: 402, name: "Tiramisu", description: "Klasik İtalyan tatlısı, kahve ve mascarpone", price: "85", imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80" },
            { id: 403, name: "Brownie", description: "Çikolatalı brownie, vanilyalı dondurma ile", price: "70", imageUrl: "https://images.unsplash.com/photo-1606313564559-fd13f3c8c3ad?auto=format&fit=crop&w=600&q=80" },
            { id: 404, name: "Profiterol", description: "Kremalı profiterol, sıcak çikolata soslu", price: "75", imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80" },
            { id: 405, name: "San Sebastian", description: "Yanık cheesecake, özel tarifimiz", price: "80", imageUrl: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&w=600&q=80", badge: "Şef Önerisi" },
            { id: 406, name: "Cookie", description: "Taze çikolatalı kurabiye, sıcak servis", price: "50", imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80" },
        ],
        5: [
            { id: 501, name: "Serpme Kahvaltı", description: "Peynir, zeytin, salam, yumurta, reçel ve daha fazlası", price: "150", imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80", badge: "Favori" },
            { id: 502, name: "Omlet Tabağı", description: "Sebzeli omlet, taze salata ve ekmek", price: "85", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80" },
            { id: 503, name: "Menemen", description: "Geleneksel menemen, sucuklu veya sucuksuz", price: "75", imageUrl: "https://images.unsplash.com/photo-1525256012203-78e46b3a4f4e?auto=format&fit=crop&w=600&q=80" },
            { id: 504, name: "Pancake", description: "Özel soslu pancake, meyve ve akçaağaç şurubu", price: "90", imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80" },
            { id: 505, name: "Avokado Toast", description: "Tam tahıllı ekmek, ezme avokado, poşe yumurta", price: "95", imageUrl: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=600&q=80", badge: "Trend" },
            { id: 506, name: "Croissant Tabağı", description: "Sade veya çikolatalı croissant, reçel ve tereyağı", price: "65", imageUrl: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=600&q=80" },
        ],
        6: [
            { id: 601, name: "Club Sandwich", description: "Tavuk, marul, domates, cheddar peyniri", price: "95", imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80" },
            { id: 602, name: "Tost", description: "Beyaz peynir ve kaşar karışımı, ızgara tost", price: "60", imageUrl: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=600&q=80" },
            { id: 603, name: "Caesar Salad", description: "Tavuklu sezar salatası, kruton ve parmesan", price: "90", imageUrl: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=600&q=80" },
            { id: 604, name: "Waffle", description: "Taze waffle, çikolata sosu ve meyve", price: "80", imageUrl: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=600&q=80", badge: "Popüler" },
            { id: 605, name: "Krep", description: "Nutella, muz veya çilekli krep", price: "75", imageUrl: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80" },
            { id: 606, name: "Patates Kızartması", description: "Çıtır patates kızartması, soslarla", price: "50", imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80" },
        ],
    },
};

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

export default function Menu() {
    const [selected, setSelected] = useState(null);
    const [headerRef, headerInView] = useInView(0.1);
    const [gridRef, gridInView] = useInView(0.05);

    const cat = menuData.categories.find(c => c.id === selected);

    return (
        <div style={{ minHeight: "100vh", padding: "60px 0 120px", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 28px" }}>

                {/* Header */}
                <div ref={headerRef} style={{
                    textAlign: "center",
                    marginBottom: "72px",
                    opacity: headerInView ? 1 : 0,
                    transform: headerInView ? "translateY(0)" : "translateY(40px)",
                    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                }}>
                    <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "20px" }}>
                        Lezzet Deneyimi
                    </div>
                    <h1 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(3rem, 6vw, 5rem)",
                        fontWeight: 600,
                        marginBottom: "20px",
                    }}>
                        {selected ? cat?.name : (
                            <>
                                Menü<em style={{
                                    fontStyle: "italic",
                                    fontWeight: 300,
                                    background: "linear-gradient(135deg, var(--gold-light), var(--caramel))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}>müz</em>
                            </>
                        )}
                    </h1>
                    {!selected && (
                        <p style={{
                            color: "rgba(245, 230, 211, 0.6)",
                            fontSize: "1.1rem",
                            maxWidth: "560px",
                            margin: "0 auto",
                        }}>
                            Özenle seçilmiş malzemelerden hazırlanan lezzetlerimizi keşfedin
                        </p>
                    )}
                </div>

                {/* Back button */}
                {selected && (
                    <button onClick={() => setSelected(null)} style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        background: "rgba(200, 155, 60, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(200, 155, 60, 0.25)",
                        color: "var(--gold-light)",
                        padding: "12px 28px",
                        borderRadius: "50px",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        cursor: "pointer",
                        marginBottom: "48px",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        fontFamily: "'Jost', sans-serif",
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "rgba(200, 155, 60, 0.2)";
                            e.currentTarget.style.borderColor = "var(--gold)";
                            e.currentTarget.style.transform = "translateX(-8px)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "rgba(200, 155, 60, 0.1)";
                            e.currentTarget.style.borderColor = "rgba(200, 155, 60, 0.25)";
                            e.currentTarget.style.transform = "translateX(0)";
                        }}
                    >
                        ← Kategorilere Dön
                    </button>
                )}

                {/* Category Grid */}
                {!selected && (
                    <div ref={gridRef} style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
                        gap: "24px",
                    }}>
                        {menuData.categories.map((cat, i) => (
                            <div key={cat.id} onClick={() => setSelected(cat.id)} style={{
                                position: "relative",
                                borderRadius: "var(--radius-md)",
                                overflow: "hidden",
                                cursor: "pointer",
                                height: "280px",
                                opacity: gridInView ? 1 : 0,
                                transform: gridInView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
                                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s`,
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.querySelector('img').style.transform = "scale(1.1)";
                                    e.currentTarget.querySelector('.cat-overlay').style.opacity = "0.4";
                                    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                                    e.currentTarget.style.boxShadow = "0 24px 60px rgba(0, 0, 0, 0.3), 0 0 80px rgba(200, 155, 60, 0.15)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.querySelector('img').style.transform = "scale(1)";
                                    e.currentTarget.querySelector('.cat-overlay').style.opacity = "0.6";
                                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                <img
                                    src={cat.imageUrl}
                                    alt={cat.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                                    }}
                                />
                                <div className="cat-overlay" style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to top, rgba(26, 18, 14, 0.95) 0%, rgba(26, 18, 14, 0.3) 100%)",
                                    transition: "opacity 0.4s ease",
                                    opacity: 0.6,
                                }} />
                                <div style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: "28px 28px",
                                }}>
                                    <div style={{
                                        fontSize: "2.5rem",
                                        marginBottom: "12px",
                                        animation: "float 3s ease-in-out infinite",
                                    }}>{cat.emoji}</div>
                                    <h3 style={{
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontSize: "1.8rem",
                                        fontWeight: 600,
                                        color: "var(--cream)",
                                        marginBottom: "8px",
                                    }}>{cat.name}</h3>
                                    <span style={{
                                        fontSize: "0.8rem",
                                        color: "rgba(200, 155, 60, 0.7)",
                                        letterSpacing: "1px",
                                        fontFamily: "'Jost', sans-serif",
                                    }}>
                                        {menuData.items[cat.id].length} ürün
                                    </span>
                                </div>
                                <div style={{
                                    position: "absolute",
                                    top: "20px",
                                    right: "20px",
                                    background: "linear-gradient(135deg, var(--gold), var(--caramel))",
                                    color: "var(--dark)",
                                    fontSize: "0.7rem",
                                    fontWeight: 700,
                                    letterSpacing: "1px",
                                    padding: "8px 18px",
                                    borderRadius: "50px",
                                    fontFamily: "'Jost', sans-serif",
                                    textTransform: "uppercase",
                                }}>Keşfet</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Items Grid */}
                {selected && (
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
                        gap: "24px",
                    }}>
                        {menuData.items[selected]?.map((item, i) => (
                            <div key={item.id} className="glass-card" style={{
                                overflow: "hidden",
                                animation: `fadeUp 0.6s ease ${i * 0.08}s both`,
                            }}>
                                <div style={{
                                    height: "220px",
                                    overflow: "hidden",
                                    position: "relative",
                                }}>
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                    />
                                    {item.badge && (
                                        <div style={{
                                            position: "absolute",
                                            top: "16px",
                                            left: "16px",
                                            background: "linear-gradient(135deg, var(--gold), var(--caramel))",
                                            color: "var(--dark)",
                                            fontSize: "0.7rem",
                                            fontWeight: 700,
                                            padding: "6px 16px",
                                            borderRadius: "50px",
                                            letterSpacing: "0.5px",
                                            fontFamily: "'Jost', sans-serif",
                                        }}>{item.badge}</div>
                                    )}
                                </div>
                                <div style={{ padding: "24px" }}>
                                    <h4 style={{
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontSize: "1.4rem",
                                        fontWeight: 600,
                                        color: "var(--cream)",
                                        marginBottom: "10px",
                                    }}>{item.name}</h4>
                                    <p style={{
                                        fontSize: "0.9rem",
                                        color: "rgba(245, 230, 211, 0.55)",
                                        lineHeight: 1.7,
                                        marginBottom: "20px",
                                        minHeight: "48px",
                                        fontFamily: "'Spectral', serif",
                                        fontStyle: "italic",
                                    }}>{item.description}</p>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}>
                                        <span style={{
                                            fontFamily: "'Cormorant Garamond', serif",
                                            fontSize: "1.8rem",
                                            fontWeight: 700,
                                            background: "linear-gradient(135deg, var(--gold-light), var(--caramel))",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}>₺{item.price}</span>
                                        <span style={{
                                            fontSize: "0.75rem",
                                            color: "rgba(200, 155, 60, 0.6)",
                                            letterSpacing: "0.5px",
                                            border: "1px solid rgba(200, 155, 60, 0.2)",
                                            padding: "6px 14px",
                                            borderRadius: "50px",
                                            fontFamily: "'Jost', sans-serif",
                                        }}>Stokta ✓</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}