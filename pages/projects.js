import Head from "next/head";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

export default function () {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects</title>
        </Head>
        <Projects />
      </Layout>
    </>
  );
}
