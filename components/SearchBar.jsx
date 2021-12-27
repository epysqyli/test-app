import { useState } from "react";
import { Search } from "react-feather";
import apiCalls from "../lib/apiCalls";

const SearchBar = ({ updateUsers }) => {
  const [username, setUsername] = useState(null);

  const handleChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") searchUsers();
  };

  const searchUsers = async () => {
    const users = await apiCalls.searchByUsername(username);
    updateUsers(users.data.items);
  };

  return (
    <div className="flex group rounded-md shadow-md">
      <input
        type="text"
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        className="border-none bg-white w-5/6 rounded-tl-lg rounded-bl-lg focus:outline-none group-hover:shadow-md transition py-2 px-5"
        placeholder="Search for any github user by username"
        required
      />

      <button
        type="submit"
        onClick={searchUsers}
        className="w-1/6 text-center bg-white border-l rounded-tr-lg rounded-br-lg hover:bg-gray-200 group-hover:shadow-md transition active:bg-gray-400 active:text-white"
      >
        <Search size={20} className="mx-auto" color="gray" />
      </button>
    </div>
  );
};

export default SearchBar;
