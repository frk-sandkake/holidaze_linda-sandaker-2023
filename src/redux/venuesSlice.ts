import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { VenueResponse } from "../redux/types";
import VenuesServices from "../services/VenuesServices";


interface VenuesState {
  data: VenueResponse[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: VenuesState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchVenues = createAsyncThunk("venues/VenuesService", async () => {
  const response = await VenuesServices.getAll();
  console.log("fetchVenues", response);
  return response.data;
});

export const venuesSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVenues.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVenues.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchVenues.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong.";
      });
  },
});
export const selectVenues = (state: RootState) => state.venues.data
export const selectStatus = (state: RootState) => state.venues.status
export const selectError = (state: RootState) => state.venues.error

export default venuesSlice.reducer;
