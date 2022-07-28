import React ,{ useEffect, useState} from "react";
import { Container, CardFlex, Hero,CTA } from "./Styles";
import { useParams } from "react-router-dom";
import { useGetServiceDetailsQuery } from '../services/serviceApi';

const Service = () => {

  const { id } = useParams();
  console.log(`service id, ${id}`)

  const { data, isFetching } = useGetServiceDetailsQuery(id);

  const serviceData = data?.results?.data;
  console.log(serviceData)
  if (isFetching) return "Fetching...";
  
  return (
    <Container>
      <Hero>
        <section className="card-container ">
        <h2>{serviceData.name}</h2>
          <CardFlex>
              <div className="service" >
                <div>
                <img src={serviceData.image_url} alt={serviceData.name} />
                </div>
                <div className="service_description">
                  <p>
                    {serviceData.description}
                  </p>
                  <p>
                    {serviceData.description}
                  </p>
                  <p>
                    {serviceData.description}
                  </p>
                  <p>
                    {serviceData.description}
                  </p>
                  <div className="service_details">
                    <p>Organisation: {serviceData.organisation_id}</p>
                    <p>Uploaded {serviceData.creation_date}</p>
                    <p>{serviceData.name}</p>
                    <p>Category: {serviceData.category_id}</p>
                  </div>
                </div>
              </div>
          </CardFlex>
          <CTA className="loader">
            <a href="https://ubuntunet.net/">
              <span>GO TO SERVICE </span>
            </a>
          </CTA>
        </section>
      </Hero>
    </Container>
  );
};

export default Service;
