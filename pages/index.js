import React from "react";
import Form from "../components/Form";

import { Button, Field } from "theme-ui";
import Layout from "../components/Layout";

export default function index() {
  return (
    <Layout>
      <>
        <section>
          <div>this is the blogs section</div>
        </section>

        <div className="form">
        <Form />
        </div>
        
        <style jsx>
            {`

            .form {
              padding: 3rem;
              margin-top: 4rem;
            }`

            }
        </style>
      </>
    </Layout>
  );
}
