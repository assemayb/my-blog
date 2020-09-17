import { Container, Text, Box, Heading, Close } from "theme-ui";
import theme, { customHeading } from "../theme";

export default function Questions({ setShowQuestions, showCloseButton }) {
  const closeQuestionsSection = () => {
    setShowQuestions(false);
  };
  return (
    <>
      <Container
        bg="#93c4c9"
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
        {showCloseButton == true && (
          <div id="close-icon" onClick={closeQuestionsSection}>
            <Close />
          </div>
        )}
        <Text sx={customHeading(false)}>Personal Questions</Text>

        <div className="questions-section">
          <div>
            <h1> - What languages <span style={{fontSize: '7px'}}>i think</span> I am good at?</h1>
            <h4> Python, Javascript, C++ and Golang. </h4>
          </div>

          <div>
            <h1> - My Favorite Language? </h1>
            <h4>
              {" "}
              Python is my favorite because of its simple syntax and it seems
              more intuitive to me than any other one.{" "}
            </h4>
          </div>

          <div>
            <h2> - My Favorite technologies to work with?</h2>
            <h4>
              {" "}
              React for the frontend, and Django for the backend, but Express js
              is amazing as well and has more utilities and also faster with
              API’s.
            </h4>
          </div>

          <div>
            <h2>- What Language to suggest for beginners?</h2>
            <h4>
              Javascript, for sure. JS is by far the most powerful, prolific and easiest
              language now to build almost any type of applications with.
            </h4>
          </div>
          <div>
            <h2>- When did I start to code?</h2>
            <h4>Nearly 3.5 years ago.</h4>
          </div>
        </div>
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
        .questions-section {
          display: flex;
          flex-direction: column;
          align-items: start;
          padding-left: 4rem;
          padding-right: 2rem;
        }
        .questions-section:hover {
          transition: 0.6s;
          background: linear-gradient(90deg, SpringGreen, black, SpringGreen);
          text-shadow: none;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </>
  );
}
