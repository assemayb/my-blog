import React from "react";
import { useForm, ValidationError } from "@statickit/react";

import { Field, Message, Button, Textarea } from "theme-ui";

export default function Form() {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return (
      <Message p={4} m={2} bg="green">
        Thanks, Message has been sent successfully.
      </Message>
    );
  }

  return (
    <div>
      <form className="inputForm" onSubmit={handleSubmit}>
        <h2>Write to me if you want!</h2>
        <Field
          style={{ width: "450px" ,marginBottom: "1rem" }}
          label="Email"
          id="email"
          type="email"
          name="email"
          defaultValue=""
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Textarea
          p={2}
          m={1}
          id="message"
          name="message"
          placeholder="Write a Message to me...."
          rows={7}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <Button
          className="submit-button"
          type="submit"
          disabled={state.submitting}
        >
          submit
        </Button>
      </form>
      <style jsx>
        {`
          h2 {
            font-size: 35px;
            color: #2f4f4f;
            font-family: monospace;
          }
          .inputForm {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
