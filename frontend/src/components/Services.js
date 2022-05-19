import styled from 'styled-components';
import data from '../data';
import { Container, Hero, Card } from './Styles';
import { Link  } from 'react-router-dom';

const Services = () => {
  return (
    <Container>
      <Hero>
      <section className="card-container ">
        <h2>Services</h2>
        <Card>
        {
          data.services.map((service) => (
            <Link to="/service" className="service" key={service.id}>
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
            </Link>
          ))
        }
      </Card>
      <div className="loader"><Link to='/services'><span>LOAD MORE</span></Link></div>
      </section>
      </Hero>
    </Container>
  );
}

export default Services;
