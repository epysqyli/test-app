import Head from "next/head";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Github Users Search</title>
        <meta name="homepage" content="Github users custom search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-4/5 mx-auto ">
        <div className="text-4xl font-medium text-center mt-5">
          Github users search
        </div>

        <div className="mt-10">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
