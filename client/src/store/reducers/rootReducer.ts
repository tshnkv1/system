import { combineReducers } from "redux";
import { systemReducer } from "./systemReducer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    system: systemReducer,
})

export default rootReducer;