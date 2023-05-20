import { Button, Form, Input } from 'antd';


const Registration: React.FC = () => {
   const onFinish = (values: any) => {
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
            label="Имя"
            name="lastName"
            rules={[
               { required: true, message: 'Введите имя!' },
               { whitespace: true, message:'Пробел не допускается'},
               { max: 29, message: 'Слишком длинная имя!' }]}
            hasFeedback
         >
            <Input />
         </Form.Item>

         <Form.Item
            label="Фамилия"
            name="firstName"
            rules={[
               { required: true, message: 'Введите фамилию!' },
               { whitespace: true, message:'Пробел не допускается'},
               { max: 29, message: 'Слишком длинная фамилия!' }]}
            hasFeedback
         >
            <Input />
         </Form.Item>
         <Form.Item
            label="Отчество"
            name="surtName"
            rules={[
               { required: true, message: 'Введите отчество!' },
               { whitespace: true, message:'Пробел не допускается'},
               { max: 29, message: 'Слишком длиное отчество!' }]}
            hasFeedback
         >
            <Input />
         </Form.Item>
         <Form.Item
            label="Имя пользователя"
            name="login"
            rules={[
               { required: true, message: 'Введите имя пользователя!' },
               { whitespace: true, message:'Пробел не допускается'},
               { max: 29, message: 'Слишком длинная имя пользователя' }]}
            hasFeedback
         >
            <Input />
         </Form.Item>
         <Form.Item
            label="E-mail"
            name="email"
            rules={[
               { required: true, message: 'Введите e-mail!' },
               { whitespace: true, message:'Пробел не допускается'},
               { type: 'email', message: 'Введите корректный e-mail!' }]}
            hasFeedback
         >
            <Input />
         </Form.Item>
         <Form.Item
            label="Пароль"
            name="password"
            rules={[
               { required: true, message: 'Введите пароль!' },
               { min: 8, message: 'Минимальное количество символов 8' },
               { whitespace: true, message:'Пробел не допускается'},
               { max: 16, message: 'Максимальное количество символов 16' },]}
            hasFeedback
         >
            <Input.Password />
         </Form.Item>

         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button block type="primary" htmlType="submit">
               Отправить
            </Button>
         </Form.Item>
      </Form>
   )
};

export default Registration;