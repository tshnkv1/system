import React from 'react';
import { connect } from 'react-redux';
import { IDevices } from '../../types/types';
import { Row, Col, Card, Space, Switch, Alert, message } from 'antd';
import {Typography, Tag } from 'antd';

interface StateProps {
    selectedDevice?: IDevices[],
}

const DeviceCard = (props: StateProps) => {

    const { selectedDevice } = props;
    const { Title, Text } = Typography;
    
    //toggler
    const toggler = (e: boolean) => {
        e? 
        message.success('Status: On') 
        : message.warning('Status: Off');
    }

    const deviceInfo = selectedDevice?.map(device => (
        <Card key={device.deviceId}>
            <Space direction="vertical">
                <Title level={3} mark>Name: {device.deviceName}</Title>
                <Text>Model: {device.deviceModel}</Text>
                <Text type="secondary">Id: {device.deviceId}</Text>
                <Text strong>Zip Code: {device.zipCode}</Text>
                <Text>
                    Created: <Tag>{device.createdAt}</Tag>
                </Text>
                <Text>
                    Location: <Tag>{device.location.lat}</Tag> <Tag>{device.location.lon}</Tag>
                </Text>
                <Text>Device status (active/inactive)</Text>
                <Switch defaultChecked={device.active} onChange={toggler}/> 
                {device.alerts.map(alert => (
                    <Alert key={alert.key}
                        message={`
                        alert ${alert.state}
                        name: ${alert.name}
                        severity: ${alert.severity}
                        timestamp: ${alert.timestamp}
                        `}
                        type={alert.state === 'cleared'? 'success' : 'info'} //set color of alert
                    />
                ))
                }
            </Space>
        </Card>
    ));

    return (
        <Row>
            <Col span={14} offset={4}>
                {deviceInfo}
            </Col>
        </Row>
        
    )
}

const mapState = (state: any) => ({
    selectedDevice: state.system.selectedDevice,
})

export default connect<StateProps>(mapState)(DeviceCard);