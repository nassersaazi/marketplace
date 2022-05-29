import React ,{ useEffect, useState} from "react";
import { Container, Hero, CardGrid } from './Styles';
import { Link  } from 'react-router-dom';
import { useGetServicesQuery } from '../services/serviceApi';

const Services = () => {

  const { data: servicesList, isFetching } = useGetServicesQuery();
  
  
  const [services, setServices] = useState();

  useEffect(() => {
    setServices(servicesList?.results?.data);

  }, [servicesList]);

  if (isFetching) {
    console.log("Fetching...")};
  
  return (
    <Container>
      <Hero>
      <section className="card-container ">
        <h2>Services</h2>
        <CardGrid>
        {
          services?.map((service) => (
            <Link to={`/services/${service.service_id}`} className="service" key={service.service_id}>
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
