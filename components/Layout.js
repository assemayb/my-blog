import Head from "next/head";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Blog</title>
      </Head>

      <main>
        <div className="container">
          <Nav />
          {children}
        </div>
      </main>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 0.5rem;
            margin-left: 4rem;
            margin-right: 4rem;
          }
        `}
      </style>
    </>
  );
}
