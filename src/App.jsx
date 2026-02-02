// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import Contact from "./pages/Contact";
// import Gallery from "./pages/Gallery";

// import "./styles/global.css";

// export default function App() {
//   return (
//     <div className="app-wrapper">
//       <Header />

//       <main className="main-content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>

//       <footer className="cafe-footer">
//         <div className="footer-content">
//           <div className="footer-brand">
//             <h3>Café Noir</h3>
//             <p>İstanbul'un kalbinde, 1987'den beri</p>
//           </div>

//           <div className="footer-info">
//             <div className="footer-section">
//               <h4>İletişim</h4>
//               <p>📍 Asmalı Mescit Mahallesi</p>
//               <p>Beyoğlu, İstanbul</p>
//               <p>📞 0212 245 67 89</p>
//             </div>

//             <div className="footer-section">
//               <h4>Çalışma Saatleri</h4>
//               <p>Pazartesi - Cuma: 08:00 - 23:00</p>
//               <p>Cumartesi: 09:00 - 00:00</p>
//               <p>Pazar: 10:00 - 22:00</p>
//             </div>

//             <div className="footer-section">
//               <h4>Bizi Takip Edin</h4>
//               <div className="social-links">
//                 <a href="#">@cafenoir</a>
//                 <a href="#">Facebook</a>
//                 <a href="#">Twitter</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           © {new Date().getFullYear()} Café Noir. Tüm hakları saklıdır.
//         </div>
//       </footer>
//     </div>
//   );
// }



import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
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
      <Header />

      <main
        style={{
          flex: 1,
          paddingTop: "80px",
          paddingLeft: "12px",
          paddingRight: "12px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "24px 0",
          marginTop: "60px",
          background: "rgba(35, 30, 28, 0.65)",
          backdropFilter: "blur(8px)",
          borderTop: "1px solid rgba(255, 215, 180, 0.15)",
          color: "#cbb8a1",
          fontSize: "0.95rem",
        }}
      >
        <div className="container">
          <p className="mb-2">© {new Date().getFullYear()} Café Modern — Beyoğlu, İstanbul</p>
          <p className="small mb-0 opacity-75">Her yudumda tazelik, her lokmada lezzet...</p>
        </div>
      </footer>
    </div>
  );
}