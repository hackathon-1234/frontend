import React from 'react';
import { Anchor, Breadcrumb, Layout, Menu, theme, Typography } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { Link } from "react-router-dom"
import CreateTest from "../CreateTest";
import "./style.css";
import CreateManual from '../CreateManual';
import MyTests from "../MyTests";

const { Header, Content, Footer } = Layout;

const MainAdmin: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [selectedMenu, setSelectedMenu] = React.useState<string>("1");

    const foo = (e: MenuInfo) => {
        setSelectedMenu(e.key)
    }

    return (
        <Layout className="layout" style={{ height: '100vh' }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                    color: "#fff",
                    padding: '0 15px',
                    fontSize: '23px',
                    width: '185px',
                    fontWeight: '900',
                }} className="demo-logo">Skill Boost</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    onClick={(e) => foo(e)}
                    style={{
                        color: '#454545',
                        backgroundColor: 'transparent',
                        width: '100%',
                        fontWeight: 700,
                        fontSize: '16px'
                    }}
                    items={[
                        {
                            key: 1,
                            label: "Доступные материалы",
                        }
                    ]}
                />
                <div style={{
                    position: "absolute",
                    right: "5%",
                }}>
                    <Link className='exitButton' style={{
                        color: '#66fc11',
                        backgroundColor: '#000',
                        fontSize: '18px',
                        fontWeight: '700',
                        border: '1px solid #000',
                        padding: '7px 10px',
                        borderRadius: '6px',
                        transition: '.2s ease-in-out'
                    }} to='/login'>Выход</Link>
                </div>
            </Header>
            <Content style={{
                padding: '0 50px',
            }}>
                <div className="site-layout-content" style={{
                    background: colorBgContainer,
                    margin: '56px 0 16px 0',
                    padding: "50px",
                    borderRadius: '10px',
                    boxShadow: '18px 18px 36px #BCBCBC, -18px -18px 36px #FFFFFF'
                }}>
                    {selectedMenu === "1" && <MyTests />}
                </div>
            </Content>
        </Layout >
    );
};

export default MainAdmin;