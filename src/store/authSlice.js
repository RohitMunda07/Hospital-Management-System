import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    admin: false,
    userData: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.admin = false;
            state.userData = action.payload;
        },
        adminLogin: (state, action) => {
            state.status = false;
            state.admin = true;
            state.userData = action.payload;
        },
        logout: (state) => {
            state.status = false;
            state.admin = false;
            state.userData = null;
        }
    }
});

export const { login, logout, adminLogin } = authSlice.actions;
export default authSlice.reducer;
