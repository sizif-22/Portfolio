import Section1 from "./section1/section1";
import ProjectsComponent from "./section2/projects";
import TeckStackComponent from "./section2/techStack";

const Home = () => {
  return (
    <div>
      <Section1 />

      <ProjectsComponent />
      <TeckStackComponent />
    </div>
  );
};
export default Home;
