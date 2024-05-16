import React, { useState, useEffect } from 'react';

function UserData() {
  // State variables to store user input
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [userData, setUserData] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create data object
    const newData = {
      name: name,
      age: age
    };

    // Display data
    setUserData(newData);

    // Store data in localStorage
    localStorage.setItem('userData', JSON.stringify(newData));
  };

  // Function to load stored data from localStorage on page load
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <h2>Input Data:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
        <button type="submit">Create Data</button>
      </form>

      {userData && (
        <div>
          <h2>Output Data:</h2>
          <p>Name: {userData.name}</p>
          <p>Age: {userData.age}</p>
        </div>
      )}
    </div>
  );
}

export default UserData;
