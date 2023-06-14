import React from 'react';

const UserInput = ({ onChange, value }) => {
  const inputStyle = {
    padding: '20px',
    fontSize: '20px',
  };

  return (
    <div>
      <input
        type="text" placeholder='Write your name'
        onChange={onChange}
        value={value}
        style={inputStyle}
      />
    </div>
  );
};

export default UserInput;
