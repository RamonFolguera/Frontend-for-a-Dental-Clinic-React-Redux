import { createSlice } from "@reduxjs/toolkit";  

export const detailsSlice = createSlice({
    name: 'details',
    initialState: {
        choosenObject : {}
    },
    reducers: {
        addChoosen: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
    }
})

export const { addChoosen } = detailsSlice.actions;

export const detailsData = (state) => state.details;

export default detailsSlice.reducer;