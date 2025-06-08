import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Flex, Form, Input, Button, Divider } from 'antd';
import '@ant-design/v5-patch-for-react-19';
export default function Login({ loginSuccess }) {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const actionLogin = async (values) => {
        const { username, password } = values;
        if (username === 'test' && password === 'test1234') {
            const userData = {
                id: 1,
                username,
                password,
            };
            if (loginSuccess?.(userData) !== false) {
                // login(userData);
                console.log('Login Success!');
                navigate('/systemPage');
            }
        }
        else {
            alert('username or password Error');
        }
    };
    return (React.createElement(Layout, { style: { background: '#181818', height: '100vh' } },
        React.createElement(Flex, { vertical: true, gap: "middle", style: { width: 200, alignItems: 'center', margin: 'auto' } },
            React.createElement(Form, { form: form, onFinish: actionLogin },
                React.createElement(Form.Item, { name: 'username', rules: [
                        {
                            required: true,
                            message: 'Pleace enter your username!',
                        },
                        {
                            min: 4,
                            message: 'The username must be at least 4 characters',
                        },
                    ] },
                    React.createElement(Input, { placeholder: "Username", style: { background: ' #ffffffde' } })),
                React.createElement(Form.Item, { name: 'password', rules: [
                        { required: true, message: 'Place enter your password!' },
                        { min: 6, message: 'The username must be at least 6 characters' },
                    ] },
                    React.createElement(Input.Password, { placeholder: "Password", style: { background: ' #ffffffde' } })),
                React.createElement(Divider, { style: { width: 1, background: ' #3e3e3e' } }),
                React.createElement(Button, { type: "primary", htmlType: "submit", style: {
                        background: 'linear-gradient(to top, #3a76be, #6fd4ff)',
                        boxShadow: 'inset 0 0 10px 0 #353d53',
                        border: 0,
                        outline: 'none',
                    } }, "Login")))));
}
