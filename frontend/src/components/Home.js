import styled from 'styled-components';

const Home = () => {
  return (
    <Container >
      <Hero>
      <h1>Discover and share services offered by different NRENs</h1>
      <p>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
      <div>
        <Button><p>Explore</p></Button>
      </div>
      </Hero>
    </Container>
  );
}

const Container = styled.div`

    position: relative; 
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    top: 72px;
    padding: 0 calc(12vw);
`

const Discover = styled.div`
  display: grid;
gap: 1.875rem;
grid-template-columns: repeat(4,1fr);
img {
  width: 100%;
}    
`


const Button = styled.div`
    background: rgba(152, 180, 220, 0.5);
    font-size: 15px;
padding: 0px 24px;
height: 56px;
border-radius: 1rem;
cursor: pointer;
display: flex;
    align-items: center;
    justify-content:center;
    transition: opacity 300ms ease-in-out;
    letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;

&:hover {
  background: rgba(152, 180, 220,0.8);
}
p {
  font-weight: bold;
  font-size: 20px;
}
`

const Hero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 2rem;
    text-align: center;

div {
  padding: 2rem 4rem;

}
button {
  margin: 0 2rem;
}
`
export default Home;
