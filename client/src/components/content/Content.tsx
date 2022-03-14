import React from 'react';
import './Content.css';
import Navigation from '../navigation/Navigation';
import DeviceTableList from '../devicesTableList/DevicesTableList';
import DeviceCard from '../deviceCard/deviceCard';
import DeviceOnMap from '../map/DeviceOnMap';
import { Layout } from 'antd';
import { Route, Routes} from 'react-router-dom';


const Content = () => {

    const { Content } = Layout;
    return (
            <Content className='content'>
                <Navigation />
                <Routes>
                    <Route path="/" element={<DeviceTableList />}/>
                    <Route path="/device/:id" element={<DeviceCard />}/>
                    <Route path="/map" element={<DeviceOnMap />} />
                </Routes>
            </Content>
    )
}

export default Content;