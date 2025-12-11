import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { motion } from "framer-motion";
import "../../styles/login.css";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("role");

        try {
            const res = await axiosInstance.post("/auth/login", {
                username,
                password,
            });

            localStorage.setItem("accessToken", res.data.payload.accessToken);
            localStorage.setItem("refreshToken", res.data.payload.refreshToken);
            localStorage.setItem("role", res.data.payload.role);

            navigate("/admin");
        } catch (err) {
            setError(err.response?.data?.message || "Giriş başarısız");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page d-flex align-items-center justify-content-center">

            <motion.div
                className="login-card glass-card p-4 rounded-4 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-center fw-bold mb-4">Admin Girişi</h2>

                <form onSubmit={handleLogin}>
                    {error && <div className="alert alert-danger">{error}</div>}

                    <div className="mb-3">
                        <label className="form-label">Kullanıcı Adı</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Parola</label>
                        <input
                            type="password"
                            className="form-control custom-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="btn btn-login w-100"
                        disabled={loading}
                    >
                        {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}
