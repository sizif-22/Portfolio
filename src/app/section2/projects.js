"use client";
import { Projects, Quotes, GH } from "../data.json";
const ProjectsComponent = () => {
  return (
    <div className="px-[10%] md:px-[5%] lg:px-[10%] min-h-screen mt-10 py-10  select-none">
      <div>
        <h1 className="text-3xl">Things I’ve Built :</h1>
      </div>

      <div className="lg2:grid lg:grid-cols-3 flex flex-wrap justify-items-center justify-center md:justify-around items-center gap-10 py-20">
        {Projects.map((project, index) => (
          <div
            key={index}
            className="p-2 bg-secondaryColor relative rounded-[11px] lg:h-[320px] lg:w-[320px] h-[360px] w-[280px] border-2 border-[rgba(255,255,255,0.2)] hover:border-white transition-all hover:scale-105 group"
          >
            <h1 className="text-3xl font-[JockeyOne] bt-1">{project.name}.</h1>
            <p className="text-l mb-2">
              Primarily Made Using :{" "}
              <span className="text-2xl font-[JockeyOne]">
                {project.pmb[0]}
                {project.pmb[1] != null && (
                  <span className="font-sans text-[12px]">&</span>
                )}
                {project.pmb[1]}
              </span>
            </p>
            <p className="text-[15px] text-[rgba(255,255,255,0.7)]">
              {project.shortDescription}
            </p>
            <a
              href={project.GitHubRepo}
              className="absolute bg-primaryColor border-2 rounded-[11px] bottom-[20px] h-[40px] px-2 right-[-20px] border-[rgba(255,255,255,0.2)] group-hover:border-white delay-200 group-hover:right-[-40px] transition-all flex items-center justify-center hover: gap-2 group-hover:pr-3 active:scale-75"
              target="_blank"
            >
              View in Github
              <div className="relative h-full w-[25px] block ">
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                >
                  <g id="githubLink">
                    <path
                      id="tri2"
                      d="M16.8311 36.7695L16.8311 14.9513L35.3766 25.8604L16.8311 36.7695ZM18.7061 33.4882L31.6777 25.8604L18.7061 18.2325L18.7061 33.4882Z"
                      className=" absolute group-hover:translate-x-[10px] duration-500"
                    />
                    <path
                      id="tri1"
                      d="M17.4545 35.0936L17.4545 16.9118L32.9091 26.0027L17.4545 35.0936ZM19.017 32.3592L29.8267 26.0027L19.017 19.6461L19.017 32.3592Z"
                      className=" absolute translate-x-[-20px] fill-[#00000000] group-hover:fill-white group-hover:translate-x-0 transition-all delay-300"
                    />
                  </g>
                </svg>
              </div>
            </a>
          </div>
        ))}
        <div className="p-2 bg-secondaryColor rounded-[11px] lg:h-[320px] lg:w-[320px] h-[360px] w-[280px] border-2 border-[rgba(255,255,255,0.2)] hover:border-white transition-all flex flex-col justify-center items-center text-center gap-4 px-10 text-[rgba(255,255,255,0.7)]">
          And Many Other Projects, You Can Find Them All on My GitHub{" "}
          <a target="_blank" href={GH.GHLink} className="text-white underline">
            {GH.GHUserName}
          </a>{" "}
          🫡🫡
        </div>
      </div>

      <div className=" h-[5vh] mb-16 flex items-center justify-center">
        <p className="md:text-4xl text-2xl font-[Italianno] select-text">
          {Quotes[0]}
        </p>
      </div>
    </div>
  );
};
export default ProjectsComponent;
