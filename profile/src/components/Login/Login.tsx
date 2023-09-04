import React from 'react';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const Login: React.FC = () => {
    return (
        <LoginFormCenteredDiv>
            <img src="./paradigm_omnilogo.png" alt="Paradim Omni Logo" />
            <LoginFormWrapperDiv>
                <LoginForm />
            </LoginFormWrapperDiv>
        </LoginFormCenteredDiv>
    );
};

export default Login;

const LoginFormCenteredDiv = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;

    img {
        display: block;
        margin: 2rem auto;
    }
`;

const LoginFormWrapperDiv = styled.div`
    padding: 2rem;
    background: #ffffff;
    border: 1px solid #ddd;
    button {
        margin: 2rem 0;
        width: 100%;
        height: 55px;
        font-size: 20px;
    }
`;
