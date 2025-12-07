import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
    Menu,
    X,
    LayoutGrid,
    Images,
    UtensilsCrossed,
} from "lucide-react";
import "../../styles/dashboard.css";

export default function Dashboard() {
    const location = useLocation();
    const [open, setOpen] = useState(true);

    const navItems = [
        { to: "/admin/categories", label: "Kategoriler", icon: <LayoutGrid size={18} /> },
        { to: "/admin/menu", label: "Menü", icon: <UtensilsCrossed size={18} /> },
        { to: "/admin/gallery", label: "Galeri", icon: <Images size={18} /> },
    ];

    return (
        <div className="admin-layout">

            {/* SIDEBAR */}
            <aside className={`sidebar ${open ? "open" : "closed"}`}>
                <div className="sidebar-header">
                    <h1 className="logo">{open ? "Admin Panel" : "AP"}</h1>
                    <button className="toggle-btn" onClick={() => setOpen(!open)}>
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="sidebar-menu">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={
                                location.pathname.includes(item.to.split("/")[2])
                                    ? "menu-item active"
                                    : "menu-item"
                            }
                        >
                            {item.icon}
                            {open && <span>{item.label}</span>}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* MAIN AREA */}
            <div className="main">
                <header className="topbar">
                    <p className="welcome">Hoş geldin 👋 Enes</p>
                </header>

                <main className="content">
                    <Outlet />
                </main>
            </div>

        </div>
    );
}
