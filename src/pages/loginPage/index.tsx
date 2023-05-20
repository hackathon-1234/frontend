import Login from "../../components/login";
import { Typography } from "antd";
import { Divider } from 'antd';


const LoginPage = () => {

    return (
        <>
            <Divider>
                <Typography.Title>
                Данные для входа
                </Typography.Title>
            </Divider>
            <Login />
        </>
    )
}

export default LoginPage