import { Container } from "theme-ui";
import theme from "../theme";

const ProjectItem = ({ data }) => {
  return (
    <>
      <div className="proj-item">
        <h2>{data.title}</h2>
        <h3>{data.details}</h3>
      </div>
      <style jsx>
        {`
          .proj-item {
            //   width: 80%;
            cursor: pointer;
            margin-top: 2rem;
            background-color: #fefbd8;
            padding: 2rem;
            text-align: center;
            font-size: 20px;
            border-radius: 10px;
            font-family: ${theme.fonts.monospace};
            box-shadow: 6px 9px 16px -4px rgba(0, 0, 0, 0.75);
          }
          .proj-item:hover {
            transition: 0.2s;
            background-color: #2f4f4f;
            color: SpringGreen;
          }
        `}
      </style>
    </>
  );
};
export default function Projects() {
  const projectsData = [
    {
      title: "movie-scussion",
      details:
        "A web Application that's basically an IMDB replcia with many features like voting for certain movies and sharing opinions (Django – React)",
    },
    {
      title: "Lyrics Finder",
      details:
        "A React Native App that searchs for songs’ lyrics using a public API",
    },
    {
      title: "Chat App",
      details: "Small Chat Application using the Django Channels library",
    },
    {
      title: "No Title",
      details:
        "Node JS application for Quizzing students using Express JS, React , MongoDB, JWT (json web token)",
    },
    {
      title: "SURV",
      details:
        "A Flask/React App for generating Surveys and Forms with detailed info about surveys submissions using charts and graphical display.",
    },
    {
      title: "My Personal Blog",
      details:
        "Built with Next js amazing static site generation feature with Theme UI for the interface components but most of it is done with plain html/css and Static Kit for the form submission",
    },
  ];
  return (
    <>
      <Container
        pt={2}
        pb={4}
        mt={3}
        mb={5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <div className="projects-container">
          <h1
            style={{
              fontSize: "50px",
              color: "cadetblue",
              fontFamily: "monospace",
            }}
          >
            My Projects
          </h1>

          {projectsData.map((singleProj, idx) => {
            return <ProjectItem key={idx} data={singleProj} />;
          })}
        </div>
      </Container>
      <style jsx>
        {`
          .projects-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 80%;
          }
        `}
      </style>
    </>
  );
}
