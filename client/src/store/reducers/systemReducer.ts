import { 
    ISystemState,
    ISystemAction,
 } from "../../types/types";
import { Types } from "../actions/actions";

const initialState: ISystemState = {
    devices: [],
    deviceTableList: [],
    selectedDevice: [],
}

export const systemReducer = (state = initialState, action: ISystemAction) => {
    switch (action.type) {

        case Types.GET_DEVICES_SUCCESS:
            return {
                ...state,
                devices: action.payload,
            };
            
        case Types.SET_DEVICES_LIST:
            return {
                ...state,
                selectedDevice: [],
                deviceTableList: action.payload,
            };
        
        case Types.SET_SELECTED_DEVICE:
            return {
                ...state,
                selectedDevice: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
}