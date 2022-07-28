import React ,{ useEffect, useState} from "react";
import { Container, Hero, CardGrid, CTA } from './Styles';
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
   
      <section className="card-container ">
        <div className="card-header">
        <h2>Services</h2>
        <div className="card-buttons">
        <CTA className="loader">
        <Link to='/addService'>ADD SERVICE</Link>
      </CTA>
        <CTA className="loader">
        <Link to='/addCategory'>ADD CATEGORY</Link>
      </CTA>
      </div>
      </div>
        <CardGrid>
        {
          services?.map((service) => (
            <Link to={`/services/${service.id}`} className="service" key={service.id}>
              <img src={service.image_url} alt={service.name}/>
              <div className="service_description">
                <p>{service.description}</p>
                <div className="service_details">
                <p>Organisation: {service.organisation_id}</p>
                  <p>Uploaded {service.creation_date}</p>
                  <p>{service.name}</p>
                </div>
              </div>
            </Link>
          ))
        }
      </CardGrid>
      <CTA className="loader b-radius-on">
        <Link to='/services'><span>LOAD MORE</span></Link>
      </CTA>
      </section>
     
  );
}

export default Services;
