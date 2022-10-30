import { configureStore } from "@reduxjs/toolkit"
import { CHANGE_CURRENCY_PAIR } from "./action_types";
import { rootReducer } from "./reducers";

export const store = configureStore({reducer: rootReducer});