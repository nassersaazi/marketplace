import React ,{ useEffect, useState} from "react";
import {CTA} from './Styles';
import { Link  } from 'react-router-dom';
import { useGetUsersQuery } from '../services/serviceApi';

const Users = () => {

  const { data: usersList, isFetching } = useGetUsersQuery();
  
  
  const [users, setUsers] = useState();

  useEffect(() => {
    setUsers(usersList?.results?.data);

  }, [usersList]);

  if (isFetching) {
    console.log("Fetching...")};

    console.log(users)
  
  return (
          <section className="card-container ">
          <div className="card-header">
        <h2>Users</h2>
        <div className="card-buttons">
        <CTA className="loader">
        <Link to='/addUser'>ADD USER</Link>
      </CTA>
      
      </div>
      </div>
            
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Organisation</th>
                  <th>Role</th>
                  <th>Created By</th>
                </tr>
              </thead>
              <tbody>
                
                {users?.map((user) => (
                  <tr>
                  <td >{user.user_name}</td>
                  <td>{user.email}</td>
                  <td>{user.organisation}</td>
                  <td>{user.role}</td>
                  <td>{user.creator}</td>
                  <td>
                  <CTA className="loader">
                    <Link to='/editUser'>EDIT</Link>
                  </CTA>  
                  </td>
                  <td>
                  <CTA className="loader">
                    <Link to='/deleteUser'>DELETE</Link>
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
        
  )
}

export default Users