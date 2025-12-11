import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";
export default function Dashboard() {
    const [firstLoad, setFirstLoad] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const handleEnter = (route) => { setFirstLoad(false); setTimeout(() => navigate(route), 400); };
    // İlk ekran
    if (firstLoad) {
        return (
            <div className="dashboard-fullscreen centered-screen">
                <h1 className="dashboard-title">Yönetim Paneli</h1>

                <div className="dashboard-cards centered-cards">
                    <div className="dash-card" onClick={() => handleEnter("/admin/categories")}>
                        <h2>Kategoriler</h2>
                    </div>
                    <div className="dash-card" onClick={() => handleEnter("/admin/menu")}>
                        <h2>Menü</h2>
                    </div>
                    <div className="dash-card" onClick={() => handleEnter("/admin/gallery")}>
                        <h2>Galeri</h2>
                    </div>
                </div>
            </div>
        );
    }
    // Normal Dashboard
    return (
        <div className="dashboard-root"> {
        }
            <nav className="dashboard-navbar">
                <h2 className="navbar-logo">Admin Panel</h2>
                <div className="navbar-links">
                    <Link to="/admin/categories" className={location.pathname.includes("categories") ? "active" : ""} > Kategoriler </Link>
                    <Link to="/admin/menu" className={location.pathname.includes("menu") ? "active" : ""} > Menü </Link>
                    <Link to="/admin/gallery" className={location.pathname.includes("gallery") ? "active" : ""} > Galeri </Link>
                </div>
            </nav>
            <main className="dashboard-content">
                <Outlet />
            </main>
        </div>
    );
}
