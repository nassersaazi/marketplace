import styled from "styled-components";
import { Container, Hero,Button, CardGrid } from "./Styles";
import { Link } from "react-router-dom";
import data2 from "../data2";

const Home = () => {
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
            {data2.services.map((service) => (
              <a href="/service" className="service" key={service.id}>
                <img src={service.image} alt={service.name} />
                <div className="service_description">
                  <p>
                    In aenean posuere lorem risus nec. Tempor tincidunt aenean
                    purus purus vestibulum nibh mi venenatis
                  </p>
                  <p>
                    In aenean posuere lorem risus nec. Tempor tincidunt aenean
                    purus purus vestibulum nibh mi venenatis
                  </p>
                  <div className="service_details">
                    <p>{service.nren}</p>
                    <p>Uploaded {service.date}</p>
                    <p>Web Hosting</p>
                  </div>
                </div>
              </a>
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
