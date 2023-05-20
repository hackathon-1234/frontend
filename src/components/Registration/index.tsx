import { Button, Form, Input } from 'antd';

const onFinish = (values: any) => {
   console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
   console.log('Failed:', errorInfo);
};

const Registration = () => (
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
         label="Имя"
         name="lastName"
         rules={[{ required: true, message: 'Введите имя!' }]}
      >
         <Input />
      </Form.Item>

      <Form.Item
         label="Фамилия"
         name="firstName"
         rules={[{ required: true, message: 'Введите фамилию!'}]}
      >
         <Input />
      </Form.Item>
      <Form.Item
         label="Отчество"
         name="surtName"
         rules={[{ required: true, message: 'Введите отчество!' }]}
      >
         <Input />
      </Form.Item>
      <Form.Item
         label="Имя пользователя"
         name="login"
         rules={[{ required: true, message: 'Введите имя пользователя!' }]}
      >
         <Input />
      </Form.Item>
      <Form.Item
         label="E-mail"
         name="email"
         rules={[{ required: true, type:'email', message: 'Введите корректое имя почты!' }]}
      >
         <Input />
      </Form.Item>
      <Form.Item
         label="Пароль"
         name="password"
         rules={[{ required: true, message: 'Введите пароль!' }]}
      >
         <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
         <Button block type="primary" htmlType="submit">
            Отправить
         </Button>
      </Form.Item>
   </Form>
);

export default Registration;