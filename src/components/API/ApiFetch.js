import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styel from './apifetch.css';

function ApiFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5069/api/companies')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <table className='table'>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Country</th>
        <th>Employee</th>
      </tr>
        {data.map(item => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.country}</td>
            <td>{item.employees}</td>
          </tr>
        ))}
    </table>
  );
}

export default ApiFetch;
