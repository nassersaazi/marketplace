import React ,{ useEffect, useState} from "react";
import { Container, Hero,Button, CardGrid } from "./Styles";
import { Link } from "react-router-dom";
import { useGetServicesQuery } from '../services/serviceApi';

const Home = () => {
  const { data: servicesList, isFetching } = useGetServicesQuery();
  
  
  const [services, setServices] = useState();

  useEffect(() => {
    setServices(servicesList?.results?.data);

  }, [servicesList]);
  //if (isFetching) return <Loader />;
  return (
    <Container>
      <Hero>
        <h1>Discover and share services offered by different NRENs</h1>
        <p>
          In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus
          vestibulum nibh mi venenatis
        </p>
        <section className="card-container">
          <CardGrid className="p-home">
            {services?.map((service) => (
              <Link to={`/services/${service.service_id}`} className="service" key={service.service_id}>
                <img src={service.image_url} alt={service.s_name} />
                <div className="service_description">
                  <p>
                    {service.s_description}
                  </p>
                  <div className="service_details">
                    <p>{service.organisation}</p>
                    <p>Uploaded {service.upload_date}</p>
                    <p>Web Hosting</p>
                  </div>
                </div>
              </Link>
            ))}
          </CardGrid>
        </section>
        <Button className="loader">
          <Link to="/services">
            <span>EXPLORE</span>
          </Link>
        </Button>
      </Hero>
    </Container>
  );
};

export default Home;
