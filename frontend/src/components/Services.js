import React ,{ useEffect, useState} from "react";
import { Container, Hero, CardGrid } from './Styles';
import { Link  } from 'react-router-dom';

const Services = () => {
  
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/services");
      const jsonData = await response.json();

      setServices(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    getServices();
  }, []);


  return (
    <Container>
      <Hero>
      <section className="card-container ">
        <h2>Services</h2>
        <CardGrid>
        {
          services.map((service) => (
            <Link to={`/service/${service.service_id}`} className="service" key={service.service_id}>
              <img src={service.image_url} alt={service.s_name}/>
              <div className="service_description">
                <p>{service.s_description}</p>
                <div className="service_details">
                  <p>{service.organisation}</p>
                  <p>Uploaded {service.upload_date}</p>
                  <p>{service.s_name}</p>
                </div>
              </div>
            </Link>
          ))
        }
      </CardGrid>
      <div className="loader"><Link to='/services'><span>LOAD MORE</span></Link></div>
      </section>
      </Hero>
    </Container>
  );
}

export default Services;
