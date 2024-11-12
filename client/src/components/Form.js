import React, { useState } from 'react';

function Form({ addUser }) {
  const [user, setUser] = useState({ name: '', packets: '', delay: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure packets and delay are converted to numbers
    const newUser = {
      ...user,
      packets: parseInt(user.packets, 10) || 0,
      delay: parseInt(user.delay, 10) || 0,
    };

    if (newUser.packets > 0 && newUser.delay >= 0) {
      addUser(newUser);
      setUser({ name: '', packets: '', delay: '' });
    } else {
      alert('Please enter valid values for packets and delay.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="User Name"
        value={user.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="packets"
        placeholder="Number of Packets"
        value={user.packets}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="delay"
        placeholder="Delay (in seconds)"
        value={user.delay}
        onChange={handleChange}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default Form;
