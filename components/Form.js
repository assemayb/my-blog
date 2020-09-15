import { Field, Message, Button, Heading, Textarea, Container } from "theme-ui";
import theme from "../theme";

export default function Form() {
  const handleChange = (inputName, inputVal) => {
    console.log(inputName, inputVal);
  };
  return (
    <div style={styles.inputForm}>
      <Container>
        {/* <Message variant="success" color="yellowDark">This is just a message for someone to read</Message> */}

        <h2
          style={{
            fontSize: "35px",
            color: "#2F4F4F",
            fontFamily: "monospace",
          }}
        >
          Write to me if you want!
        </h2>
        <Field
          label="Email"
          name="email"
          defaultValue=""
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Field
          label="Your Name"
          name="name"
          defaultValue=""
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <Textarea
          p={1}
          m={1}
          defaultValue="Write a Message to me...."
          rows={7}
        />
      </Container>
      <Button> send email</Button>
    </div>
  );
}

const styles = {
  inputForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
