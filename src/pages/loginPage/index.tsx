import Login from "../../components/login";
import {Button, theme, Typography} from "antd";
import {Content} from "antd/es/layout/layout";
import {FooAPI} from "../../api/api";


const LoginPage = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const check = async () => {
        const data = await FooAPI.foo();
        console.log(data.data)
    }

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
                    <Button onClick={check}>Проверить</Button>
                    <Login />
                </div>
            </Content>
        </>
    )
}

export default LoginPage