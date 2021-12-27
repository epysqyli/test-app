import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Github Users Search</title>
        <meta name="homepage" content="Github users custom search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-4xl font-medium text-center mt-5">
        Github users search
      </div>
    </div>
  );
}

export default Home;