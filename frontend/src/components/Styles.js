import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  img {
    width: 100%;
    border-radius: 4px;
  }

  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 412px) {
    grid-template-columns: 1fr;
  }
`;

export const CardFlex = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    border-radius: 4px;
  }
`;


export const Button = styled.div`
  background: rgba(152, 180, 220, 0.5);
  padding: 0px 24px;
  margin: 1rem;
  height: 56px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 300ms ease-in-out;
  letter-spacing: 1.8px;
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    background: rgba(152, 180, 220, 0.8);
  }
  p {
    font-weight: bold;
    font-size: 20px;
  }
`;
export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem;

  button {
    margin: 0 2rem;
  }

  h1 {
    font-size: 3rem;
  }
`;

export const Container = styled.div`
  position: relative;
  top: 72px;
  overflow-x: hidden;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-weight: 300;
  padding: 0 calc(12vw);
`;
