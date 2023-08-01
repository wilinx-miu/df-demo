import { Button } from 'antd';
import type { ButtonProps } from 'antd';
import React from 'react';

interface IProps {
  children?: any;
}

const MyButton: React.FC<IProps & ButtonProps> = ({ children,  ...others }) => {
  return (
    <Button {...others}>
     {children}
    </Button>
  );
};

Object.assign(MyButton, Button);
export default MyButton;
