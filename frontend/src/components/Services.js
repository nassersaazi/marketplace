import styled from 'styled-components';
import data from '../data';

const Services = () => {
  return (
      <section>
        <h2>Services</h2>
        <Discover>
        {
          data.services.map((service) => (
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
      </Discover>
      <div className="loader"><a href='/home'><span>LOAD MORE</span></a></div>
      </section>
  );
}


const Discover = styled.div`
  display: grid;
gap: 1rem;
grid-template-columns: repeat(4,1fr);
img {
  width: 100%;
  border-radius: 4px;
}    
`
export default Services;
