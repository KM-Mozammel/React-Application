import React, { useState } from 'react';
import axios from 'axios';

function ApiFetch() {
  const [data, setData] = useState(null);
  const [id, setId] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleFetchById = () => {
    axios.get(`http://localhost:5069/api/companies/${id}`)
      .then(response => {
        setData(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    axios.put(`http://localhost:5069/api/companies/${data.id}`, data)
      .then(response => {
        setData(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error updating data: ', error);
      });
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:5069/api/companies/${data.id}`)
      .then(() => {
        setData(null);
        setId('');
      })
      .catch(error => {
        console.error('Error deleting data: ', error);
      });
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          value={id} 
          onChange={e => setId(e.target.value)} 
          placeholder="Enter ID" 
        />
        <button onClick={handleFetchById}>Fetch by ID</button>
      </div>
      {data && (
        <div>
          {isEditing ? (
            <div>
              <label>
                Id: 
                <input 
                  type="text" 
                  name="id" 
                  value={data.id} 
                  onChange={handleInputChange} 
                  disabled 
                />
              </label>
              <label>
                Name: 
                <input 
                  type="text" 
                  name="name" 
                  value={data.name} 
                  onChange={handleInputChange} 
                />
              </label>
              <label>
                Address: 
                <input 
                  type="text" 
                  name="address" 
                  value={data.address} 
                  onChange={handleInputChange} 
                />
              </label>
              <label>
                Country: 
                <input 
                  type="text" 
                  name="country" 
                  value={data.country} 
                  onChange={handleInputChange} 
                />
              </label>
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <table className='table'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.address}</td>
                  <td>{data.country}</td>
                </tr>
              </tbody>
            </table>
          )}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default ApiFetch;
