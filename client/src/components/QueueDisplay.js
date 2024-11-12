import React from 'react';

function QueueDisplay({ queues, current }) {
  return (
    <div className="queue-display">
      <h2>User Queues</h2>
      {queues.map((user, index) => (
        <div key={index} className="user-queue">
          <p>
            <strong>{user.name}</strong>: {user.packets} packets, {user.delay} seconds delay
          </p>
        </div>
      ))}
    </div>
  );
}

export default QueueDisplay;
