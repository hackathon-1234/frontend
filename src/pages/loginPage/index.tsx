import Login from "../../components/login";
import {theme, Typography} from "antd";
import {Content} from "antd/es/layout/layout";


const LoginPage = () => {
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
                <div className="site-layout-content" style={{ background: colorBgContainer, padding: "50px 50px"  }}>
                    <Typography.Title>
                        Данные для входа
                    </Typography.Title>
                    <Login />
                </div>
            </Content>
        </>
    )
}

export default LoginPage