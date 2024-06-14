import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './apifetch.css'; // Ensure this file exists and contains your styles
import { Link } from 'react-router-dom';

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
    <div className="apifetch-container">
      <h2>Company List</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.country}</td>
              <td>
                <a href={`edit/${item.id}`}>Edit</a> 
                <br/>
                <a href={`delete/${item.id}`}>Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiFetch;
