import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function InsertCompany() {
  const navigate = useNavigate();
  const [newData, setNewData] = useState({ name: '', address: '', country: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleInsert = () => {
    axios.post('http://localhost:5069/api/companies', newData)
      .then(response => {

        alert('Data inserted successfully:', response.data);
        setNewData({ name: '', address: '', country: '' });
        navigate('/data');

      })
      .catch(error => {
        console.error('Error inserting data: ', error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2>Insert New Company</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              value={newData.name} 
              onChange={handleInputChange} 
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="address">Address:</label>
            <input 
              type="text" 
              className="form-control" 
              id="address" 
              name="address" 
              value={newData.address} 
              onChange={handleInputChange} 
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="country">Country:</label>
            <input 
              type="text" 
              className="form-control" 
              id="country" 
              name="country" 
              value={newData.country} 
              onChange={handleInputChange} 
            />
          </div>
          <button 
            className="btn btn-success mt-4" 
            onClick={handleInsert}
          >
            Insert
          </button>
        </div>
      </div>
    </div>
  );
}

export default InsertCompany;
