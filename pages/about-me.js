import Head from "next/head";
import Layout from "../components/Layout";
import Question from "../components/personal-questions";
import { Container } from "theme-ui";
import theme from "../theme";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className="main-container">
        <Container
          bg="blue"
          p={4}
          mt={3}
          mb={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            position: "relative",
          }}
        >
          <div className="info">
            <p>
              Hey there, I am Assem Sayed, I am computer science student and
              will be a senior in action starting next fall. My passion is web
              development and building applications in general. My current goal
              is to build some type of a framework or a library for developers
              and contribute to the software industry and also gain deep
              understanding of the technologies I am using.
            </p>
          </div>
        </Container>
        <Question showCloseButton={false}/>
      </div>
      <style jsx>
        {`
          .main-container {
            padding: 1rem;
            margin-top: 1rem;
          }
          .info {
            padding: 1rem;
            margin: 1rem;
            border-radius: 90px;
            border-left-top-radius: 60px;
          }
          .info p {
            font-size: 25px;
            font-family: ${theme.fonts.heading};
            text-align: center;
            font-weight: bold
          }
          .info:hover {
            transition: 0.6s;
            background: linear-gradient(90deg, SpringGreen, black, SpringGreen);
            text-shadow: none;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
          }
        `}
      </style>
    </Layout>
  );
}
