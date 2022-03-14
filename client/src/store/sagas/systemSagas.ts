import { takeEvery, call, put, all } from "redux-saga/effects";
import * as action from '../actions/actions';
import { getDevicesSuccess } from "../actionsCreator/actionsCreator";
import * as api from '../../api/devicesApi';
import { IDevices } from "../../types/types";

//workers
function* getDevices() {
    try {
        const result: IDevices[] = yield call(api.getDevices);
        yield put(getDevicesSuccess(result));
    } catch(e) {
        console.error(e);
    }
}

//watchers
function* watchGetDevicesRequest() {
        yield takeEvery(action.Types.GET_DEVICES_REQUEST, getDevices);
}

//devicesSagas
function* systemSagas() {
    yield all([watchGetDevicesRequest()]);
}

export default systemSagas;