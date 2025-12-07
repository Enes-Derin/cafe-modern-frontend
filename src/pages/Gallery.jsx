import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGallery } from "../redux/slice/gallerySlice";
import { motion, AnimatePresence } from "framer-motion";

import "../styles/gallery.css";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export default function Gallery() {
    const dispatch = useDispatch();
    const gallery = useSelector((state) => state.gallery.items);
    const loading = useSelector((state) => state.gallery.loading);

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        dispatch(fetchGallery());
    }, [dispatch]);

    return (
        <div className="container py-4">

            {/* TITLE */}
            <motion.h1
                className="fw-bold text-center my-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    color: "#d4b089",
                    letterSpacing: "1px",
                    textShadow: "0 2px 10px rgba(0,0,0,0.25)",
                }}
            >
                Galeri
            </motion.h1>

            {loading && <p className="text-center text-light">Yükleniyor...</p>}

            {/* IMAGE GRID */}
            <div className="row g-4">
                {gallery.map((img) => (
                    <motion.div
                        key={img.id}
                        className="col-12 col-sm-6 col-md-4"
                        initial={{ opacity: 0, scale: 0.93 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div
                            className="gallery-card"
                            onClick={() => setSelectedImage(`${BASE_URL}${img.imageUrl}`)}
                        >
                            <img
                                src={`${BASE_URL}${img.imageUrl}`}
                                className="gallery-img"
                                alt="Gallery"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox"
                        onClick={() => setSelectedImage(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.img
                            src={selectedImage}
                            className="lightbox-img"
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 160, damping: 18 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
