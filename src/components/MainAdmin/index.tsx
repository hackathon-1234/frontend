import React from 'react';
import {Breadcrumb, Layout, Menu, theme, Typography} from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import {Link} from "react-router-dom"
import CreateTest from "../CreateTest";

const {Header, Content, Footer} = Layout;

const MainAdmin: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const [selectedMenu, setSelectedMenu] = React.useState<string>("1");

    const foo = (e: MenuInfo) => {
        setSelectedMenu(e.key)
    }

    return (
        <Layout className="layout" style={{height: '100vh'}}>
            <Header style={{ display: 'flex', alignItems: 'center'}}>
                <div style={{color: "white"}} className="demo-logo">Медицина</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    onClick={(e) => foo(e)}
                    items={[
                        {
                            key: 1,
                            label: "Добавить тест"
                        },
                        {
                            key: 2,
                            label: "Добавить материал"
                        }
                    ]}
                />
                <div style={{position: "absolute", right: "5%"}}>
                    <Link to='/login'>Выход</Link>
                </div>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content" style={{ background: colorBgContainer, margin: '16px 0', padding: "50px" }}>
                    {selectedMenu === "1" && <CreateTest />}
                    {selectedMenu === "2" && (<h1>Добавить материал</h1>)}
                </div>
            </Content>
        </Layout>
    );
};

export default MainAdmin;