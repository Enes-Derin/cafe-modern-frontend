import { Link, useLocation } from "react-router-dom";
import "./header.css";

function Navbar() {
    const { pathname } = useLocation();


    return (
        <nav
            className="navbar navbar-expand-md fixed-top shadow-sm"
            style={{
                background: "rgba(20, 18, 17, 0.85)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
        >
            <div className="container">

                <Link
                    className="navbar-brand fw-bold"
                    to="/"
                    style={{ color: "#f5e9dd", letterSpacing: "1px" }}
                >
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
                                    className={`nav - link px - 3 ${pathname === item.to ? "active-link" : ""
                                        } `}
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

export default Navbar;
