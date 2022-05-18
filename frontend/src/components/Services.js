import styled from 'styled-components';
import data from '../data';
import { Card } from './Styles';

const Services = () => {
  return (
      <section className="card-container mg-large">
        <h2>Services</h2>
        <Card>
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
      </Card>
      <div className="loader"><a href='/home'><span>LOAD MORE</span></a></div>
      </section>
  );
}

export default Services;
