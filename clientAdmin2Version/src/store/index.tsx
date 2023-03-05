import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./RootReduser";

const store = configureStore({
    devTools: true,
    reducer: reducers,
});


export default store;