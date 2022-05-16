import styled from 'styled-components';
import data from '../data';

const Services = () => {
  return (
      <section>
        <h2>Services</h2>
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
      <div className="loader"><a href='/home'><span>LOAD MORE</span></a></div>
      </section>
  );
}


const Discover = styled.div`
  display: grid;
gap: 1.875rem;
grid-template-columns: repeat(4,1fr);
img {
  width: 100%;
}    
`
export default Services;
