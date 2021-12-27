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
    // set expiration time to 24 hours
    const exp = 1000 * 60 * 60 * 24;
    const resp = await externalCall(query);
    cache.put(url, resp, exp);
    return resp;
  }
};

const searchByUsername = async (query) => {
  return await cacheCall(query);
};

module.exports = {
  searchByUsername,
};
