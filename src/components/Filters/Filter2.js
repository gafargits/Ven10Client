import React, {useEffect, useContext} from 'react';
import {Table} from 'reactstrap';
import {GlobalContext} from '../../context/GlobalState';

const Filter2 = () => {
  const {getCarOwnersWithFilter2, owners} = useContext(GlobalContext)
  useEffect(() => {
    getCarOwnersWithFilter2();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
    <h4>Filter 2:</h4>
    <p>Year: 1990 - 2010, Gender: Both</p>
    <p>Countries: China, South Africa, France, Mexico, Japan, Estonia, Colombia</p>
    <p>Colors: Green, Violet, Yellow, Blue, Teal, Maroon, Red, Aquamarine, Orange, Mauv</p>
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
          {/* <th>Bio</th> */}
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
          {/* <td>{owner.bio}</td> */}
        </tr>
      ))}
      </tbody>
    </Table>
    </>
  );
}

export default Filter2
