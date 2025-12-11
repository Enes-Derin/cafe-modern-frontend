import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCategories
} from "../../redux/slice/categorySlice";
import {
    fetchMenuItemsByCategory,
    addMenuItem,
    deleteMenuItem,
    updateMenuItem
} from "../../redux/slice/menuItemSlice";
import "../../styles/menuEditor.css";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export default function MenuEditor() {
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.category.items);
    const menuItems = useSelector((state) => state.menuItem.items);

    const [selectedCategory, setSelectedCategory] = useState("");
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        if (selectedCategory) dispatch(fetchMenuItemsByCategory(selectedCategory));
    }, [selectedCategory, dispatch]);

    const resetForm = () => {
        setFile(null);
        setName("");
        setDesc("");
        setPrice("");
        setEditId(null);
    };

    const handleAddOrUpdate = () => {
        if (!name || !price || !selectedCategory) return;

        if (editId) {
            dispatch(updateMenuItem({
                id: editId,
                file,
                name,
                description: desc,
                price,
                categoryId: selectedCategory
            }));
        } else {
            if (!file) return;
            dispatch(addMenuItem({
                file,
                name,
                description: desc,
                price,
                categoryId: selectedCategory
            }));
        }

        resetForm();
    };

    const handleDelete = (id) => {
        dispatch(deleteMenuItem(id));
        if (editId === id) resetForm();
    };

    const handleEdit = (item) => {
        setEditId(item.id);
        setName(item.name);
        setDesc(item.description);
        setPrice(item.price);
        setSelectedCategory(item.categoryId);
    };

    return (
        <div className="menu-page">

            <h2 className="menu-title">Menü Yönetimi</h2>

            <div className="menu-row">
                <select
                    className="menu-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Kategori Seç</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="menu-form">
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />

                <input
                    type="text"
                    placeholder="Ad"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Açıklama"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Fiyat"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <button className="btn-primary" onClick={handleAddOrUpdate}>
                    {editId ? "Güncelle" : "Ekle"}
                </button>

                {editId && (
                    <button className="btn-cancel" onClick={resetForm}>İptal</button>
                )}
            </div>

            <div className="menu-grid">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-card">

                        {item.imageUrl && (
                            <div className="menu-img">
                                <img src={`${item.imageUrl}`} alt={item.name} />
                            </div>
                        )}

                        <h3>{item.name}</h3>
                        <p className="desc">{item.description}</p>
                        <p className="price">{item.price}₺</p>

                        <div className="menu-actions">
                            <button className="edit" onClick={() => handleEdit(item)}>Edit</button>
                            <button className="delete" onClick={() => handleDelete(item.id)}>Sil</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
