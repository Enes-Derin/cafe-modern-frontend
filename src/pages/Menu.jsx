// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCategories } from "../redux/slice/categorySlice";
// import { fetchMenuItemsByCategory } from "../redux/slice/menuItemSlice";
// import { motion, AnimatePresence } from "framer-motion";
// import "../styles/menu.css";

// const BASE_URL = import.meta.env.VITE_API_URL

// function Menu() {
//     const dispatch = useDispatch();


//     const categories = useSelector((state) => state.category.items);
//     const menuItems = useSelector((state) => state.menuItem.items);

//     const loadingCategories = useSelector((state) => state.category.loading);
//     const loadingMenuItems = useSelector((state) => state.menuItem.loading);

//     const [selectedCategory, setSelectedCategory] = useState(null);

//     useEffect(() => {
//         dispatch(fetchCategories());
//     }, [dispatch]);

//     useEffect(() => {
//         if (selectedCategory) {
//             dispatch(fetchMenuItemsByCategory(selectedCategory));
//         }
//     }, [selectedCategory, dispatch]);

//     const fadeUp = {
//         initial: { opacity: 0, y: 20 },
//         animate: { opacity: 1, y: 0 },
//     };

//     const staggerWrapper = {
//         animate: { transition: { staggerChildren: 0.08 } },
//     };

//     const categoryAnim = {
//         initial: { opacity: 0, scale: 0.9 },
//         animate: { opacity: 1, scale: 1 },
//     };

//     return (
//         <div className="container py-5">

//             <motion.h1
//                 className="text-center mb-5 fw-bold"
//                 {...fadeUp}
//                 transition={{ duration: 0.4 }}
//             >
//                 Menü
//             </motion.h1>

//             {!selectedCategory && !loadingCategories && (
//                 <motion.div
//                     className="row g-4 justify-content-center"
//                     variants={staggerWrapper}
//                     initial="initial"
//                     animate="animate"
//                 >
//                     {categories.map((cat) => (
//                         <motion.div
//                             key={cat.id}
//                             variants={categoryAnim}
//                             className="col-6 col-md-4 col-lg-3 d-flex"
//                         >
//                             <div
//                                 onClick={() => setSelectedCategory(cat.id)}
//                                 className="category-card p-3 w-100 text-center"
//                                 style={{
//                                     cursor: "pointer",
//                                     borderRadius: 14,
//                                     boxShadow: "0 4px 14px rgba(0,0,0,0.07)",
//                                     background: "#fff",
//                                 }}
//                             >
//                                 {cat.imageUrl && (
//                                     <div
//                                         className="category-img-wrapper mb-3"
//                                         style={{
//                                             height: 130,
//                                             overflow: "hidden",
//                                             borderRadius: 12,
//                                         }}
//                                     >
//                                         <img
//                                             src={`${cat.imageUrl}`}
//                                             alt={cat.name}
//                                             style={{
//                                                 width: "100%",
//                                                 height: "100%",
//                                                 objectFit: "cover",
//                                             }}
//                                         />
//                                     </div>
//                                 )}

//                                 <h5 className="fw-semibold">{cat.name}</h5>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             )}

//             {selectedCategory && (
//                 <motion.button
//                     className="btn btn-outline-secondary mb-4 btn-pulse"
//                     onClick={() => setSelectedCategory(null)}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                 >
//                     ← Kategorilere Dön
//                 </motion.button>
//             )}

//             <AnimatePresence>
//                 {selectedCategory && !loadingMenuItems && (
//                     <motion.div
//                         className="row g-4"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                     >
//                         {menuItems.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="col-12 col-sm-6 col-lg-4 d-flex"
//                             >
//                                 <div
//                                     className="product-card p-3 w-100"
//                                     style={{
//                                         borderRadius: 14,
//                                         boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
//                                         background: "#fff",
//                                     }}
//                                 >
//                                     {item.imageUrl && (
//                                         <div
//                                             className="img-wrapper mb-3"
//                                             style={{
//                                                 height: 180,
//                                                 overflow: "hidden",
//                                                 borderRadius: 12,
//                                             }}
//                                         >
//                                             <img
//                                                 src={`${item.imageUrl}`}
//                                                 alt={item.name}
//                                                 style={{
//                                                     width: "100%",
//                                                     height: "100%",
//                                                     objectFit: "cover",
//                                                 }}
//                                             />
//                                         </div>
//                                     )}

//                                     <h5 className="fw-bold">{item.name}</h5>
//                                     <p className="small mb-2"
//                                     >
//                                         {item.description}
//                                     </p>
//                                     <span className="fw-bold fs-5">
//                                         ₺{item.price}
//                                     </span>
//                                 </div>
//                             </div>
//                         ))}
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );


// }

// export default Menu;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/menu.css";

// Gerçek kafe menüsü - Zengin içerik
const menuData = {
    categories: [
        {
            id: 1,
            name: "Sıcak Kahveler",
            icon: "",
            imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            name: "Soğuk Kahveler",
            icon: "",
            imageUrl: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            name: "Özel İçecekler",
            icon: "",
            imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            name: "Tatlılar",
            icon: "",
            imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            name: "Kahvaltı",
            icon: "",
            imageUrl: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            name: "Atıştırmalıklar",
            icon: "",
            imageUrl: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=800&q=80"
        }
    ],
    items: {
        1: [ // Sıcak Kahveler
            {
                id: 101,
                name: "Espresso",
                description: "Klasik İtalyan kahvesi, yoğun ve aromatik",
                price: "45",
                imageUrl: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 102,
                name: "Americano",
                description: "Espresso ve sıcak su karışımı, hafif ve dengeli",
                price: "50",
                imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 103,
                name: "Cappuccino",
                description: "Espresso, süt ve süt köpüğünün mükemmel uyumu",
                price: "60",
                imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 104,
                name: "Latte",
                description: "Yumuşak süt ve espresso, kremalı doku",
                price: "65",
                imageUrl: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 105,
                name: "Flat White",
                description: "Kadifemsi mikro köpük ve çift shot espresso",
                price: "70",
                imageUrl: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9e?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 106,
                name: "Mocha",
                description: "Espresso, çikolata sosu ve süt köpüğü",
                price: "75",
                imageUrl: "https://images.unsplash.com/photo-1607681034540-2c46cc71896d?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 107,
                name: "Türk Kahvesi",
                description: "Geleneksel yöntemle pişirilmiş, yoğun aromalı",
                price: "40",
                imageUrl: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 108,
                name: "Filtre Kahve",
                description: "El yapımı filtre kahve, özel çekirdeklerle",
                price: "55",
                imageUrl: "https://images.unsplash.com/photo-1559496417-e7f25cb247f6?auto=format&fit=crop&w=600&q=80"
            }
        ],
        2: [ // Soğuk Kahveler
            {
                id: 201,
                name: "Ice Americano",
                description: "Buzlu americano, serinletici ve ferahlatıcı",
                price: "55",
                imageUrl: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 202,
                name: "Ice Latte",
                description: "Soğuk süt ve espresso, kremalı buzlu lezzet",
                price: "70",
                imageUrl: "https://images.unsplash.com/photo-1578374173705-0ec98d1d2d8c?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 203,
                name: "Ice Mocha",
                description: "Soğuk çikolatalı kahve, tatlı ve ferahlatıcı",
                price: "75",
                imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 204,
                name: "Cold Brew",
                description: "12 saat soğuk demleme, yumuşak ve aromatik",
                price: "80",
                imageUrl: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 205,
                name: "Frappuccino",
                description: "Buzlu kahve shake, kremşanti ile",
                price: "85",
                imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 206,
                name: "Affogato",
                description: "Vanilyalı dondurma üzerine sıcak espresso",
                price: "70",
                imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
            }
        ],
        3: [ // Özel İçecekler
            {
                id: 301,
                name: "Chai Latte",
                description: "Baharatlı çay ve süt köpüğü",
                price: "65",
                imageUrl: "https://images.unsplash.com/photo-1578899952107-9d0d3a1b4ab4?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 302,
                name: "Matcha Latte",
                description: "Japon yeşil çayı ve süt, antioksidan deposu",
                price: "70",
                imageUrl: "https://images.unsplash.com/photo-1536013000775-5f3e48f82d42?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 303,
                name: "Sıcak Çikolata",
                description: "Belçika çikolatası ile özel tarif",
                price: "60",
                imageUrl: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 304,
                name: "Taze Sıkılmış Portakal Suyu",
                description: "100% doğal, taze portakallardan",
                price: "50",
                imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 305,
                name: "Limonata",
                description: "Ev yapımı limonata, naneli ve serinletici",
                price: "45",
                imageUrl: "https://images.unsplash.com/photo-1523677011781-c91d1bbe1c98?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 306,
                name: "Smoothie Bowl",
                description: "Mevsim meyveleri ile hazırlanan smoothie",
                price: "75",
                imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80"
            }
        ],
        4: [ // Tatlılar
            {
                id: 401,
                name: "Cheesecake",
                description: "Orman meyveli, ev yapımı cheesecake",
                price: "80",
                imageUrl: "https://images.unsplash.com/photo-1533134242-3ba46b0e8d11?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 402,
                name: "Tiramisu",
                description: "Klasik İtalyan tatlısı, kahve ve mascarpone",
                price: "85",
                imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 403,
                name: "Brownie",
                description: "Çikolatalı brownie, vanilyalı dondurma ile",
                price: "70",
                imageUrl: "https://images.unsplash.com/photo-1606313564559-fd13f3c8c3ad?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 404,
                name: "Profiterol",
                description: "Kremalı profiterol, sıcak çikolata soslu",
                price: "75",
                imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 405,
                name: "San Sebastian",
                description: "Yanık cheesecake, özel tarifimiz",
                price: "80",
                imageUrl: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 406,
                name: "Cookie",
                description: "Taze çikolatalı kurabiye, sıcak servis",
                price: "50",
                imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
            }
        ],
        5: [ // Kahvaltı
            {
                id: 501,
                name: "Serpme Kahvaltı",
                description: "Peynir, zeytin, salam, yumurta, reçel, bal ve daha fazlası",
                price: "150",
                imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 502,
                name: "Omlet Tabağı",
                description: "Sebzeli omlet, taze salata ve ekmek",
                price: "85",
                imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 503,
                name: "Menemen",
                description: "Geleneksel menemen, sucuklu veya sucuksuz",
                price: "75",
                imageUrl: "https://images.unsplash.com/photo-1525256012203-78e46b3a4f4e?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 504,
                name: "Pancake",
                description: "Özel soslu pancake, meyve ve akçaağaç şurubu",
                price: "90",
                imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 505,
                name: "Avokado Toast",
                description: "Tam tahıllı ekmek, ezme avokado, poşe yumurta",
                price: "95",
                imageUrl: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 506,
                name: "Croissant Tabağı",
                description: "Sade veya çikolatalı croissant, reçel ve tereyağı",
                price: "65",
                imageUrl: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=600&q=80"
            }
        ],
        6: [ // Atıştırmalıklar
            {
                id: 601,
                name: "Club Sandwich",
                description: "Tavuk, marul, domates, cheddar peyniri",
                price: "95",
                imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 602,
                name: "Tost",
                description: "Beyaz peynir ve kaşar karışımı, ızgara tost",
                price: "60",
                imageUrl: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 603,
                name: "Caesar Salad",
                description: "Tavuklu sezar salatası, kruton ve parmesan",
                price: "90",
                imageUrl: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 604,
                name: "Waffle",
                description: "Taze waffle, çikolata sosu ve meyve",
                price: "80",
                imageUrl: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 605,
                name: "Krep",
                description: "Nutella, muz veya çilekli krep",
                price: "75",
                imageUrl: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 606,
                name: "Patates Kızartması",
                description: "Çıtır patates kızartması, soslarla",
                price: "50",
                imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
            }
        ]
    }
};

function Menu() {
    const [selectedCategory, setSelectedCategory] = useState(null);

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

    const selectedCategoryData = menuData.categories.find(
        cat => cat.id === selectedCategory
    );

    return (
        <div className="container py-5">
            <motion.div
                className="text-center mb-5"
                {...fadeUp}
                transition={{ duration: 0.4 }}
            >
                <motion.span
                    style={{
                        color: "#d49c72",
                        fontSize: "1rem",
                        fontWeight: "600",
                        letterSpacing: "2px",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    LEZZET DENEYİMİ
                </motion.span>
                <h1 className="fw-bold mt-2 mb-3" style={{ fontSize: "3rem" }}>
                    Menümüz
                </h1>
                <p className="text-light opacity-75 fs-5 mx-auto" style={{ maxWidth: "600px" }}>
                    Özenle seçilmiş malzemelerden hazırlanan lezzetlerimizi keşfedin
                </p>
            </motion.div>

            {!selectedCategory && (
                <motion.div
                    className="row g-4 justify-content-center"
                    variants={staggerWrapper}
                    initial="initial"
                    animate="animate"
                >
                    {menuData.categories.map((cat) => (
                        <motion.div
                            key={cat.id}
                            variants={categoryAnim}
                            className="col-6 col-md-4 col-lg-4 d-flex"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div
                                onClick={() => setSelectedCategory(cat.id)}
                                className="category-card p-4 w-100 text-center"
                                style={{
                                    cursor: "pointer",
                                    borderRadius: 16,
                                }}
                            >
                                <div
                                    className="category-img-wrapper mb-3"
                                    style={{
                                        height: 180,
                                        overflow: "hidden",
                                        borderRadius: 14,
                                    }}
                                >
                                    <img
                                        src={cat.imageUrl}
                                        alt={cat.name}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>

                                <div className="fs-2 mb-2">{cat.icon}</div>
                                <h5 className="fw-bold">{cat.name}</h5>
                                <p className="small opacity-75 mb-0">
                                    {menuData.items[cat.id].length} ürün
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}

            {selectedCategory && (
                <>
                    <motion.div
                        className="mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <button
                            className="btn btn-outline-secondary btn-pulse"
                            onClick={() => setSelectedCategory(null)}
                        >
                            ← Kategorilere Dön
                        </button>

                        {selectedCategoryData && (
                            <h3 className="fw-bold mb-0" style={{ color: "#d49c72" }}>
                                {selectedCategoryData.icon} {selectedCategoryData.name}
                            </h3>
                        )}
                    </motion.div>

                    <AnimatePresence>
                        <motion.div
                            className="row g-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {menuData.items[selectedCategory]?.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    className="col-12 col-sm-6 col-lg-4 d-flex"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div className="product-card p-3 w-100">
                                        <div
                                            className="img-wrapper mb-3"
                                            style={{
                                                height: 200,
                                                overflow: "hidden",
                                                borderRadius: 12,
                                            }}
                                        >
                                            <img
                                                src={item.imageUrl}
                                                alt={item.name}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>

                                        <h5 className="fw-bold mb-2">{item.name}</h5>
                                        <p className="small mb-3 opacity-75" style={{ minHeight: "45px" }}>
                                            {item.description}
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fw-bold fs-4" style={{ color: "#d49c72" }}>
                                                ₺{item.price}
                                            </span>
                                            <span className="small opacity-50">
                                                Stokta var
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </>
            )}
        </div>
    );
}

export default Menu;