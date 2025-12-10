import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/slice/categorySlice";
import { fetchMenuItemsByCategory } from "../redux/slice/menuItemSlice";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/menu.css";

const BASE_URL = import.meta.env.VITE_API_URL

function Menu() {
    const dispatch = useDispatch();


    const categories = useSelector((state) => state.category.items);
    const menuItems = useSelector((state) => state.menuItem.items);

    const loadingCategories = useSelector((state) => state.category.loading);
    const loadingMenuItems = useSelector((state) => state.menuItem.loading);

    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        if (selectedCategory) {
            dispatch(fetchMenuItemsByCategory(selectedCategory));
        }
    }, [selectedCategory, dispatch]);

    /* ---- Animations ---- */
    const fadeUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    const staggerWrapper = {
        animate: { transition: { staggerChildren: 0.08 } },
    };

    const categoryAnim = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
    };

    return (
        <div className="container py-5">

            {/* PAGE TITLE */}
            <motion.h1
                className="text-center mb-5 fw-bold"
                {...fadeUp}
                transition={{ duration: 0.4 }}
            >
                Menü
            </motion.h1>

            {/* ---- CATEGORY LIST ---- */}
            {!selectedCategory && !loadingCategories && (
                <motion.div
                    className="row g-4 justify-content-center"
                    variants={staggerWrapper}
                    initial="initial"
                    animate="animate"
                >
                    {categories.map((cat) => (
                        <motion.div
                            key={cat.id}
                            variants={categoryAnim}
                            className="col-6 col-md-4 col-lg-3 d-flex"
                        >
                            <div
                                onClick={() => setSelectedCategory(cat.id)}
                                className="category-card p-3 w-100 text-center"
                                style={{
                                    cursor: "pointer",
                                    borderRadius: 14,
                                    boxShadow: "0 4px 14px rgba(0,0,0,0.07)",
                                    background: "#fff",
                                }}
                            >
                                {cat.imageUrl && (
                                    <div
                                        className="category-img-wrapper mb-3"
                                        style={{
                                            height: 130,
                                            overflow: "hidden",
                                            borderRadius: 12,
                                        }}
                                    >
                                        <img
                                            src={`${cat.imageUrl}`}
                                            alt={cat.name}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>
                                )}

                                <h5 className="fw-semibold">{cat.name}</h5>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}

            {/* ---- BACK BUTTON ----- */}
            {selectedCategory && (
                <motion.button
                    className="btn btn-outline-secondary mb-4 btn-pulse"
                    onClick={() => setSelectedCategory(null)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    ← Kategorilere Dön
                </motion.button>
            )}

            {/* ---- MENU ITEMS ---- */}
            <AnimatePresence>
                {selectedCategory && !loadingMenuItems && (
                    <motion.div
                        className="row g-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {menuItems.map((item) => (
                            <div
                                key={item.id}
                                className="col-12 col-sm-6 col-lg-4 d-flex"
                            >
                                <div
                                    className="product-card p-3 w-100"
                                    style={{
                                        borderRadius: 14,
                                        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                                        background: "#fff",
                                    }}
                                >
                                    {item.imageUrl && (
                                        <div
                                            className="img-wrapper mb-3"
                                            style={{
                                                height: 180,
                                                overflow: "hidden",
                                                borderRadius: 12,
                                            }}
                                        >
                                            <img
                                                src={`${item.imageUrl}`}
                                                alt={item.name}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                    )}

                                    <h5 className="fw-bold">{item.name}</h5>
                                    <p className="small mb-2"
                                    >
                                        {item.description}
                                    </p>
                                    <span className="fw-bold fs-5">
                                        ₺{item.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );


}

export default Menu;
