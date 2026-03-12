import React, { useState, useEffect } from "react";

const PHRASES = [
    "Keyif 34 Cafe",
    "Her An Keyif...",
    "Eyüp · İstanbul",
];

export default function Typewriter({ onComplete }) {
    const [phase, setPhase] = useState(0); // 0=typing, 1=pause, 2=erasing, 3=next
    const [text, setText] = useState("");
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [done, setDone] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (done) return;
        const target = PHRASES[phraseIdx];
        let timeout;

        if (phase === 0) {
            // Yazıyor
            if (text.length < target.length) {
                const speed = phraseIdx === 0 ? 90 : 60;
                timeout = setTimeout(() => setText(target.slice(0, text.length + 1)), speed);
            } else {
                // Yazım tamamlandı — son cümle mi?
                if (phraseIdx === PHRASES.length - 1) {
                    timeout = setTimeout(() => {
                        setFadeOut(true);
                        setTimeout(() => { setDone(true); onComplete(); }, 800);
                    }, 1400);
                } else {
                    timeout = setTimeout(() => setPhase(1), 900);
                }
            }
        } else if (phase === 1) {
            // Bekle → silmeye başla
            timeout = setTimeout(() => setPhase(2), 200);
        } else if (phase === 2) {
            // Siliyor
            if (text.length > 0) {
                timeout = setTimeout(() => setText(t => t.slice(0, -1)), 38);
            } else {
                setPhraseIdx(i => i + 1);
                setPhase(0);
            }
        }

        return () => clearTimeout(timeout);
    }, [text, phase, phraseIdx, done, onComplete]);

    if (done) return null;

    return (
        <div style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "#1e1510",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            opacity: fadeOut ? 0 : 1,
            transition: "opacity 0.8s ease",
            pointerEvents: fadeOut ? "none" : "auto",
        }}>
            {/* Üst ince çizgi */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: "2px",
                background: "linear-gradient(to right, transparent, rgba(139,38,53,0.8), rgba(212,168,130,0.7), rgba(139,38,53,0.8), transparent)",
            }} />

            {/* Dekoratif çerçeve */}
            <div style={{
                position: "absolute",
                inset: "clamp(20px, 5vw, 60px)",
                border: "1px solid rgba(139,38,53,0.18)",
                pointerEvents: "none",
                animation: "fadeIn 1s ease 0.3s both",
            }} />
            <div style={{
                position: "absolute",
                inset: "clamp(26px, 6vw, 72px)",
                border: "1px solid rgba(212,168,130,0.07)",
                pointerEvents: "none",
                animation: "fadeIn 1s ease 0.5s both",
            }} />

            {/* Köşe süsleri */}
            {[
                { top: "clamp(24px, 5vw, 64px)", left: "clamp(24px, 5vw, 64px)" },
                { top: "clamp(24px, 5vw, 64px)", right: "clamp(24px, 5vw, 64px)" },
                { bottom: "clamp(24px, 5vw, 64px)", left: "clamp(24px, 5vw, 64px)" },
                { bottom: "clamp(24px, 5vw, 64px)", right: "clamp(24px, 5vw, 64px)" },
            ].map((pos, i) => (
                <div key={i} style={{
                    position: "absolute", ...pos,
                    width: "24px", height: "24px",
                    borderColor: "rgba(139,38,53,0.5)",
                    borderStyle: "solid",
                    borderWidth: pos.top ? (pos.left ? "1px 0 0 1px" : "1px 1px 0 0") : (pos.left ? "0 0 1px 1px" : "0 1px 1px 0"),
                    animation: `fadeIn 0.6s ease ${0.2 + i * 0.1}s both`,
                }} />
            ))}

            {/* İçerik */}
            <div style={{ textAlign: "center", padding: "0 40px" }}>
                {/* Üst etiket */}
                <div style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "clamp(0.55rem, 1.5vw, 0.65rem)",
                    letterSpacing: "6px", textTransform: "uppercase",
                    color: "rgba(212,168,130,0.5)",
                    marginBottom: "28px",
                    animation: "fadeIn 1s ease 0.4s both",
                }}>
                    Eyüp · İstanbul
                </div>

                {/* Ana daktilo metni */}
                <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2.2rem, 8vw, 5rem)",
                    fontWeight: phraseIdx === 0 ? 700 : 300,
                    fontStyle: phraseIdx === 1 ? "italic" : "normal",
                    color: phraseIdx === 0
                        ? "#f0e6d4"
                        : phraseIdx === 1
                            ? "rgba(212,168,130,0.85)"
                            : "rgba(240,230,212,0.6)",
                    letterSpacing: phraseIdx === 0 ? "3px" : "1px",
                    minHeight: "clamp(3rem, 9vw, 7rem)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                    {text}
                    {/* İmleç */}
                    <span style={{
                        display: "inline-block",
                        width: phraseIdx === 0 ? "3px" : "2px",
                        height: "0.85em",
                        background: phraseIdx === 0 ? "rgba(139,38,53,0.9)" : "rgba(212,168,130,0.7)",
                        marginLeft: "4px",
                        verticalAlign: "middle",
                        animation: "blink 1s step-end infinite",
                    }} />
                </div>

                {/* Alt süsleme */}
                <div style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "center", gap: "16px",
                    marginTop: "32px",
                    animation: "fadeIn 1s ease 0.6s both",
                }}>
                    <div style={{ width: "40px", height: "1px", background: "rgba(139,38,53,0.4)" }} />
                    <div style={{ display: "flex", gap: "6px" }}>
                        {[0, 1, 2].map(i => (
                            <div key={i} style={{
                                width: "4px", height: "4px",
                                borderRadius: "50%",
                                background: i === phraseIdx ? "rgba(139,38,53,0.7)" : "rgba(212,168,130,0.2)",
                                transition: "background 0.4s ease",
                            }} />
                        ))}
                    </div>
                    <div style={{ width: "40px", height: "1px", background: "rgba(212,168,130,0.3)" }} />
                </div>
            </div>

            {/* Alt çizgi */}
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: "2px",
                background: "linear-gradient(to right, transparent, rgba(42,53,64,0.5), rgba(139,38,53,0.4), transparent)",
            }} />
        </div>
    );
}