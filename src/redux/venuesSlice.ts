import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { VenueResponse } from "../redux/types";
import axios from "axios";

const BASE_URL = `https://api.noroff.dev/api/v1/holidaze`
const allVenues = `${BASE_URL}/venues`

interface VenuesState {
  allVenues: VenueResponse[];
  savedVenues: VenueResponse[];
  venue: VenueResponse | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  search: any;
}

const initialState: VenuesState = {
  allVenues: [],
  savedVenues: [],
  venue: null,
  status: "idle",
  error: null,
  search: null,
};

export const fetchVenues = createAsyncThunk(
  "venues/fetchVenues",
  async () => {
    const response = await axios.get(
      `${allVenues}?&offset=0`
    );
    return response.data;
  }
);


export const venuesSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {
    saveVenue: (state, action) => {
      state.savedVenues.push(action.payload);
    },
    setLimit: (state, action) => {
      state.allVenues = state.allVenues.slice(0, action.payload);
    },
    shuffle: (state) => {
      state.allVenues = state.allVenues.sort(() => Math.random() - 0.5);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVenues.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.allVenues = [];
      })
      .addCase(fetchVenues.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.allVenues = action.payload;
      })
      .addCase(fetchVenues.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong.";
      });
  },
});

export const { saveVenue, setLimit, shuffle } = venuesSlice.actions;

export const selectAllVenues = (state: RootState) => state.venues.allVenues
export const selectStatus = (state: RootState) => state.venues.status
export const selectError = (state: RootState) => state.venues.error

export default venuesSlice.reducer;
