import React from 'react'
import { Button, Container, Hero } from "./Styles";

const AddCategory = () => {
  return (
    <Container>
      <Hero>
        <section className="card-container login">
        <div className="form">
          <form > 
           
            <div className="input-container">
              <label>Category Name </label>
              <input type="text" name="category"  />
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

export default AddCategory