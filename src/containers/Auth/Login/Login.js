import React from 'react';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

import './Login.scss';

class Login extends React.Component{
    render(){
        return (
            <div>
                <Input />
                <Input />
                <Button>
                    Login
                </Button>
            </div>
        )
    }
}

export default Login;