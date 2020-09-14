import { Field, Message, Button, Heading, Textarea, Container } from "theme-ui";

export default function Form() {
  const handleChange = (inputVal) => {
    console.log(inputVal);
  };
  return (
    <div style={styles.inputForm}>
      <Container>
        {/* <Message variant="success" color="yellowDark">This is just a message for someone to read</Message> */}

        <Heading marginY="20px" as="h2">
          Write to me if you want!
        </Heading>
        <Field label="Email" name="email" defaultValue="" />
        <Field
          label="Your Name"
          name="name"
          defaultValue=""
          onChange={(e) => handleChange(e.target.value)}
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
