import styled from 'styled-components';
import data from '../data';

const Home = () => {
  return (
    <Container >
      <Hero>
      <h1>Discover and share services offered by different NRENs</h1>
      <p>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
      <div>
        <Button>Explore</Button>
      </div>
      </Hero>
      <main>
        <h2>Discover</h2>
        <Discover>
        {
          data.services.map((service) => (
            <div className="service" key={service.id}>
              <img src={service.image} alt={service.name}/>
              <div className="service_description">
              <p>{service.date}</p>
              <p>{service.nren}</p>
              </div>
            </div>
          ))
        }
      </Discover>
      </main>
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
const Discover = styled.div`
  display: grid;
gap: 1.875rem;
grid-template-columns: repeat(4,1fr);
img {
  width: 100%;
}    
`

const Button = styled.span`
    background: linear-gradient(to right, #A94F33,#0871FC);
    font-size: 15px;
padding: 0px 24px;
height: 56px;
border-radius: 1rem;
cursor: pointer;
display: flex;
    align-items: center;
    justify-content:center;
    color: #1F1D2B;
    transition: opacity 300ms ease-in-out;
    letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
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
