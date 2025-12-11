import React from "react";
import { motion } from "framer-motion";
import "../styles/contact.css";

export default function Contact() {
    return (
        <div className="container py-5">

            <motion.h1
                className="fw-bold text-center mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                style={{
                    color: "#d4b089",
                    letterSpacing: "1px",
                    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
            >
                İletişim
            </motion.h1>

            <div className="row g-4 align-items-stretch">

                <motion.div
                    className="col-md-5"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55 }}
                >
                    <div className="contact-card glass-card-dark p-4 rounded-4 h-100">
                        <h4 className="fw-bold mb-4 text-light">Bize Ulaşın</h4>

                        <div className="info-item mb-3">
                            <i className="bi bi-geo-alt-fill info-icon"></i>
                            <span>Beyoğlu, İstanbul</span>
                        </div>

                        <div className="info-item mb-3">
                            <i className="bi bi-telephone-fill info-icon"></i>
                            <span>0555 444 33 22</span>
                        </div>

                        <div className="info-item mb-3">
                            <i className="bi bi-envelope-fill info-icon"></i>
                            <span>info@cafemodern.com</span>
                        </div>

                        <hr className="divider-line" />

                        <p className="text-muted small mb-1">Çalışma Saatleri</p>
                        <h5 className="fw-semibold text-light">08:00 – 23:00</h5>
                    </div>
                </motion.div>

                <motion.div
                    className="col-md-7"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55 }}
                >
                    <motion.div
                        className="map-wrapper rounded-4 overflow-hidden shadow-map"
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 120 }}
                    >
                        <iframe
                            title="map"
                            src="https://maps.google.com/maps?q=beyoğlu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="420"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
}
