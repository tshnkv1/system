import { all } from "redux-saga/effects";
import systemSagas from "./systemSagas";

function* rootSaga() {
    yield all([systemSagas()]);
}

export default rootSaga;
