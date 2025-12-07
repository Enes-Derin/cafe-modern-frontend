import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// Fetch all categories
export const fetchCategories = createAsyncThunk(
    "category/fetchCategories",
    async (_, thunkAPI) => {
        try {
            const res = await axiosInstance.get("/categories");
            return res.data.payload;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data);
        }
    }
);
export const addCategory = createAsyncThunk(
    "category/addCategory",
    async (formData, thunkAPI) => {
        try {
            const res = await axiosInstance.post("/admin/categories", formData);
            return res.data.payload;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data);
        }
    }
);

export const updateCategory = createAsyncThunk(
    "category/updateCategory",
    async ({ id, formData }, thunkAPI) => {
        try {
            const res = await axiosInstance.put(`/admin/categories/update/${id}`, formData);
            return res.data.payload;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data);
        }
    }
);
// Delete category
export const deleteCategory = createAsyncThunk(
    "category/deleteCategory",
    async (id, thunkAPI) => {
        try {
            await axiosInstance.delete(`/admin/categories/${id}`);
            return id;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data);
        }
    }
);

const categorySlice = createSlice({
    name: "category",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.items = state.items.map((cat) =>
                    cat.id === action.payload.id ? action.payload : cat
                );
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.items = state.items.filter((cat) => cat.id !== action.payload);
            });
    },
});

export default categorySlice.reducer;
