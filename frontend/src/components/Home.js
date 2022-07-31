import React ,{ useEffect, useState} from "react";
import { Container, Hero,Button, CardGrid,CTA } from "./Styles";
import {Services, Organisations, Users } from "./";
import { toast } from "react-toastify";
import { useGetServicesQuery } from '../services/serviceApi';

const Home = () => {
  const { data: servicesList, isFetching } = useGetServicesQuery();
  
  
  const [services, setServices] = useState();



  useEffect(() => {
    setServices(servicesList?.results?.data);

  }, [servicesList]);
  //if (isFetching) return <Loader />;
  return ( 
    <>
    
    <Container>
      <Hero>
        {/* <h1>Discover and share services offered by different NRENs</h1>
        <p>
          In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus
          vestibulum nibh mi venenatis
        </p> */}
        <div>
        <Services/>
        <br/>
        {/* <Organisations/>
        <br/>
        <Users/> */}
        </div>
      </Hero>
    </Container>
    </>
  );
};

export default Home;
