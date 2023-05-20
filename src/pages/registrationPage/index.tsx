import { Typography } from "antd";
import Registration from "../../components/Registration";
const { Title } = Typography;

const RegistrationPage = () => {

    return (
        <>
            <Typography>
                <Title>Регистрация</Title>
            </Typography>
            <Registration />
        </>
    )
}

export default RegistrationPage