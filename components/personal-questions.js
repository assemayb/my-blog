import { Container, Text, Box, Heading, Close } from "theme-ui";

export default function ({ setShowQuestions }) {
  const closeQuestionsSection = () => {
    setShowQuestions(false);
  };
  return (
    <>
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
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          position: "relative",
        }}
      >
        <div id="close-icon" onClick={closeQuestionsSection}>
          <Close />
        </div>
        <Text sx={{ fontSize: 5, fontWeight: "bold" }}>Personal Questions</Text>
        <p> - Question</p>
        <p> Answer</p>

        <p> - Question</p>
        <p> Answer</p>
      </Container>
      <style jsx>{`
        #close-icon {
          position: absolute;
          right: 2px;
          top: 2px;
          color: blue;
        }
        #close-icon:hover {
          color: red;
        }
      `}</style>
    </>
  );
}
