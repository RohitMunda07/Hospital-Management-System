import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    admin: false,
    userData: null,
    claim: false,
    stepIndex: 1, // 👈 Add this to track the current step
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
            state.stepIndex = 1;
        },
        setClaim: (state, action) => {
            state.claim = action.payload;
        },
        setStepIndex: (state, action) => {
            state.stepIndex = action.payload;
        }, // 👈 Add this reducer
    },
});

export const { login, logout, adminLogin, setClaim, setStepIndex } = authSlice.actions;
export default authSlice.reducer;
