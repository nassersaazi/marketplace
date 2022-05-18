import styled from 'styled-components';
import { Card } from './Styles'
import data2 from '../data2';

const Home = () => {
  return (
    <Container >
      <Hero>
      <h1>Discover and share services offered by different NRENs</h1>
      <p>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
        <section className="card-container">
        <Card className="p-home">
        {
          data2.services.map((service) => (
            <a href="/service" className="service" key={service.id}>
              <img src={service.image} alt={service.name}/>
              <div className="service_description">
              <p>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
              <p>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
                <div className="service_details">
                  <p>{service.nren}</p>
                  <p>Uploaded {service.date}</p>
                  <p>Web Hosting</p>
                </div>
              </div>
            </a>
          ))
        }
        </Card>
          </section>
      <Button className="loader"><a href='/home'><span>EXPLORE</span></a></Button>
      </Hero>
    </Container>
  );
}


const Container = styled.div`

    position: relative; 
    top:72px;
    overflow-x: hidden;
    height: 100vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-weight:300;
    padding: 0 calc(12vw);
`
const Button = styled.div`
    background: rgba(152, 180, 220, 0.5);
padding: 0px 24px;
height: 56px;
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

button {
  margin: 0 2rem;
}

h1 {
  font-size: 3rem;
}
`
export default Home;
