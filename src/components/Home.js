import styled from 'styled-components';

const Home = () => {
  return (
    <Container >
      Home
    </Container>
  );
}

const Container = styled.main`

    position: relative; 
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`

export default Home;
