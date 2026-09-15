import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  discountPercentage: number;
  category: string;
}

interface DetailsProductState {
  details: Product | null;
}

const initialState: DetailsProductState = {
  details: null,
};

export const detailsProductSlice = createSlice({
  name: "detailsProduct",
  initialState,
  reducers: {
    setDetailsProduct: (state, action: PayloadAction<Product>) => {
      state.details = action.payload;
    },

    clearDetailsProduct: (state) => {
      state.details = null;
    },
  },
});

export const { setDetailsProduct, clearDetailsProduct } =
  detailsProductSlice.actions;

export default detailsProductSlice.reducer;
