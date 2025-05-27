import React from 'react';
import { useParams } from 'react-router-dom';

function UserEdit() {
  const { id } = useParams();
  const isNewUser = !id;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        {isNewUser ? 'Create New User' : 'Edit User'}
      </h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">User edit form will be implemented here.</p>
      </div>
    </div>
  );
}

export default UserEdit;