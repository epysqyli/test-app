import Head from "next/head";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import UserResult from "../components/UserResult";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const [users, setUsers] = useState(null);
  const [usernameParam, setUsernameParam] = useState(
    router.query.username || ""
  );

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
          <SearchBar updateUsers={updateUsers} cachedQuery={usernameParam} />
        </div>

        {users ? (
          <div className="my-10 w-11/12 grid gap-y-1 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
            {users.map((user) => (
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                key={user.id}
              >
                <div className="my-2 p-2 shadow-md rounded-md hover:shadow-lg cursor-pointer bg-pewter-blue hover:bg-dark-pewter-blue active:bg-ming animate-show-up">
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
