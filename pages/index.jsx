import Head from "next/head";
import { GitHub } from "react-feather";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const Home = () => {
  const [users, setUsers] = useState(null);

  const updateUsers = (usersResult) => {
    setUsers(usersResult);
  };

  return (
    <div>
      <Head>
        <title>Github Users Search</title>
        <meta name="homepage" content="Github users custom search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-4/5 mx-auto">
        <div className="flex items-center justify-center gap-x-5 mt-5">
          <GitHub size={48} className="bg-gray-50 p-2 rounded-full shadow-md" />
          <div className="text-4xl font-medium">Github search</div>
        </div>

        <div className="mt-10">
          <SearchBar updateUsers={updateUsers} />
        </div>
      </div>
    </div>
  );
};

export default Home;
