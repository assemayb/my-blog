import fs from "fs";
import path, { parse } from "path";
import Head from "next/head";
import Blogs from "../../data/index-page-data";
import marked from "marked";
import matter from "gray-matter";

export default function Blog({ data, content }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <hr />
    </>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);
  const htmlString = marked(parsedMarkdown.content);

//   console.log(parsedMarkdown);
//   console.log(htmlString);

  return {
    props: {
      data: parsedMarkdown.data,
      content: htmlString,
    },
  };
}

export async function getStaticPaths() {
  const allBlogsSlugs = Blogs.map((blog) => blog.slug);
  const paths = allBlogsSlugs.map((blog) => ({
    params: {
      slug: blog,
    },
  }));
  console.log("paths", paths);
  return {
    paths,
    fallback: false,
  };
}
