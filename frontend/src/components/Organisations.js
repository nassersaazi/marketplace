import React from 'react'
import { Container, Hero, CardGrid ,CTA} from './Styles';
import { Link  } from 'react-router-dom';

const Organisations = () => {

  const orgData = [
    {
    "id": 1,
    "name": "RENU",
    "address": "Lorem ipsum dolor sit amet",
    "country": "Uganda",
    "creation_date": "2022-06-11T17:18:55.488Z",
    "services":4
},
{
    "id": 2,
    "name": "MAREN",
    "address": "Lorem ipsum dolor sit amet",
    "country": "Malawi",
    "creation_date": "2022-06-11T17:19:07.630Z",
    "services":6
},
{
    "id": 5,
    "name": "ZAMREN",
    "address": "Lorem ipsum dolor sit amet",
    "country": "Zambia",
    "creation_date": "2022-06-11T17:26:53.502Z",
    "services": 8
}]
    return (
        
          <section className="card-container ">
          <div className="card-header">
        <h2>Organisations</h2>
        <div className="card-buttons">
        <CTA className="loader">
        <Link to='/addService'>ADD ORGANISATION</Link>
      </CTA>
      
      </div>
      </div>
            
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Country</th>
                  <th>Address</th>
                  <th>Services</th>
                </tr>
              </thead>
              <tbody>
                
                {orgData.map((org) => (
                  <tr>
                  <td >{org.name}</td>
                  <td>{org.country}</td>
                  <td>{org.address}</td>
                  <td>{org.services}</td>
                  <td>
                  <CTA className="loader">
                    <Link to='/addService'>EDIT</Link>
                  </CTA>  
                  </td>
                  <td>
                  <CTA className="loader">
                    <Link to='/addService'>DELETE</Link>
                  </CTA>  
                  </td>
                </tr>
                ))
            }
              </tbody>
 
          </table>
          <CTA className="loader b-radius-on">
            <Link to='/services'><span>LOAD MORE</span></Link>
          </CTA>

          </section>
      );
}

export default Organisations



