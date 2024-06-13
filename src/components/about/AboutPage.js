// AboutPage.js
import React from 'react';

function AboutPage() {
  return (
    <div>
      <h2>About Student CRUD Application</h2>
      <p>
        This student CRUD application allows users to perform basic operations (Create, Read, Update, Delete) on student records.
      </p>
      <h3>Features:</h3>
      <ul>
        <li>Create, view, edit, and delete student records</li>
        <li>Search and filter functionality for students</li>
        <li>User authentication and authorization</li>
        <li>Responsive design for mobile and desktop</li>
        {/* Add more features as needed */}
      </ul>
      <h3>Creators:</h3>
      <ul>
        <li>John Doe - Frontend Developer</li>
        <li>Jane Smith - Backend Developer</li>
        <li>Mike Johnson - UI/UX Designer</li>
        {/* Add more contributors as needed */}
      </ul>
    </div>
  );
}

export default AboutPage;
