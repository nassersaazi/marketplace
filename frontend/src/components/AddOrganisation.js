import React from 'react'
import { Button,Container, Hero } from "./Styles";

const AddOrganisation = () => {
  return (
    <Container>
      <Hero>
        <section className="card-container login">
        <div className="form">
          <form > 
           
            <div className="input-container">
              <label>Organisation Name </label>
              <input type="text" name="organisation"  />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
              <label>Address</label>
              <input type="text" name="address"  />
              {/* {renderErrorMessage("uname")} */}
            </div>
            
            <div className="button-container">
            <Button><input type="submit"  /></Button>
              
            </div>
          </form>
          
        </div>
        </section>
      </Hero>
    </Container>
  )
}

export default AddOrganisation