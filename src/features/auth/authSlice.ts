import {createSlice} from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";


export interface AuthState {
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signin: (state) => {
            state.isAuthenticated = true;
        },
        signout: (state) => {
            state.isAuthenticated = false;
        }
    }
})

export const {signout, signin} = authSlice.actions

export const isAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export default authSlice.reducer;