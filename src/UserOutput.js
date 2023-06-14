import React from 'react';

const UserOutput = ({ username }) => {
  const paragraphStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'blue',
  };

  return (
    <div>
      <p style={paragraphStyle}>My name is {username}.</p>
      <p>I am a Techpreneur.</p>
    </div>
  );
};

export default UserOutput;
