import React from 'react';
import './header.css';
import { Row, Col, Layout, Typography  } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {

    const { Header } = Layout;
    const { Title } = Typography;
    return (
        <Header className="header" data-testid="header">
            <Row>
                <Col span={2} offset={11}>
                <Link to="/">
                    <Title level={3}>
                        System
                    </Title>
                </Link>
                </Col>
            </Row>
        </Header>
    )
}

export default Header;