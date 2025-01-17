import { Resume } from "../data.json";
const ResumeBTN = ()=>{
    return(
        <div
            className="py-2 px-3 select-none border-[rgba(255,255,255,0.20)] cursor-pointer border-2 rounded-[11px] transition-all hover:border-white absolute bottom-0 flex items-center group"
            onClick={(e) => {
              window.location.href = Resume;
            }}
          >
            Download Resume
            <div className=" relative h-[100%] w-[30px] ">
              <svg
                width="51"
                height="100"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" absolute -left-2 -top-1/2 -translate-y-1/2"
              >
                <g id="downloadSVG">
                  <path
                    id="tri3"
                    d="M16.1921 18.3117H34.3739L25.283 33.7663L16.1921 18.3117ZM18.9264 19.8742L25.283 30.6839L31.6395 19.8742H18.9264Z"
                    fill="white"
                    className=" absolute translate-y-[-30px] fill-transparent group-hover:translate-y-0 group-hover:fill-white transition-all"
                  />
                  <path
                    id="tri2"
                    d="M14.3734 17.4026H36.1915L25.2824 35.9481L14.3734 17.4026ZM17.6546 19.2776L25.2824 32.2492L32.9103 19.2776H17.6546Z"
                    fill="white"
                    className="absolute group-hover:translate-y-[30px] group-hover:fill-transparent transition-all"
                  />
                  <path
                    id="tri1"
                    d="M16.1921 18.3117H34.3739L25.283 33.7663L16.1921 18.3117ZM18.9264 19.8742L25.283 30.6839L31.6395 19.8742H18.9264Z"
                    fill="white"
                    className="absolute group-hover:translate-y-[10px] transition-all"
                  />
                </g>
              </svg>
            </div>
          </div>
    )
}
export default ResumeBTN;