import { Button, Checkbox, Form, Input } from 'antd';
import styles from './Auth.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/hooksState';
import { userLogin } from '../../store/user/userActions';
import { userLoginData } from '../../store/user/userTypes';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { USER_LOGOUT } from '../../store/user/userSlice';

function Auth() {
  const dispatch = useAppDispatch()
  const { isLoading, isSuccess, error, curUser } = useAppSelector((state) => state.user)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    if (location.pathname == '/logout') {
      dispatch(USER_LOGOUT());
      navigate('/auth');
    }

    if (isSuccess && curUser) {
      navigate('/');
    }

    if (error) {
      console.log(error)
    }


  }, [isSuccess, error])

  const onFinish = (values: userLoginData) => {
    dispatch(userLogin(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (
    <div >
      kminchelle 
0lelplR
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
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        {error && <p className={styles.test}>Введенные данные не верны</p>}
        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </div>
  )
}

export default Auth