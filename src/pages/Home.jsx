import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <section
            className="container-fluid py-5 px-3 px-md-5 d-flex align-items-center"
            style={{
                minHeight: "90vh",
                color: "#f5e9dd",
            }}
        > <div className="row w-100 align-items-center">

                <motion.div
                    className="col-12 col-lg-6 mb-5 mb-lg-0"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1
                        className="fw-bold display-4 text-start"
                        style={{ lineHeight: "1.25" }}
                    >
                        Merhaba. Tatlı bir mola
                        <br />
                        <span style={{ color: "#d49c72" }}>vermek ister misin?</span>
                    </h1>

                    <motion.p
                        className="mt-3 text-light opacity-75"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Her yudumda tazelik...
                        Sizin için özenle hazırlanmış kahveler ve atıştırmalıklar.
                    </motion.p>

                    <motion.div
                        className="mt-4 d-flex gap-3 flex-wrap"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.div whileHover={{ scale: 1.06 }}>
                            <Link
                                to="/menu"
                                className="btn shadow"
                                style={{
                                    background: "#d49c72",
                                    color: "#1e1b18",
                                    padding: "12px 26px",
                                    borderRadius: "14px",
                                    fontWeight: "600",
                                }}
                            >
                                Menüyü Gör
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.06 }}>
                            <Link
                                to="/gallery"
                                className="btn btn-outline-light"
                                style={{
                                    padding: "12px 26px",
                                    borderRadius: "14px",
                                    fontWeight: "600",
                                }}
                            >
                                Galeri
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="row text-center mt-5 g-3"
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
                            { label: "Açılış", value: "08:00" },
                            { label: "Adres", value: "Beyoğlu" },
                            { label: "Rezervasyon", value: "Telefon" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="col-4"
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <div className="small text-light opacity-50">{item.label}</div>
                                <div className="fw-bold text-light">{item.value}</div>
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
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 160 }}
                        className="rounded-4 shadow-lg overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=60"
                            alt="coffee"
                            className="img-fluid"
                            style={{
                                height: "420px",
                                width: "100%",
                                objectFit: "cover",
                                filter: "brightness(0.88)",
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
