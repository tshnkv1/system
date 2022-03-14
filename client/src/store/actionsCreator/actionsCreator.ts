import {
    IDevices,
    GetDevicesRequest,
    GetDevicesSuccess,
    SetDevicesList,
    SetSelectedDevice,
} from '../../types/types';
import { Types } from '../actions/actions';

export const getDevicesRequest = (): GetDevicesRequest => ({
    type: Types.GET_DEVICES_REQUEST,
  });

export const getDevicesSuccess = (devices: IDevices[]):GetDevicesSuccess => ({
    type: Types.GET_DEVICES_SUCCESS,
    payload: devices,
})

export const setDevicesList = (devices: IDevices[]):SetDevicesList => {
    
    const data = devices.map(device => ({
        key: device.deviceId,
        device: [device.deviceName, device.deviceId],
        deviceModel: device.deviceModel,
        zipCode: device.zipCode,
        status: device.active,
    }));

    return {
        type: Types.SET_DEVICES_LIST,
        payload: data,
    }
}

export const setSelectedDevice = (device: IDevices[]):SetSelectedDevice => ({
    type: Types.SET_SELECTED_DEVICE,
    payload: device,
});