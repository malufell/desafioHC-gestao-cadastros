import styled from "styled-components";
import { keyframes } from "styled-components";

export const BoxLoading = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.8;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  animation: ${Rotate} 1s infinite;
  border: 16px solid #053742;
  border-radius: 50%;
  border-top-color: #E8F0F2;
  height: 200px;
  width: 200px;
`;