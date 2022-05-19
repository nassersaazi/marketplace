import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4,1fr);
img {
  width: 100%;
  border-radius: 4px;
}

@media only screen and (max-width: 1300px) {
  grid-template-columns: repeat(2,1fr);
}


@media only screen and (max-width: 412px) {
  grid-template-columns: 1fr;
}
`

export const Container = styled.div`

    position: relative; 
    top:72px;
    overflow-x: hidden;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-weight:300;
    padding: 0 calc(12vw);
`
