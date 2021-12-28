import { useState, useEffect } from "react";
import { Search } from "react-feather";
import { searchByUsername } from "../lib/apiCalls";
import { addToHistory } from "../lib/storageService";

const SearchBar = ({ updateUsers, cachedQuery }) => {
  const [username, setUsername] = useState(null);

  const handleChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };

  const searchUsers = async () => {
    if (cachedQuery) username = cachedQuery;
    const users = await searchByUsername(username);
    updateUsers(users.data.items);
    addToHistory(username);
  };

  const submitForm = (e) => {
    e.preventDefault();

    searchUsers();
  };

  useEffect(() => {
    if (cachedQuery) searchUsers();
  }, []);

  return (
    <form className="flex group rounded-md shadow-md" onSubmit={submitForm}>
      <input
        type="text"
        onChange={handleChange}
        className="border-none bg-white w-5/6 rounded-tl-lg rounded-bl-lg focus:outline-none group-hover:shadow-md transition py-2 px-5"
        placeholder="Search for any github user"
        minLength={1}
        required
      />

      <button
        type="submit"
        className="w-1/6 text-center bg-white border-l rounded-tr-lg rounded-br-lg hover:bg-gray-200 group-hover:shadow-md transition active:bg-gray-400 active:text-white"
      >
        <Search size={20} className="mx-auto" color="gray" />
      </button>
    </form>
  );
};

export default SearchBar;
