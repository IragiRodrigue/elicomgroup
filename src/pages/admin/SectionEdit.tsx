import React from 'react';
import { useParams } from 'react-router-dom';

const SectionEdit = () => {
  const { id } = useParams();
  const isNewSection = !id;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        {isNewSection ? 'Create New Section' : 'Edit Section'}
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Section Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2"
              placeholder="Enter section name"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company
            </label>
            <select
              id="company"
              name="company"
              className="w-full px-3 py-2"
            >
              <option value="">Select a company</option>
              <option value="1">Acme Corp</option>
              <option value="2">Globex Corporation</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="w-full px-3 py-2"
              placeholder="Enter section description"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              {isNewSection ? 'Create Section' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionEdit;