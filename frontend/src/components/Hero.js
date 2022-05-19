import styled from 'styled-components';

const Hero = () => {
  return (

      <Intro>
      <h1>Discover and share services offered by different NRENs</h1>
      <p>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
      </Intro>
  );
}


const Intro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 2rem;
    text-align: center;

div {
  padding: 2rem 4rem;

}
button {
  margin: 0 2rem;
}

h1 {
  font-size: 2rem;
}
`
export default Hero;
