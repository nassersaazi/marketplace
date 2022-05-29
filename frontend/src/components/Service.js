import React ,{ useEffect, useState} from "react";
import { Container, CardFlex, Hero } from "./Styles";
import { useParams } from "react-router-dom";
import { useGetServiceDetailsQuery } from '../services/serviceApi';

const Service = () => {

  const { s_id } = useParams();

  const { data, isFetching } = useGetServiceDetailsQuery(s_id);

  const serviceData = data?.results?.data;
  if (isFetching) return "Fetching...";
  
  return (
    <Container>
      <Hero>
        <section className="card-container ">
        <h2>{serviceData.s_name}</h2>
          <CardFlex>
              <div className="service" >
                <img src={serviceData.image_url} alt={serviceData.s_name} />
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
                    <p>{serviceData.organisation}</p>
                    <p>Uploaded {serviceData.upload_date}</p>
                    <p>Web Hosting</p>
                  </div>
                </div>
              </div>
          </CardFlex>
          <div className="loader">
            <a href="https://ubuntunet.net/">
              <span>GO TO SERVICE </span>
            </a>
          </div>
        </section>
      </Hero>
    </Container>
  );
};

export default Service;
