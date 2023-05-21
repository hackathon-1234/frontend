import React from 'react';
import {Button, Card, Layout, Menu, theme} from 'antd';
import {Link} from "react-router-dom";
import CreateTest from "../CreateTest";
import {MenuInfo} from 'rc-menu/lib/interface';
import CreateManual from "../CreateManual";
import "../../components/MainAdmin/style.css";
import MyTests from "../MyTests";

const { Header, Content, Footer } = Layout;


const { Meta } = Card;


const ManualRead: React.FC = () => {
    const [manualText, setManualText] = React.useState(`<h1>Тут будет текст</h1><p>еще какой то текст</p><p><br></p><p>список компетенций</p><ol><li>уметь работать с ножом</li><li>уметь резать кожу</li><li>уметь говорить больному что все будет хорошо</li></ol>`);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [selectedMenu, setSelectedMenu] = React.useState<string>("1");

    const foo = (e: MenuInfo) => {
        setSelectedMenu(e.key)
    }

    return (
        <>
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
                            transition: '.2s ease-in-out',
                            marginRight: "5px"
                        }} to='/client'>Вернуться к тестам</Link>
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
                        {selectedMenu === "1" && (
                            <div
                            >
                                <div
                                    className={"preview"}
                                    dangerouslySetInnerHTML={{__html: manualText}}
                                />

                                <Button style={{marginTop: "10px"}} type="primary" htmlType="submit">
                                    Начать тестирование
                                </Button>
                            </div>
                        )}
                    </div>
                </Content>
            </Layout >
        </>

    )
}

export default ManualRead