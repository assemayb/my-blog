import React, { Fragment, useEffect, useState } from "react";
import Form from "../components/Form";

import { Button, Divider } from "theme-ui";
import Layout from "../components/Layout";
import Questions from "../components/personal-questions";
import Blogs from "../components/Blogs";

import blogs from "../data/index-page-data";

export default function index({ allBlogs }) {
  const [showQuestions, setShowQuestions] = useState(false);
  
  const toggleQuestions = () => {
    setShowQuestions(prev => !prev)
  }

  return (
    <Layout>
      <>
        <Blogs allBlogs={allBlogs} />
        <Divider />
        <Button onClick={toggleQuestions}> 
          {showQuestions === false ? ("show") : ("hide")} personal questions  
        </Button>
        {showQuestions && (
          <Questions
            setShowQuestions={setShowQuestions}
            showCloseButton={true}
          />
        )}
        <Divider />
        <div className="form">
          <Form />
        </div>

        <style jsx>
          {`
            .form {
              padding: 3rem;
              margin-top: 4rem;
            }
          `}
        </style>
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const allBlogs = blogs;
  return {
    props: {
      allBlogs,
    },
  };
}
