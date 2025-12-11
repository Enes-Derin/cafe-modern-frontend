import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
export const fetchGallery = createAsyncThunk(
    "gallery/fetchGallery",
    async (_, thunkAPI) => {
        try {
            const res = await axiosInstance.get("/gallery");
            return res.data.payload; // backend RootEntity -> data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

export const uploadGalleryImage = createAsyncThunk(
    "gallery/uploadGalleryImage",
    async (file) => {
        try {
            const formData = new FormData();
            formData.append("file", file);

            const res = await axiosInstance.post("/admin/gallery", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            return res.data.payload;
        } catch (err) {
            return res.data.error;
        }
    }
);

export const deleteGalleryImage = createAsyncThunk(
    "gallery/deleteGalleryImage",
    async (id, thunkAPI) => {
        try {
            const res = await axiosInstance.delete(`/admin/gallery/${id}`);
            return res.data.payload;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);


const gallerySlice = createSlice({
    name: "gallery",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGallery.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGallery.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchGallery.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(uploadGalleryImage.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteGalleryImage.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item.id !== action.payload);
            });
    },
});

export default gallerySlice.reducer;
