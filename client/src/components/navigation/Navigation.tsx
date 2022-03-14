import React from 'react';
import './navigation.css';
import { Row, Col, Space, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Row>
            <Col span={5} offset={8}>
                <Space direction="vertical">
                    <Breadcrumb className='navigation'>
                        <Breadcrumb.Item>
                            <Link to="/">Table</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/map">On map</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Space>
            </Col>
        </Row>
    )
}

export default Navigation;