import { Search } from "react-feather";

const SearchForm = () => {
  return (
    <div className="flex group rounded-md shadow-md">
      <input
        type="text"
        name="tmp"
        id="tmp"
        className="border-none bg-white w-5/6 rounded-tl-lg rounded-bl-lg focus:outline-none group-hover:shadow-md transition py-2 px-5"
        required
      />

      <button
        type="submit"
        className="w-1/6 text-center bg-white border-l rounded-tr-lg rounded-br-lg hover:bg-gray-200 group-hover:shadow-md transition active:bg-gray-400 active:text-white"
      >
        <Search size={20} className="mx-auto" color="gray" />
      </button>
    </div>
  );
};

export default SearchForm;
