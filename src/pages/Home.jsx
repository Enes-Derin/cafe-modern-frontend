// 


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    const features = [
        {
            icon: "☕",
            title: "Özel Kahveler",
            description: "Dünya çapında seçilmiş çekirdeklerden hazırlanan özel kahveler"
        },
        {
            icon: "🥐",
            title: "Taze Atıştırmalıklar",
            description: "Her gün taze yapılan croissant ve pastalarımız"
        },
        {
            icon: "🌿",
            title: "Organik Ürünler",
            description: "Doğal ve organik malzemelerle hazırlanan menümüz"
        },
        {
            icon: "📍",
            title: "Merkezi Konum",
            description: "Beyoğlu'nun kalbinde, kolay ulaşılabilir konumumuz"
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section
                className="container-fluid py-5 px-3 px-md-5 d-flex align-items-center"
                style={{
                    minHeight: "90vh",
                    color: "#f5e9dd",
                }}
            >
                <div className="row w-100 align-items-center">
                    <motion.div
                        className="col-12 col-lg-6 mb-5 mb-lg-0"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <span
                                style={{
                                    color: "#d49c72",
                                    fontSize: "1.1rem",
                                    fontWeight: "600",
                                    letterSpacing: "2px",
                                }}
                            >
                                BEYOĞLU'NUN İNCİSİ
                            </span>
                        </motion.div>

                        <h1
                            className="fw-bold display-3 text-start mt-3"
                            style={{ lineHeight: "1.2" }}
                        >
                            Merhaba. Tatlı bir mola
                            <br />
                            <span style={{ color: "#d49c72" }}>vermek ister misin?</span>
                        </h1>

                        <motion.p
                            className="mt-4 fs-5 text-light opacity-75"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            style={{ lineHeight: "1.8" }}
                        >
                            Her yudumda tazelik, her lokmada lezzet...
                            <br />
                            Sizin için özenle hazırlanmış kahveler, taze pastalar ve atıştırmalıklarla
                            gününüze keyif katın.
                        </motion.p>

                        <motion.div
                            className="mt-5 d-flex gap-3 flex-wrap"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    to="/menu"
                                    className="btn shadow-lg"
                                    style={{
                                        background: "linear-gradient(135deg, #d49c72, #c3864f)",
                                        color: "#1e1b18",
                                        padding: "14px 32px",
                                        borderRadius: "14px",
                                        fontWeight: "600",
                                        border: "none",
                                        fontSize: "1.05rem",
                                    }}
                                >
                                    Menüyü Keşfet
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    to="/gallery"
                                    className="btn btn-outline-light shadow"
                                    style={{
                                        padding: "14px 32px",
                                        borderRadius: "14px",
                                        fontWeight: "600",
                                        borderWidth: "2px",
                                        fontSize: "1.05rem",
                                    }}
                                >
                                    Galeriyi Gör
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="row text-start mt-5 g-4"
                            initial="hidden"
                            whileInView="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.15 },
                                },
                            }}
                        >
                            {[
                                { icon: "🕐", label: "Açılış", value: "08:00 - 23:00" },
                                { icon: "📍", label: "Konum", value: "Beyoğlu, İstanbul" },
                                { icon: "📞", label: "İletişim", value: "0555 444 33 22" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="col-12 col-sm-4"
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <div
                                        style={{
                                            background: "rgba(212, 156, 114, 0.1)",
                                            padding: "16px",
                                            borderRadius: "12px",
                                            border: "1px solid rgba(212, 156, 114, 0.2)",
                                        }}
                                    >
                                        <div className="fs-3 mb-2">{item.icon}</div>
                                        <div className="small text-light opacity-60 mb-1">{item.label}</div>
                                        <div className="fw-bold text-light">{item.value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="col-12 col-lg-6"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 160 }}
                            className="rounded-4 shadow-lg overflow-hidden"
                            style={{
                                border: "2px solid rgba(212, 156, 114, 0.2)",
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
                                alt="Café Modern - Kahve ve Atmosfer"
                                className="img-fluid"
                                style={{
                                    height: "500px",
                                    width: "100%",
                                    objectFit: "cover",
                                    filter: "brightness(0.9) contrast(1.1)",
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container py-5 my-5">
                <motion.h2
                    className="text-center fw-bold mb-5"
                    style={{ color: "#d49c72", fontSize: "2.5rem" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Neden Café Modern?
                </motion.h2>

                <div className="row g-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="col-12 col-sm-6 col-lg-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <motion.div
                                className="text-center p-4 h-100"
                                style={{
                                    background: "rgba(212, 156, 114, 0.08)",
                                    borderRadius: "16px",
                                    border: "1px solid rgba(212, 156, 114, 0.15)",
                                    backdropFilter: "blur(10px)",
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    background: "rgba(212, 156, 114, 0.12)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="fs-1 mb-3">{feature.icon}</div>
                                <h5 className="fw-bold mb-3" style={{ color: "#f5e9dd" }}>
                                    {feature.title}
                                </h5>
                                <p className="text-light opacity-75 small">
                                    {feature.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="container-fluid py-5 my-5"
                style={{
                    background: "rgba(212, 156, 114, 0.1)",
                    borderTop: "1px solid rgba(212, 156, 114, 0.2)",
                    borderBottom: "1px solid rgba(212, 156, 114, 0.2)",
                }}
            >
                <div className="container text-center">
                    <motion.h3
                        className="fw-bold mb-4"
                        style={{ color: "#f5e9dd", fontSize: "2rem" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Sizi Ağırlamaktan Mutluluk Duyarız
                    </motion.h3>
                    <motion.p
                        className="text-light opacity-75 mb-4 fs-5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Beyoğlu'nun kalbinde, sizin için her gün açığız
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            to="/contact"
                            className="btn btn-lg shadow-lg"
                            style={{
                                background: "linear-gradient(135deg, #d49c72, #c3864f)",
                                color: "#1e1b18",
                                padding: "14px 40px",
                                borderRadius: "14px",
                                fontWeight: "600",
                                border: "none",
                            }}
                        >
                            İletişime Geç
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}