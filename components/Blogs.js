import { Container, Heading, Text } from "theme-ui";

export default function Blogs() {
  return (
    <Container
      bg="muted"
      p={4}
      mt={3}
      mb={3}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
    >
      <Heading>Blogs</Heading>
    </Container>
  );
}
