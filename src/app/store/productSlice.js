import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products?sort=desc"
    );
    return response.data;
  }
);

export const fetchProductBySpecificCategories = createAsyncThunk(
  "products/fetchSpecificCategories",
  async (category) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );

    return response.data;
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    allProductsStatus: "idle",
    allProductsError: null,

    categoriesProducts: [],
    categoriesProductsStatus: "idle",
    categoriesProductsError: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.allProductsStatus = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.allProductsStatus = "sucess";
        state.allProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.allProductsStatus = "error";
      })

      .addCase(fetchProductBySpecificCategories.pending, (state) => {
        state.categoriesProductsStatus = "loading";
      })
      .addCase(fetchProductBySpecificCategories.fulfilled, (state, action) => {
        state.categoriesProductsStatus = "sucess";
        state.categoriesProducts = action.payload;
      })
      .addCase(fetchProductBySpecificCategories.rejected, (state) => {
        state.categoriesProductsStatus = "error";
      });
  },
});

export default ProductsSlice.reducer;
