import { theme, Typography } from "antd";
import Registration from "../../components/Registration";
import CreateManual from "../../components/CreateManual";
import { Divider } from 'antd';
import Login from "../../components/login";
import { Content } from "antd/es/layout/layout";
import React from "react";

const RegistrationPage = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
            <Content style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}>
                <div className="site-layout-content" style={{
                    background: colorBgContainer,
                    width: '550px', 
                    padding: "50px 50px"
                }}>
                    <Typography.Title>Регистрация</Typography.Title>
                    <Registration />
                </div>
            </Content>
        </>
    )
}

export default RegistrationPage