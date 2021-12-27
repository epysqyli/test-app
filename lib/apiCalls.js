const { default: axios } = require("axios");

const searchByUsername = async (query) => {
  return await axios.get(
    `https://api.github.com/search/users?q=${query}+in:login`,
    {
      auth: { token: process.env.NEXT_PUBLIC_PAT },
    }
  );
};

// const searchByUsername = async () => {
//   const resp = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
//   return resp.data;
// };

module.exports = {
  searchByUsername,
};
