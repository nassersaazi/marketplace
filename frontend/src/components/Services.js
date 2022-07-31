import React ,{ useEffect, useState} from "react";
import { Container, Hero, CardGrid, CTA } from './Styles';
import { Link  } from 'react-router-dom';
import { useGetServicesQuery } from '../services/serviceApi';
import axiosInstance from '../axios'

const Services = () => {

  

  // const { data: servicesList, isFetching } = useGetServicesQuery();
  
  
  const [services, setServices] = useState();

  useEffect(() => {
    axiosInstance.get().then((res) => {
      const allServices = res.data;
      setServices(allServices);
      console.log(res.data);
    });
    

  }, [setServices]);

  // if (isFetching) {
  //   console.log("Fetching...")};

  
  return (
   
      <section className="card-container ">
        <div className="card-header">
        <h2>Services</h2>
        {/* <div className="card-buttons">
        <CTA className="loader">
        <Link to='/addService'>ADD SERVICE</Link>
      </CTA>
        <CTA className="loader">
        <Link to='/addCategory'>ADD CATEGORY</Link>
      </CTA>
      </div> */}
      </div>
        <CardGrid>
        {
          services?.map((service) => (
            <Link to={`/service/${service.id}`} className="service" key={service.id}>
              <img src="https://ubuntunet.net/app/uploads/2022/02/africa-net-works.jpeg" alt={service.name}/>
              <div className="service_description">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className="service_details">
                <p>Provider: RENU</p>
                  <p>Uploaded {service.creationdate}</p>
                  
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
