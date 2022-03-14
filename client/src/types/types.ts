import store from "../store/store"

export type AppDispatch = typeof store.dispatch;

interface ILocation {
    lat: string,
    lon: string,
}

export interface IDevices {
    deviceId: string,
    createdAt: string,
    updatedAt: string,
    deviceName: string,
    deviceModel: string,
    location: ILocation,
    measurementModels: [],
    measurements: [],
    metadata: Object,
    active: boolean,
    zipCode: string,
    alerts: any[],
    
}


//ACTIONSCREATORS
export type GetDevicesRequest = {
    type: string,
}

export type GetDevicesSuccess = {
    type: string,
    payload: IDevices[],
}

export type SetDevicesList = {
    type: string,
    payload: IDevicesList[],
}

export interface IDevicesList {
    key: string,
    device: string[],
    deviceModel: string,
    zipCode: string,
    status: boolean,
}

export interface SetSelectedDevice {
    type: string,
    payload: IDevices[],
}


//REDUCERS
export interface ISystemState {
    devices: IDevices[],
    deviceTableList: IDevices[],
    selectedDevice: IDevices[],
}

export type ISystemAction = {
    type: string,
    payload: IDevices[],
}