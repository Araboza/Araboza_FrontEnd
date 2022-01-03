import styled from "styled-components";

export const AddWrapper = styled.div`
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: calc(90vh - 50px);
  padding-bottom: 10px;

  .uploadImg {
    margin-bottom: 10px;

    input {
      border: none;
      outline: none;
    }
    .cover_img {
      cursor: pointer;
      width: 100%;
      margin: 0 auto;
      height: 30vh;
      background-repeat: no-repeat;
      background-size: 80%;
      background-position: center;
    }

    span {
      padding: 10px;
      background: #e2e2e2;
      border-radius: 10px;
    }
  }

  & > input[type="text"] {
    width: 100%;
    border: none;
    border-bottom: 1px solid #e2e2e2;
    outline: none;
    height: 7vh;
    background: none;
    font-size: 2.3rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .ql-container {
    font-size: 1.1rem;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tags {
      input {
        outline: none;
        border: none;
        font-size: 1rem;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        max-width: 500px;
        margin-bottom: 10px;

        li {
          padding: 5px 10px;
          margin: 5px;
          background: #e2e2e2;
          border-radius: 50px;
          cursor: pointer;
        }
      }
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      font-weight: bold;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        background: #e2e2e2;
      }
    }
  }
`;
