import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const token = localStorage.getItem("accessToken");
    const role = localStorage.getItem("role");

    if (!token) return <Navigate to="/admin/login" replace />;

    if (role !== "ADMIN") return <Navigate to="/403" replace />;

    return children;
}
