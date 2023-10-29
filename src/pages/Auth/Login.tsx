import { Input, Button, Form } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LoginOutlined,
} from "@ant-design/icons";
import StyledAuth from "./style";

const Login = () => {
  return (
    <StyledAuth>
      <h1 className="auth__title">Login</h1>
      <Form layout="vertical">
        <Form.Item label="Ismingizni kiriting" rules={[{ required: true }]}>
          <Input className="inp" name="name" />
        </Form.Item>

        <Form.Item label="Email" rules={[{ required: true }]}>
          <Input className="inp" type="email" name="email" />
        </Form.Item>

        <Form.Item label="Parol kiriting" rules={[{ required: true }]}>
          <Input.Password
            className="inp"
            type="password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            name="password"
          />
        </Form.Item>
        <Button type="primary" icon={<LoginOutlined />}>
          Hisobga kirish
        </Button>
      </Form>
    </StyledAuth>
  );
};

export default Login;
