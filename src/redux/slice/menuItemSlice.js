import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchMenuItemsByCategory = createAsyncThunk(
    "menuItem/fetchByCategory",
    async (categoryId, thunkAPI) => {
        try {
            const res = await axiosInstance.get(`/menu-item/${categoryId}`);
            return res.data.payload;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

export const addMenuItem = createAsyncThunk(
    "menuItem/addMenuItem",
    async ({ file, name, description, price, categoryId }, thunkAPI) => {
        try {
            const formData = new FormData();
            formData.append("imageFile", file);
            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("categoryId", categoryId);

            const res = await axiosInstance.post("/admin/menu-item", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            return res.data.payload;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

export const updateMenuItem = createAsyncThunk(
    "menuItem/updateMenuItem",
    async ({ id, file, name, description, price, categoryId }, thunkAPI) => {
        try {
            const formData = new FormData();
            if (file) formData.append("imageFile", file);
            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("categoryId", categoryId);

            const res = await axiosInstance.put(`/admin/menu-item/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            return res.data.payload;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

export const deleteMenuItem = createAsyncThunk(
    "menuItem/deleteMenuItem",
    async (id, thunkAPI) => {
        try {
            await axiosInstance.delete(`/admin/menu-item/${id}`);
            return id;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

const menuItemSlice = createSlice({
    name: "menuItem",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenuItemsByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMenuItemsByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchMenuItemsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addMenuItem.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateMenuItem.fulfilled, (state, action) => {
                state.items = state.items.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                );
            })
            .addCase(deleteMenuItem.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item.id !== action.payload);
            });
    },
});

export default menuItemSlice.reducer;
