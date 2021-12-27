import Head from "next/head";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserResult from "../components/UserResult";

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
        <div className="mx-auto md:w-4/6 lg:w-3/6">
          <SearchBar updateUsers={updateUsers} />
        </div>

        {users ? (
          <div className="my-10 w-11/12 grid gap-y-1 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 mx-auto ">
            {users.map((user) => (
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                key={user.id}
              >
                <div className="my-2 p-2 shadow-md rounded-md hover:shadow-lg cursor-pointer bg-gray-100 active:bg-gray-200">
                  <UserResult user={user} />
                </div>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
