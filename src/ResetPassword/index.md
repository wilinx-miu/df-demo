---
nav:
  title: ''
  path: /components
---

## ResetPassword

Demo:

```tsx
import React, {  useState } from 'react';
import { ResetPassword } from 'df-demo';
import { Button } from 'antd'

export default function ResetPasswordCom () {
  const [openModal, setOpenModal] = useState(false)

  const cancel  = () => {
    setOpenModal(false)
  }

  const openModalFun = () => {
    setOpenModal(true)
  }

  const submit = (normalInfo, EncryptInfo) => {
    console.log('校验通过，查看提交信息(明文）：', normalInfo)
    console.log('校验通过，查看提交信息(加密）：', EncryptInfo)
  }

  return (
    <>
      <Button onClick={openModalFun}>修改密码</Button>
      <ResetPassword 
        openModal={openModal} 
        cancel={cancel} 
        submit={(normalInfo, EncryptInfo) => submit(normalInfo, EncryptInfo)}
      />
    </>
  )
}

```


