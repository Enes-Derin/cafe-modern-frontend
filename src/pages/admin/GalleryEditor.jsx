import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchGallery,
    uploadGalleryImage,
    deleteGalleryImage,
} from "../../redux/slice/gallerySlice";
import "../../styles/galleryEditor.css";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export default function GalleryEditor() {
    const dispatch = useDispatch();
    const { items, loading } = useSelector((state) => state.gallery);

    const [files, setFiles] = useState([]);

    useEffect(() => {
        dispatch(fetchGallery());
    }, [dispatch]);

    const handleUpload = () => {
        if (!files.length) return;
        files.forEach((file) => {
            dispatch(uploadGalleryImage(file));
        });
        setFiles([]);
    };

    return (
        <div className="gallery-editor-wrapper">
            <h2 className="gallery-editor-title">📷 Gallery Editor</h2>

            {/* Upload Section */}
            <div className="gallery-upload">
                <input
                    type="file"
                    multiple
                    onChange={(e) => setFiles(Array.from(e.target.files))}
                />
                <button onClick={handleUpload}>Upload</button>
            </div>

            {loading && <p>Loading...</p>}

            {/* Images Grid */}
            <div className="gallery-grid">
                {items.map((img) => (
                    <div key={img.id} className="gallery-card">
                        <div className="gallery-img-wrapper">
                            <img src={`${BASE_URL}${img.imageUrl}`} alt={`Gallery ${img.id}`} />
                        </div>
                        <button
                            className="gallery-delete-btn"
                            onClick={() => dispatch(deleteGalleryImage(img.id))}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
