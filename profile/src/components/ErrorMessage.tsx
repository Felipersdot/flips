import React from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';
import { useStores } from '../hooks/useStores';
interface Props {
  error?: string;
  title?: string;
  message?: string;
}

const ErrorMessage: React.FC<Props> = ({ error, title, message }) => {
  const { formatMessage: f } = useIntl();
  const { authStore } = useStores();

  if (error) {
    if (error === 'Configurator session not found.') {
      return (
        <Container>
          <h1>{f({ id: 'error.configuratorSession.title' })}</h1>
          <p>{f({ id: 'error.configuratorSession.message' })}</p>
        </Container>
      );
    }

    if (error === 'This template has expired.') {
      return (
        <Container>
          <h1>{f({ id: 'error.expiredTemplate.title' })}</h1>
          <p>{f({ id: 'error.expiredTemplate.message' })}</p>
        </Container>
      );
    }

    if (error === 'Authorization required for requested functionality') {
      return (
        <Container>
          <h1>Access not allowed</h1>
          <p>{error}</p>
        </Container>
      );
    }
  }

  return (
    <Container>
      <h1>{title ? title : f({ id: 'error.default.title' })}</h1>
      <p>{message ? message : f({ id: 'error.default.message' })}</p>
    </Container>
  );
};

export default ErrorMessage;

const Container = styled.div`
  background: #1565c0; /* Dark shade of blue */
  color: pink; /* White text color */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 33vh;
  margin: auto; /* Center horizontally */
  position: relative;
  top: 33%; /* Adjust the value to move the div lower */
  h1 {
    font-family: Arial, sans-serif;
    font-weight: bold;
    font-size: 2rem; /* Adjust to your desired default font size */
    font-style: normal;
    text-align: center; /* Center the text horizontally */
    margin-bottom: 1rem; /* Optional: Add margin to separate h1 and p */
  }

  p {
    font-family: Arial, sans-serif;
    font-weight: bold;
    font-size: 1rem;
    font-style: normal;
    text-align: center; /* Center the text horizontally */
  }

  @media (max-width: 700px) {
    width: 100%;
    height: auto;

    h1 {
      font-size: 26px;
    }
    p {
      font-size: 18px;
    }
  }
`;
