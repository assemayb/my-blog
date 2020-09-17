import { Container, Heading, Text } from "theme-ui";
import theme from "../theme";
import Link from "next/link";

const BlogItem = ({ data }) => {
  return (
    <>
      <Link href="/blogs/[slug]" as={"/blogs/" + data.slug}>
        <div className="blog-item">
          <h2>{data.title}</h2>
          <h4>{data.createdAt}</h4>
        </div>
      </Link>
      <style jsx>
        {`
          .blog-item {
            width: 75%;
            cursor: pointer;
            margin-top: 1rem;
            background-color: #fefbd8
            padding: 0.5rem;
            text-align: center;
            font-size: 20px;
            border-radius: 10px;
            font-family: ${theme.fonts.monospace};
            box-shadow: 6px 9px 16px -4px rgba(0, 0, 0, 0.75);
          }
          .blog-item:hover {
            transition: 0.2s;
            background-color: #2F4F4F;
            color: SpringGreen;
          }
        `}
      </style>
    </>
  );
};

function Blogs({ allBlogs }) {
  return (
    <>
      <Container
        pt={2}
        pb={4}
        mt={3}
        mb={5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <div className="blogs-container">
          <h1
            style={{
              fontSize: "40px",
              color: "cadetblue",
              fontFamily: "monospace",
            }}
          >
            My Blogs
          </h1>
          {allBlogs.map((blog, idx) => {
            return <BlogItem key={idx} data={blog} />;
          })}
        </div>
      </Container>
      <style jsx>
        {`
          .blogs-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 90%;
          }
        `}
      </style>
    </>
  );
}

export default Blogs;
