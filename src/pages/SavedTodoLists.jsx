import React, { useEffect, useState } from 'react';
import CreateSavedList from '../components/CreateSavedList';
import SavedLists from '../components/SavedLists';

const SavedTodosPage = () => {
  const [savedLists, setSavedLists] = useState([]);

  useEffect(() => {
    // Fetch saved lists from the backend when the component mounts
    // Implement fetchSavedLists logic
  }, []);

  const fetchSavedLists = async () => {
    // Implement fetching saved lists logic
  };

  const handleSaveList = () => {
    // Implement saving list logic
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Saved Todo Lists</h1>
      <CreateSavedList onSave={handleSaveList} />
      <div>
        <h2 className="text-lg font-bold mb-2">Saved Lists</h2>
        {savedLists.map((list) => (
          <SavedLists key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default SavedTodosPage;