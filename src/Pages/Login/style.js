import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 70%;
  h1 {
    margin: 10px 0;
  }
  .text {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .login {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
`;

export const RegisterWrapper = styled.div`
  width: 70%;
  h1 {
    font-size: 3rem;
  }

  .register-text {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 15px 0;
  }

  input {
    width: 60%;
    height: 40px;
    font-size: 1rem;
    outline: none;
    border: none;
    border-radius: 10px;
    background: #dbdbdb;
    padding: 0 10px;
    margin-right: 20px;
  }
  button {
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 10px;
    height: 40px;
    background: #cccccc;
    cursor: pointer;

    &:hover {
      background: #aaaaaa;
    }
  }

  .errorMessage {
    color: #ff0000;
  }
`;
