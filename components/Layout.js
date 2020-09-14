import Head from "next/head";
import Link from "next/link";
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

      <div>{/* For the Footer */}</div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
            margin-top: 1rem;
          }
        `}
      </style>
    </>
  );
}
