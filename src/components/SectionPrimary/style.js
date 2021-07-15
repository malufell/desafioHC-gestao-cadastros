import styled from "styled-components";

export const SectionSecondary = styled.section`
  width: auto;
  height: auto;
  background-color: #3282b8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 50% 50%;
    .imageBox {
        padding-left: 30%;
      }
    .contentBox {
      padding-right: 30%;
    }
  }
`;

export const BoxImage = styled.article`
  width: auto;
  height: 100%;
  margin: auto;
  img {
    height: 400px;
  }
`;

export const BoxContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`;

export const Title = styled.h2`
  color: #1b262c;
  font-size: 1.5rem;
`;

export const SubTitle = styled.span`
  color: #bbe1fa;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 10px auto;
`;

export const MensagemConfirmacao = styled.span`
  background-color: #4aa96c;
  color: #e8f0f2;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 10px auto;
  padding: 2px 10px 2px 10px;
`;

export const MensagemErro = styled.span`
  background-color: #da0037;
  color: #e8f0f2;
  border-radius: 8px;
  font-weight: bold;
  margin: 10px auto;
  padding: 2px 10px 2px 10px;
`;

export const BoxEmail = styled.div`
  width: 300px;
  height: 50px;
  background-color: #e8f0f2;
  display: flex;

  input {
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
    color: #333333;
    border: 0;
    padding: 0 16px;
    outline: none;
    ::placeholder {
      color: #333333;
      opacity: 0.8;
    }
    &:hover {
      background-color: #E8F0F2;
    }
  }

  button {
    background-color: #1b262c;
    color: #ffffff;
    font-weight: bold;
    border: 0;
    padding: 0 12px;
    cursor: pointer;
    outline: none;
  }
`;
