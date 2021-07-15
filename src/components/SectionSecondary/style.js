import styled from "styled-components";

export const SectionPrimary = styled.section`
  width: auto;
  height: auto;
  background-color: #0f4c75;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;

  @media(min-width: 769px) { 
    display: flex;
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  color: #E8F0F2;
  text-align: center;
  margin-bottom: 1%;
` 
export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
  position: relative;

  img:hover {
    opacity: 0.9;
  }

  @media(min-width: 769px) { 
    display: flex;
    flex-direction: column;
  }
`

export const Promo = styled.span`
  width: 100px;
  height: 100px;
  background-color: #1B262C;
  color: #E8F0F2;
  font-weight: bold;
  font-size: 1.7rem;
  border-radius: 1000px;
  border: solid 1px #0F4C75;
  position: absolute;
  top: 215px;
  left: 208px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 100ms;
  &:hover{
    transform: scale(1.1)
  }

  @media(min-width: 769px) { 
    top: 210px;
    left: 210px;
    display: flex;
    flex-direction: row;
  }
`