const { default: axios } = require("axios");

const searchByUsername = async (query) => {
  return await axios.get(
    `https://api.github.com/search/users?q=${query}+in:login`,
    {
      auth: { token: process.env.NEXT_PUBLIC_PAT },
    }
  );
};

module.exports = {
  searchByUsername,
};
