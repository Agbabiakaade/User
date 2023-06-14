import React, { useState } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleButtonClick = () => {
    setUsername('');
  };

  return (
    <div className="app">
      <h1>User Input and Output</h1>
      <UserInput onChange={handleInputChange} value={username} />
      <UserOutput username={username} />
      <button onClick={handleButtonClick}>Change Username</button>
    </div>
  );
};

export default App;
