import { Typography } from "antd";
import Registration from "../../components/Registration";
import CreateManual from "../../components/CreateManual";
import { Divider } from 'antd';

const RegistrationPage = () => {



    return (
        <>
            <Divider>
                <Typography.Title>
                    Регистрация
                </Typography.Title>
            </Divider>
            <Registration />
            <CreateManual />
        </>
    )
}

export default RegistrationPage