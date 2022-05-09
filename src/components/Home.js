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
        <Button>Upload</Button>
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

const Button = styled.button`
    display: inline-block;
    background: linear-gradient(to right, #A94F33,#0871FC);
    padding: 0.875rem 2.1875rem;
    border-radius: 50px;
    color: #1F1D2B;
    font-weight: 400;
    font-size: 0.875rem;
    transition: opacity 300ms ease-in-out;
`

const Hero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 2rem;

div {
  padding: 2rem 4rem;

}
button {
  margin: 0 2rem;
}
`
export default Home;
