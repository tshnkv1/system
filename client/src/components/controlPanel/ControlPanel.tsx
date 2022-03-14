import React from 'react';
import { connect } from 'react-redux';
import './controlPanel.css';
import { Row, Col, Space, Input, Cascader } from 'antd';
import { IDevicesList } from '../../types/types';

interface IControlPanelProps {
    inputValue: any,
    setInputValue: any,
    setselectionValue: any
}

interface StateProps {
    deviceTableList: IDevicesList[],
}

type Props = StateProps & IControlPanelProps;

const ControlPanel = (props: Props) => {

    const { inputValue, setInputValue, setselectionValue } = props;

    const hanbleChangeInput = (e: any) => {
        setInputValue(e.target.value.toLowerCase());
    }

    const options = [
        {
            value: 'false',
            label: 'Off',
        },
        {
            value: 'true',
            label: 'On',
        }
    ];

    const change = (value: any) => {
        setselectionValue(value[0]);
    }
        
    return (
        <Row className='control-panel'>
            <Col span={12} offset={4}>
                <Space>
                    <Input.Search value={inputValue} placeholder="Please enter a name" onChange={hanbleChangeInput}/>
                    <Cascader data-id='status' options={options} onChange={change} placeholder="Please select status" />
                </Space>
            </Col>
        </Row>
    )
}

const mapState = (state: any) => ({
    devices: state.system.devices,
    deviceTableList: state.system.deviceTableList,
})

export default connect<StateProps>(mapState)(ControlPanel);