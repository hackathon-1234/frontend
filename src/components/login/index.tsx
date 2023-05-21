import React from 'react';
import {Button, Form, Input, notification} from 'antd';
import {useAppDispatch} from "../../hooks/useRedux";
import {LoginDto} from "../../dto/loginDto";
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const openNotification = () => {
        notification.open({
            message: 'Ошибка',
            description:
                'Неправильный логин или пароль',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    const onFinish = (values: LoginDto) => {
        if (values.login === "admin" && values.password === "admin") {
            navigate("/admin");
        } else if (values.login === "ivan45" && values.password === "ivan45") {
            navigate("/client");
        } else {
            openNotification()
        }
        // dispatch(login(values))
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Имя пользователя"
                name="login"
                rules={[
                    { required: true, message: 'Пожалуйста, введите ваше имя пользователя!' },
                    { whitespace: true },
                    { min: 3, message: 'Имя пользователя должно быть не меньше 3 символов' },
                    { max: 16, message: 'Слишком длинное имя пользователя' }
                ]}
                hasFeedback
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[
                    { required: true, message: 'Пожалуйста, введите ваше проль!' },
                    { whitespace: true },
                    { min: 5, message: 'Пароль должен быть не меньше 8 символов' },
                    { max: 16, message: 'Слишком длинное пароль' }
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login