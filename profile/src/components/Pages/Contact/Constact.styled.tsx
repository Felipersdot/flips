import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { Form, Field } from 'formik';

// Global style for setting the background color of the entire page
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #34495e;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

// Keyframes for shake animation
const shake = keyframes`
  0%, 100% {
    margin-left: 0px;
  }
  20%, 80% {
    margin-left: -12px;
  }
  40%, 60% {
    margin-left: 12px;
  }
`;

// Styled components
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #191919;
  text-align: center;

  div {
    background: #191919;
  }

  @media (max-width: 500px) {
    color: red;
    background-color: pink;
  }
`;

export const Input = styled(Field)`
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 100%;
  max-width: 200px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  box-shadow: none; // Resetting any box-shadow

  &:focus {
    max-width: 280px;
    border-color: #2ecc71;
  }

  &.shake {
    animation: ${shake} 0.2s ease-in-out 0s 2;
    border-color: red;
  }
`;

export const TextArea = styled(Field)`
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 100%;
  max-width: 200px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  box-shadow: none; // Resetting any box-shadow

  &:focus {
    max-width: 280px;
    border-color: #2ecc71;
  }

  &.shake {
    animation: ${shake} 0.2s ease-in-out 0s 2;
    border-color: red;
    color: black;
  }
`;

export const Select = styled(Field)`
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 30px;
  width: 100%;
  max-width: 200px;
  outline: none;
  color: black;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
  box-shadow: none; // Resetting any box-shadow

  &:focus {
    border-color: #2ecc71;
    background-color: #191919;
  }
`;

export const SubmitButton = styled.button`
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;

  &:hover {
    background: #2ecc71;
  }
`;

export const ErrorMessageStyled = styled.div`
  padding-top: 1px;
  margin-top: -1.4em;
  margin-bottom: 1.4em;
  display: block;
  padding-left: 20px;
  color: red;
  background-image: url('../img/icon-warning.png');
  background-position: left 3px;
  animation: ${shake} 0.2s ease-in-out 0s 2;
  box-shadow: 0 0 0.5em red;
`;

export const FieldWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }
`;
