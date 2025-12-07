import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

import ProtectedRoute from "./pages/admin/ProtectedRoute";
import Dashboard from "./pages/admin/Dashboard";
import CategoryEditor from "./pages/admin/CategoryEditor";
import MenuEditor from "./pages/admin/MenuEditor";
import GalleryEditor from "./pages/admin/GalleryEditor";
import Login from "./pages/admin/Login";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e1b18, #2d2423)",
        color: "#e8e0d9",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main
        style={{
          flex: 1,
          paddingTop: "20px",
          paddingLeft: "12px",
          paddingRight: "12px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* ADMIN */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="categories" element={<CategoryEditor />} />
            <Route path="menu" element={<MenuEditor />} />
            <Route path="gallery" element={<GalleryEditor />} />
          </Route>

          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </main>

      {/* FOOTER (Responsive & Modern) */}
      <footer
        style={{
          textAlign: "center",
          padding: "16px 0",
          marginTop: "40px",
          background: "rgba(35, 30, 28, 0.55)",
          backdropFilter: "blur(6px)",
          borderTop: "1px solid rgba(255, 215, 180, 0.12)",
          color: "#cbb8a1",
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} Café Modern — Beyoğlu
      </footer>
    </div>
  );
}
