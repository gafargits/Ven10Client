import React, {useEffect, useContext} from 'react';
import {Table} from 'reactstrap';
import {GlobalContext} from '../context/GlobalState';

const UnFiltered = () => {
  const {getCarOwnersWithUnFiltered, owners} = useContext(GlobalContext)
  useEffect(() => {
    getCarOwnersWithUnFiltered();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
    <h4>Non-Filtered List</h4>
    <Table striped>
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Car Model</th>
          <th>Car Model Year</th>
          <th>Gender</th>
          <th>Job Title</th>
          {/* <th colSpan={5}>Bio</th> */}
        </tr>
      </thead>
      <tbody>
      {owners.map(owner => (
        <tr key={owner.id}>
          <td>{owner.id}</td>
          <td>{owner.first_name}</td>
          <td>{owner.last_name}</td>
          <td>{owner.email}</td>
          <td>{owner.country}</td>
          <td>{owner.car_model}</td>
          <td>{owner.car_model_year}</td>
          <td>{owner.gender}</td>
          <td>{owner.job_title}</td>
          {/* <td colSpan={5}>{owner.bio}</td> */}
        </tr>
      ))}
      </tbody>
    </Table>
    </>
  );
}

export default UnFiltered
