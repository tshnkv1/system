import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDevicesRequest, setDevicesList } from '../../store/actionsCreator/actionsCreator';
import { GetDevicesRequest, IDevices, SetDevicesList } from '../../types/types';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Header from '../header/Header';
import Content from '../content/Content';

interface DispatchProps {
    getDevicesRequest: () => GetDevicesRequest,
    setDevicesList: (devices: IDevices[]) => SetDevicesList,
}

interface StateProps {
    devices: IDevices[],
}

type Props = StateProps & DispatchProps;

const App = (props: Props) => {

    const { 
        devices,
        getDevicesRequest,
        setDevicesList,
    } = props;

    useEffect(()=>{
        getDevicesRequest();
    }, []);
    
    useEffect(()=>{
        setDevicesList(devices);
    }, [devices]);

    return (
        <Layout>
            <Header />
            <Content />
        </Layout>
    )
}

const mapState = (state: any) => ({
    devices: state.system.devices,
})

const mapDispatchToProps = {
    getDevicesRequest,
    setDevicesList,
}

export default connect<StateProps, DispatchProps>(mapState, mapDispatchToProps)(App);