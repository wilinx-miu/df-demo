// import vsIcon from '../assets/images/versionIcon.png'
// import IconFont from '@/components/IconList'
// import { versionList } from '@/constants'
import { Button, Form, Input, message } from 'antd'
import React, {useState} from 'react'
import { fakeAccountLogin } from '@/services/login'
import './style.less'
import axios from 'axios'
import { useRequest } from 'ahooks'

interface Props {
  Logo?: any
  versionList: { name: string, date: string, remark: string[] }[]
  host?: string
  handleOk: any
}

const LabLogin: React.FC<Props> = ({ Logo, versionList, host, handleOk }) => {


  // const { signin, loading } = useModel('user')
  const { run: signin, loading } = useRequest(fakeAccountLogin, {
    manual: true,
    onSuccess: (res: any) => {
      if (res.code === 200) {
        message.success('登录成功！')
      } else {
        message.error(res.msg)
      }
    },
  })

  const onFinish = (values: any) => {
    // signin(host, values)
    handleOk(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className='wrap'>
      <div className='main'>
        <div className='header'>
          {/* <IconFont type="icon-login_logo" className={styles.logo} /> */}
          {Logo}
          <div className='title'>实验室监控</div>
        </div>

        <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <div className='content'>
            <Form.Item name="loginName" rules={[{ required: true, message: '请输入账号' }]}>
              <Input
                className='input'
                placeholder={'请输入账号'}
              />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
              <Input.Password
                className='input'
                placeholder={'请输入密码'}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" loading={loading} htmlType="submit" className='btn'>
                登录
              </Button>
            </Form.Item>
            <div className='remark'>
              <div className='que'>?</div>
              忘记密码请联系管理员
            </div>
          </div>
        </Form>
      </div>
      <div className='version'>
        {/* <img src={vsIcon} alt="" /> */}
        <span>{versionList[0].name}</span>
      </div>
    </div>
  )
}

export default LabLogin
