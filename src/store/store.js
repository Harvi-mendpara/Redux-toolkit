import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../app/userDetailSlice";

export const store = configureStore({
    reducer: {
        data: userDetail,
    }
})