import { Input, Modal, message } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
// import { CloseOutlined } from '@ant-design/icons'

let CryptoJS = require('crypto-js')

interface Props {
  cancel: any
  openModal: boolean
  submit: any
}

const ResetPassword: React.FC<Props> = ({ cancel, openModal, submit }) => {

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState<any>('')
  const [newPassword1, setNewPassword1] = useState<any>('')

  const onFinish = () => {
    if (checkPassword()) {
      let params = {
        user: "DEMO",
        oldPassword: oldPassword,
        newPassword: newPassword,
        newPassword1: newPassword1
      }
      //密码格式校验通过
      submit(params, Encrypt(JSON.stringify(params)))
    }
  }

  //密码格式校验
  const checkPassword = () => {
    //判断密码是否符合
    let numArr = newPassword1.match(
      // eslint-disable-next-line max-len
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F])[\da-zA-Z\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]{8,}$/
    )
    if (numArr == null) {
      message.warning('密码要同时包括数字、字母、特殊字符')
      return false
    }
    return true
  }

  // AES加密
  const Encrypt = (str: any) => {
    let key = CryptoJS.enc.Utf8.parse('1234567890ABCDEF') // 密钥：一个常量，前后端协定后一个字符串即可
    let iv = CryptoJS.enc.Utf8.parse('0123456789ABCDEF') // 偏移量：一个常量，前后端协定后一个字符串，前后端一致即可

    let srcs = CryptoJS.enc.Utf8.parse(str)
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC, // mode 与后台一致。有多个模式可选
      padding: CryptoJS.pad.Pkcs7, //
    })

    // 需要返回base64格式的加密结果，使用此句
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)

  }


  const footer = [
    <RowCom key="confirm">
      <UpdateVersion
        onClick={() => {
          if (newPassword !== newPassword1) {
            message.warning('两次新密码不一致')
            return
          } else {
            onFinish()
          }
        }}
      >
        确 认
      </UpdateVersion>
    </RowCom>,
  ]

  return (
    <Modal
      title={'修改密码'}
      open={openModal}
      onOk={() => { }}
      onCancel={cancel}
      width={'490px'}
      style={{ top: 230 }}
      // closeIcon={<CloseOutlined style={{ color: '#fff', fontSize: '10px' }} />}
      footer={footer}
    >
      <Content>
        <p>修改密码</p>
        <RowContainer top={true}>
          <Title>用户名：</Title>
          <Input
            disabled={true}
            placeholder={'DEMO'}
            style={{ width: '300px' }}
          />
        </RowContainer>
        <RowContainer>
          <Title>旧密码：</Title>
          <Input
            onChange={(e: any) => {
              setOldPassword(e.target.value)
            }}
            placeholder="请输入旧密码"
            style={{ width: '300px' }}
          />
        </RowContainer>
        <RowContainer>
          <Title>新密码：</Title>
          <Input
            onChange={(e: any) => {
              setNewPassword(e.target.value)
            }}
            placeholder="请输入8-12位密码，包括英文、数字、符号"
            style={{ width: '300px' }}
          />
        </RowContainer>
        <RowContainer thelast={true}>
          <Title>重复新密码：</Title>
          <Input
            onChange={(e: any) => {
              setNewPassword1(e.target.value)
            }}
            placeholder="请再次输入新密码"
            style={{ width: '300px' }}
          />
        </RowContainer>
      </Content></Modal>
  )
}

export default ResetPassword


const RowContainer: any = styled.div`
  margin-top: ${(props: any) => props.top ? '0' : '40px'};
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: ${(props: any) => (props.thelast ? '10px' : '-25px')};
  & > span {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    padding-top: 20px;
  }
`


const Title = styled.div`
  width: 90px;
  font-size: 12px;
  font-weight: 500;
  color: #000000;
  text-align: right;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    height: 18px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    line-height: 27px;
    margin-bottom: -10px;
  }
`

const UpdateVersion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 27px;
  background: linear-gradient(136deg, #4ce3ff 0%, #4cbeff 0%, #3e77ff 100%);
  border-radius: 28px;
  font-size: 13px;
  cursor: pointer;
  color: #ffffff;
`

const RowCom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`
