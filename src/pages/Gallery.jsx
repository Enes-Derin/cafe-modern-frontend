// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchGallery } from "../redux/slice/gallerySlice";
// import { motion, AnimatePresence } from "framer-motion";

// import "../styles/gallery.css";

// const BASE_URL = import.meta.env.VITE_API_URL;

// export default function Gallery() {
//     const dispatch = useDispatch();
//     const gallery = useSelector((state) => state.gallery.items);
//     const loading = useSelector((state) => state.gallery.loading);

//     const [selectedImage, setSelectedImage] = useState(null);

//     useEffect(() => {
//         dispatch(fetchGallery());
//     }, [dispatch]);

//     return (
//         <div className="container py-4">

//             <motion.h1
//                 className="fw-bold text-center my-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 style={{
//                     color: "#d4b089",
//                     letterSpacing: "1px",
//                     textShadow: "0 2px 10px rgba(0,0,0,0.25)",
//                 }}
//             >
//                 Galeri
//             </motion.h1>

//             {loading && <p className="text-center text-light">Yükleniyor...</p>}

//             <div className="row g-4">
//                 {gallery.map((img) => (
//                     <motion.div
//                         key={img.id}
//                         className="col-12 col-sm-6 col-md-4"
//                         initial={{ opacity: 0, scale: 0.93 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.25 }}
//                     >
//                         <div
//                             className="gallery-card"
//                             onClick={() => setSelectedImage(`${img.imageUrl}`)}
//                         >
//                             <img
//                                 src={`${img.imageUrl}`}
//                                 className="gallery-img"
//                                 alt="Gallery"
//                             />
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* LIGHTBOX */}
//             <AnimatePresence>
//                 {selectedImage && (
//                     <motion.div
//                         className="lightbox"
//                         onClick={() => setSelectedImage(null)}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                     >
//                         <motion.img
//                             src={selectedImage}
//                             className="lightbox-img"
//                             initial={{ scale: 0.85, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             exit={{ scale: 0.85, opacity: 0 }}
//                             transition={{ type: "spring", stiffness: 160, damping: 18 }}
//                         />
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// }



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/gallery.css";

// 24+ Galeri görseli
const galleryImages = [
    { id: 1, imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80", title: "Kahve Hazırlığı", category: "Ürünler" },
    { id: 2, imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80", title: "Latte Art", category: "Ürünler" },
    { id: 3, imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80", title: "Cafe İç Mekan", category: "Mekan" },
    { id: 4, imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80", title: "Kahve Çekim", category: "Ürünler" },
    { id: 5, imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80", title: "Özel Kahve", category: "Ürünler" },
    { id: 6, imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80", title: "Kahvaltı Masası", category: "Yemek" },
    { id: 7, imageUrl: "https://images.unsplash.com/photo-1559496417-e7f25cb247f6?auto=format&fit=crop&w=1200&q=80", title: "Filtre Kahve", category: "Ürünler" },
    { id: 8, imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80", title: "Çalışma Alanı", category: "Mekan" },
    { id: 9, imageUrl: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80", title: "Cafe Atmosferi", category: "Mekan" },
    { id: 10, imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1200&q=80", title: "Frappuccino", category: "Ürünler" },
    { id: 11, imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80", title: "Cheesecake", category: "Tatlı" },
    { id: 12, imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=80", title: "Tiramisu", category: "Tatlı" },
    { id: 13, imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80", title: "Pancake", category: "Yemek" },
    { id: 14, imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80", title: "Kahvaltı", category: "Yemek" },
    { id: 15, imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=80", title: "Özel İçecekler", category: "Ürünler" },
    { id: 16, imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80", title: "Espresso", category: "Ürünler" },
    { id: 17, imageUrl: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=1200&q=80", title: "Ice Coffee", category: "Ürünler" },
    { id: 18, imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80", title: "Latte Art Kalp", category: "Ürünler" },
    { id: 19, imageUrl: "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1200&q=80", title: "Cafe Bar", category: "Mekan" },
    { id: 20, imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80", title: "Espresso Makinesi", category: "Mekan" },
    { id: 21, imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1200&q=80", title: "Brownie", category: "Tatlı" },
    { id: 22, imageUrl: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=1200&q=80", title: "Croissant", category: "Yemek" },
    { id: 23, imageUrl: "https://images.unsplash.com/photo-1536013000775-5f3e48f82d42?auto=format&fit=crop&w=1200&q=80", title: "Matcha Latte", category: "Ürünler" },
    { id: 24, imageUrl: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=1200&q=80", title: "Cold Brew", category: "Ürünler" }
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState("all");

    const categories = ["all", "Ürünler", "Mekan", "Yemek", "Tatlı"];
    const filteredImages = filter === "all" ? galleryImages : galleryImages.filter(img => img.category === filter);

    return (
        <div className="container py-4">
            <motion.div className="text-center mb-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <motion.span style={{ color: "#d49c72", fontSize: "1rem", fontWeight: "600", letterSpacing: "2px" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>GÖRSEL GALERİ</motion.span>
                <h1 className="fw-bold mt-2 mb-3" style={{ fontSize: "3rem" }}>Galeri</h1>
                <p className="text-light opacity-75 fs-5 mx-auto" style={{ maxWidth: "600px" }}>Café Modern'in samimi atmosferini ve lezzetli sunumlarını keşfedin</p>
            </motion.div>

            <motion.div className="d-flex justify-content-center gap-2 mb-4 flex-wrap" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                {categories.map((cat) => (
                    <motion.button key={cat} onClick={() => setFilter(cat)} className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline-secondary'}`}
                        style={{ borderRadius: "10px", padding: "8px 20px", background: filter === cat ? "linear-gradient(135deg, #d49c72, #c3864f)" : "transparent", borderColor: "#d49c72", color: filter === cat ? "#1e1b18" : "#d49c72", fontWeight: "600" }}
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        {cat === "all" ? "Tümü" : cat}
                    </motion.button>
                ))}
            </motion.div>

            <motion.div className="text-center mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <p className="text-light opacity-50 small">{filteredImages.length} fotoğraf gösteriliyor</p>
            </motion.div>

            <div className="row g-4">
                <AnimatePresence mode="wait">
                    {filteredImages.map((img, index) => (
                        <motion.div key={img.id} className="col-12 col-sm-6 col-md-4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3, delay: index * 0.03 }} layout>
                            <div className="gallery-card" onClick={() => setSelectedImage(img)}>
                                <img src={img.imageUrl} className="gallery-img" alt={img.title} />
                                <div className="gallery-overlay" style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)", padding: "20px 16px 16px", opacity: 0, transition: "opacity 0.3s ease" }}>
                                    <h6 className="text-white fw-bold mb-1">{img.title}</h6>
                                    <p className="text-white opacity-75 small mb-0">{img.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div className="lightbox" onClick={() => setSelectedImage(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="lightbox-content" onClick={(e) => e.stopPropagation()} initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }} transition={{ type: "spring", stiffness: 160, damping: 18 }}>
                            <button onClick={() => setSelectedImage(null)} style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.2)", border: "none", borderRadius: "50%", width: "40px", height: "40px", color: "white", fontSize: "20px", cursor: "pointer", backdropFilter: "blur(10px)", zIndex: 10 }}>×</button>
                            <img src={selectedImage.imageUrl} className="lightbox-img" alt={selectedImage.title} />
                            <div style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.7)", padding: "12px 24px", borderRadius: "10px", backdropFilter: "blur(10px)" }}>
                                <h5 className="text-white mb-1">{selectedImage.title}</h5>
                                <p className="text-white opacity-75 small mb-0">{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}