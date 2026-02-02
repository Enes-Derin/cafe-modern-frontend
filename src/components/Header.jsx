// import { Link, useLocation } from "react-router-dom";
// import "./header.css";

// function Navbar() {
//     const { pathname } = useLocation();


//     return (
//         <nav
//             className="navbar navbar-expand-md fixed-top shadow-sm"
//             style={{
//                 background: "rgba(20, 18, 17, 0.85)",
//                 backdropFilter: "blur(12px)",
//                 borderBottom: "1px solid rgba(255,255,255,0.06)",
//             }}
//         >
//             <div className="container">

//                 <Link
//                     className="navbar-brand fw-bold"
//                     to="/"
//                     style={{ color: "#f5e9dd", letterSpacing: "1px" }}
//                 >
//                     Café Modern
//                 </Link>

//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#mainNavbar"
//                     style={{ border: "none" }}
//                 >
//                     <span
//                         className="navbar-toggler-icon"
//                         style={{ filter: "invert(1)" }}
//                     ></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="mainNavbar">
//                     <ul className="navbar-nav ms-auto gap-2">

//                         {[
//                             { to: "/", label: "Anasayfa" },
//                             { to: "/menu", label: "Menü" },
//                             { to: "/gallery", label: "Galeri" },
//                             { to: "/contact", label: "İletişim" },
//                         ].map((item) => (
//                             <li key={item.to} className="nav-item">
//                                 <Link
//                                     to={item.to}
//                                     className={`nav - link px - 3 ${pathname === item.to ? "active-link" : ""
//                                         } `}
//                                     style={{
//                                         color: "#f5e9dd",
//                                         fontWeight: "500",
//                                     }}
//                                 >
//                                     {item.label}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//             </div>
//         </nav>
//     );


// }

// export default Navbar;




import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
    const { pathname } = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-md fixed-top shadow-sm ${scrolled ? "scrolled" : ""}`}
            style={{
                background: scrolled
                    ? "rgba(20, 18, 17, 0.95)"
                    : "rgba(20, 18, 17, 0.85)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.3s ease",
            }}
        >
            <div className="container">
                <Link
                    className="navbar-brand fw-bold d-flex align-items-center"
                    to="/"
                    style={{
                        color: "#f5e9dd",
                        letterSpacing: "1.2px",
                        fontSize: "1.5rem"
                    }}
                >
                    <span style={{ color: "#d49c72", marginRight: "8px" }}>☕</span>
                    Café Modern
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    style={{ border: "none" }}
                >
                    <span
                        className="navbar-toggler-icon"
                        style={{ filter: "invert(1)" }}
                    ></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto gap-2">
                        {[
                            { to: "/", label: "Anasayfa" },
                            { to: "/menu", label: "Menü" },
                            { to: "/gallery", label: "Galeri" },
                            { to: "/contact", label: "İletişim" },
                        ].map((item) => (
                            <li key={item.to} className="nav-item">
                                <Link
                                    to={item.to}
                                    className={`nav-link px-3 ${pathname === item.to ? "active-link" : ""
                                        }`}
                                    style={{
                                        color: "#f5e9dd",
                                        fontWeight: "500",
                                    }}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;