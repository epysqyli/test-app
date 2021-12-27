const cache = require("memory-cache");
const { default: axios } = require("axios");

const externalCall = async (query) => {
  return await axios.get(
    `https://api.github.com/search/users?q=${query}+in:login`,
    {
      auth: { token: process.env.NEXT_PUBLIC_PAT },
    }
  );
};

const cacheCall = async (query) => {
  const url = `https://api.github.com/search/users?q=${query}+in:login`;
  const cachedResp = await cache.get(url);

  if (cachedResp) {
    return cachedResp;
  } else {
    const resp = await externalCall(query);
    cache.put(url, resp, 10000000);
    return resp;
  }
};

const searchByUsername = async (query) => {
  return await cacheCall(query);
};

module.exports = {
  searchByUsername,
};
