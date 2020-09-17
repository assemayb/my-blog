import fs from "fs";
import path, { parse } from "path";
import Head from "next/head";
import Blogs from "../../data/index-page-data";
import marked from "marked";
import matter from "gray-matter";

import Layout from "../../components/Layout";
import theme from "../../theme";

export default function Blog({ data, content }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <Layout>
        <div className="blog-content">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </Layout>

      <style jsx>
        {`
          .blog-content {
            margin-top: 5rem;
            margin-bottom: 5rem;
            margin-left: 4rem;
            margin-right: 4rem;
            padding: 3rem;
            background-color: white;
            border-radius: 6px;
            background-color: #2f4f4f;
            color: white;
            font-family: ${theme.fonts.monospace};
            font-size: 25px;
          }
          .blog-content:hover {
            transition: 0.6s;
            background: linear-gradient(120deg, black, blue);
            text-shadow: none;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            border: 5px solid black; 
          }
        `}
      </style>
    </>
  );
}

export async function getStaticPaths() {
  const allBlogsSlugs = fs.readdirSync("posts").map(blog => blog.replace(".md", ""))
  const paths = allBlogsSlugs.map((slug) => ({
    params: {
      slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const markDownContent = fs
    .readFileSync(path.join("posts", `${slug}.md`))
    .toString();
  const parsedMarkdown = matter(markDownContent);
  const data = parsedMarkdown.data;
  const parsedHTMLString = marked(parsedMarkdown.content);
  return {
    props: {
      data,
      content: parsedHTMLString,
    },
  };
}
