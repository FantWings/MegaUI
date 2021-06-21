import styled from 'styled-components'
import { useState } from 'react'
import { Form, Input, Button, notification } from 'antd'

// useHooks
import useLoginCheck from '../hooks/useLoginCheck'

// Theme
import { ThemeColorDark } from '../utils/constent'

// useAPI
import { AuthAPI } from '../utils/api'

export default function Login() {
  useLoginCheck()
  const [isLoading, setLoading] = useState(false)
  const { logIn } = AuthAPI()

  const handleLogin = async (form: any) => {
    setLoading(true)
    await logIn(form)
    setLoading(false)
  }

  const onFinishFailed = (errorInfo: any) => {
    notification['error']({
      message: 'Invaid Content',
      description: errorInfo.errorFields[0].errors,
    })
    setLoading(false)
  }

  return (
    <LoginContain>
      <SectionLogin>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <Form
          name="basic"
          initialValues={{ remember: false }}
          onFinish={handleLogin}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="User Name"
            name="username"
            rules={[{ required: true, message: 'Username cannot be null.' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Password cannot be null.' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </SectionLogin>
    </LoginContain>
  )
}

const LoginContain = styled.div`
  display: flex;
  background-color: ${ThemeColorDark};
  height: 100%;
  justify-content: center;
  align-items: center;
`

const SectionLogin = styled.div`
  flex: 1;
  max-width: 450px;
  background-color: #fff;
  border-radius: 10px;
  padding: 35px;
`
