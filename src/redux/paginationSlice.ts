import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PaginationState {
    data: [];
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
}

const initialState: PaginationState = {
    data: [],
    currentPage: 1,
    totalPages: 0,
    itemsPerPage: 0,
    totalItems: 0,
}

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setTotalPages: (state, action: PayloadAction<number>) => {
            state.totalPages = action.payload;
        },
        setItemsPerPage: (state, action: PayloadAction<number>) => {
            state.itemsPerPage = action.payload;
        },
        setTotalItems: (state, action: PayloadAction<number>) => {
            state.totalItems = action.payload;
        },
    },
});

export const { setCurrentPage, setTotalPages, setItemsPerPage, setTotalItems } = paginationSlice.actions;

export default paginationSlice.reducer;