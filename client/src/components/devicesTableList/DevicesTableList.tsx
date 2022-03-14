import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IDevices, IDevicesList, SetSelectedDevice } from '../../types/types';
import { setSelectedDevice } from '../../store/actionsCreator/actionsCreator';
import { Table, Switch, message } from 'antd';
import { Link } from 'react-router-dom';
import ControlPanel from '../controlPanel/ControlPanel';

interface DispatchProps {
    setSelectedDevice: (device: IDevices[]) => SetSelectedDevice,
}

interface StateProps {
    devices: IDevices[],
    deviceTableList: any,
}

type Props = StateProps & DispatchProps;

const DeviceTableList = (props: Props) => {

    const { devices, deviceTableList, setSelectedDevice } = props;
    const [inputValue, setInputValue] = useState('');
    const [selectionValue, setselectionValue] = useState(null);

    const getFilteredDevices = () => {
        if(!inputValue) {

            if(!selectionValue) {

            return deviceTableList;

            } else {

                return deviceTableList.filter((device: IDevicesList) => {
                    return (
                        String(device.status) === selectionValue
                    )
                })
            }
        } else {

            if(!selectionValue) {

                return deviceTableList.filter((device: IDevicesList) => {
                    return (
                        device.device[0].includes(inputValue)
                    )
                })
    
                } else {
                    
                    return deviceTableList.filter((device: IDevicesList) => {
                        return (
                            device.device[0].includes(inputValue) && String(device.status) === selectionValue
                        )
                    })
                }
        }
        
    }

    const filteredDevices = getFilteredDevices();

    //selected device
    const handleSelectedDevice = (event: React.MouseEvent) => {
        const selectedId = event.currentTarget.getAttribute("data-id");
        
        const selectedDevice = devices.filter((device: IDevices) => (
            device.deviceId === selectedId
        ));
        setSelectedDevice(selectedDevice);
    }

    //toggler
    const toggler = (e: boolean) => {
        e? message.success('Status: On') : message.warning('Status: Off');
    }

    const columns = [
        {
            title: 'Device name',
            dataIndex: 'device',
            key: 'device',
            render: (device: string[]) => { //0 - name, 1 - id
            return (
                <Link to={`/device/${device[1]}`} onClick={handleSelectedDevice} data-id={device[1]}>
                    {device[0]}
                </Link>)
            }
        },
        {
            title: 'Device model',
            dataIndex: 'deviceModel',
            key: 'deviceModel',
        },
        {
            title: 'Zip code',
            dataIndex: 'zipCode',
            key: 'zipCode',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (active: boolean) => {
                return (
                    <Switch defaultChecked={active} onClick={toggler}/>
                )
            }
        },
    ]

    return (
        <>
            <ControlPanel inputValue={inputValue} setInputValue={setInputValue} setselectionValue={setselectionValue}/>
            <Table columns={columns} dataSource={filteredDevices} />
        </>
    )
}

const mapState = (state: any) => ({
    devices: state.system.devices,
    deviceTableList: state.system.deviceTableList,
})


const mapDispatchToProps = {
    setSelectedDevice,
}

export default connect<StateProps, DispatchProps>(mapState, mapDispatchToProps)(DeviceTableList);