---
nav:
  title: ''
  path: /components
---

## LabLogin

Demo:

```tsx
import React from 'react';
import { LabLogin } from 'df-demo';
import { message } from 'antd';

export default () => <LabLogin 
  versionList={[{name: 'V1.0.0', date: '2023-08-01', remark: ['test1','test2']}]} 
  host={'https://new-labmonitor.dr-r.cn/api'}
  handleOk={(e)=>{
    console.log(e)
    message.success(e.loginName)
  }}
/>;
```


