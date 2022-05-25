import styled from "styled-components";
import { Container, CardFlex, Hero } from "./Styles";
import { Link } from "react-router-dom";

const Service = () => {
  const serviceData = {
    id: 1,
    image: "https://ubuntunet.net/app/uploads/2022/02/africa-net-works.jpeg",
    name: "Web Hosting",
    date: "2022-04-21",
    nren: "MAREN",
  };

  return (
    <Container>
      <Hero>
        <section className="card-container ">
        <h2>{serviceData.name}</h2>
          <CardFlex>
              <div className="service" >
                <img src={serviceData.image} alt={serviceData.name} />
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
                    <p>{serviceData.nren}</p>
                    <p>Uploaded {serviceData.date}</p>
                    <p>Web Hosting</p>
                  </div>
                </div>
              </div>
          </CardFlex>
          <div className="loader">
            <a href="https://github.com">
              <span>GO TO SERVICE </span>
            </a>
          </div>
        </section>
      </Hero>
    </Container>
  );
};

export default Service;
