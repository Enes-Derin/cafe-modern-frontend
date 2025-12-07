import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCategories,
    addCategory,
    updateCategory,
    deleteCategory,
} from "../../redux/slice/categorySlice";
import "../../styles/category.css";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export default function CategoryEditor() {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.category);

    // NEW CATEGORY
    const [newCatName, setNewCatName] = useState("");
    const [newCatImage, setNewCatImage] = useState(null);

    // EDIT CATEGORY
    const [editCatId, setEditCatId] = useState(null);
    const [editCatName, setEditCatName] = useState("");
    const [editCatImage, setEditCatImage] = useState(null);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    // ADD
    const handleAdd = () => {
        const formData = new FormData();
        formData.append("name", newCatName);
        if (newCatImage) formData.append("imageFile", newCatImage);

        dispatch(addCategory(formData));

        setNewCatName("");
        setNewCatImage(null);
    };


    // UPDATE
    const handleUpdate = (id) => {
        const formData = new FormData();
        formData.append("name", editCatName);
        if (editCatImage) formData.append("imageFile", editCatImage);

        dispatch(updateCategory({ id, formData }));

        setEditCatId(null);
        setEditCatName("");
        setEditCatImage(null);
    };

    return (
        <div className="cat-wrapper">
            <div className="cat-header">
                <h2>Kategori Yönetimi</h2>

                {/* NEW CATEGORY FORM */}
                <div className="cat-add">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            value={newCatName || ""}
                            placeholder=" "
                            onChange={(e) => setNewCatName(e.target.value)}
                        />
                        <label>Yeni kategori</label>
                    </div>

                    <div className="file-wrapper">
                        <input
                            type="file"
                            className="file-input"
                            onChange={(e) => setNewCatImage(e.target.files[0])}
                        />
                    </div>

                    <button onClick={handleAdd}>Ekle</button>
                </div>
            </div>

            {/* CATEGORY LIST */}
            <div className="cat-list">
                {items.map((cat) => (
                    <div key={cat.id} className="cat-item">
                        {editCatId === cat.id ? (
                            <>
                                {/* EDIT MODE */}
                                <input
                                    type="text"
                                    value={editCatName || ""}
                                    placeholder=" "
                                    onChange={(e) => setEditCatName(e.target.value)}
                                />

                                <input
                                    type="file"
                                    onChange={(e) => setEditCatImage(e.target.files[0])}
                                />

                                <button onClick={() => handleUpdate(cat.id)}>
                                    Kaydet
                                </button>
                                <button onClick={() => setEditCatId(null)}>İptal</button>
                            </>
                        ) : (
                            <>
                                {/* NORMAL MODE */}
                                {cat.imageUrl && (
                                    <img
                                        src={`${BASE_URL}${cat.imageUrl}`}
                                        alt={cat.name}
                                        className="cat-item-img"
                                    />
                                )}

                                <span>{cat.name}</span>


                                <div className="cat-item-buttons">
                                    <button
                                        onClick={() => {
                                            setEditCatId(cat.id);
                                            setEditCatName(cat.name);
                                        }}
                                    >
                                        Düzenle
                                    </button>

                                    <button
                                        onClick={() =>
                                            dispatch(deleteCategory(cat.id))
                                        }
                                    >
                                        Sil
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
