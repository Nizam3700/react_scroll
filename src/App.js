import { useRef, useState } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import { FaDownload } from "react-icons/fa";
import myimage from "../src/Assests/myimage.png";
import mypro from "../src/Assests/mypro.png";

function App() {
  const home = useRef(null);
  const skills = useRef(null);
  const project = useRef(null);
  const exp = useRef(null);
  const contacts = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <ScrollToTop />
      <div className="hero">
        {/* navbar start  */}
        <nav className="dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a
              href="#Home"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={(myimage)} className="h-14" alt="Flowbite Logo" />
              <span className="self-center text-white  text-2xl font-semibold whitespace-nowrap dark:text-white">
                Portfolio
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white flex bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2"
              >
                Resume <FaDownload className="ml-3 mt-1" />
              </button>
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={menuOpen}
                onClick={handleMenuClick}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen? '' : 'hidden'}`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 text-white md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li onClick={() => scrollToSection(home)} className="link">
                  Home
                </li>
                <li onClick={() => scrollToSection(skills)} className="link">
                  Skills
                </li>
                <li onClick={() => scrollToSection(project)} className="link">
                  Projects
                </li>
                <li onClick={() => scrollToSection(exp)} className="link">
                  Experenices
                </li>
                <li onClick={() => scrollToSection(contacts)} className="link">
                  Contact Me
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* navbar start  */}


      <div ref={home} className="home">
        <h3>home</h3>
        {/* <!-- home start  --> */}
    <h2 class="text-4xl font-extrabold text-green-600 m-6" id="Home">
      Welcome
    </h2>
    <main class=" block md:flex md:justify md:ml-10">
      <h2 class="text-4xl font-extrabold text-green-600 absolute left-2 right-2 md:hidden">
        Welcome
      </h2>
      <div class="ml-2">
        <h1
          class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Hi,I'm<span class="text-blue-600 dark:text-yellow-400">
            Shaik Nizamuddin</span
          >
        </h1>
        <p
          class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
        >
          Web Developer in Java & React, I build some industry ready projects
          Self-independent,<br />
          reliable and friendly individual who works hard to achieve my goals.
          <br />
          Adaptable quickly and organized well. Interested in learning the
          latest web <br />
          &software technologies quickly.Able to work well in teams as well as
          individually. <br />
          My future goal is to build the application help to end billion users.
        </p>

        <a href="">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4"
          >
            View Resume <i class="fa-solid fa-eye ml-1"></i>
          </button>
        </a>

        <figure class="max-w-screen-md mx-auto text-center">
          <svg
            class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path
              d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
            />
          </svg>
          <blockquote>
            <p
              class="text-2xl italic font-medium text-gray-900 dark:text-white"
            >
              "Measuring
              <span class="text-blue-600 dark:text-red-500"
                >programming progress</span
              >
              by lines like Measuring
              <span class="text-blue-600 dark:text-grey-500"
                >aircraft building</span
              >
              progressby weight."
            </p>
          </blockquote>
          <figcaption
            class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse"
          >
            <img
              class="w-6 h-6 rounded-full"
              src="https://m.economictimes.com/thumb/msid-104763154,width-1200,height-1200,resizemode-4,imgsize-267720/bill-gates-5-frugal-habits-of-the-billionaire-you-may-know.jpg"
              alt="bill gates image"
            />
            <div
              class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700"
            >
              <cite class="pe-3 font-medium text-gray-900 dark:text-white"
                >Bill Gates</cite
              >
            </div>
          </figcaption>
        </figure>
      </div>
      <div>
        <img
          class="rounded-full w-96 h-96 md:mr-28"
          src={(mypro)}
          alt="image description"
        />
      </div>
    </main>
    {/* <!-- home end  --> */}
      </div>
      <div ref={skills} className="skills">
        <h3>skills</h3>
        {/* <!-- skills start --> */}
    <h2 class="text-4xl font-extrabold text-green-600 m-6" id="Skills"></h2>
    <section class="mt-28">
      <h2
        class="text-4xl font-extrabold ml-7 text-center mb-5 text-blue-400 underline decoration-1"
      >
        Skills
      </h2>
      <main>
        <div>
          <div
            id="tooltip-jese"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Jese Leos
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <img
            data-tooltip-target="tooltip-jese"
            class="w-10 h-10 rounded"
            src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
            alt="Medium avatar"
          />
        </div>
        <div>
          <div
            id="tooltip-roberta"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Roberta Casas
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <img
            data-tooltip-target="tooltip-roberta"
            class="w-10 h-10 rounded"
            src="/docs/images/people/profile-picture-4.jpg"
            alt="Medium avatar"
          />
        </div>
        <div>
          <div
            id="tooltip-bonnie"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Bonnie Green
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <img
            data-tooltip-target="tooltip-bonnie"
            class="w-10 h-10 rounded"
            src="/docs/images/people/profile-picture-3.jpg"
            alt="Medium avatar"
          />
        </div>
      </main>
      <main></main>
    </section>
    {/* <!-- skills end --> */}
      </div>

      
      <div ref={project} className="project">
        <h3>Projects</h3>
        {/* <!-- project start  --> */}

    <h2 class="text-4xl font-extrabold text-green-600 ml-7" id="Project"></h2>
    <main class="mt-24">
      <h2
        class="text-4xl font-extrabold ml-7 text-center mb-5 text-blue-400 underline decoration-1"
      >
        Projects
      </h2>
      {/* <!-- other diev  --> */}

      <section class="ml-14 md:ml-28">
        <div
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://crio-directus-assets.s3.ap-south-1.amazonaws.com/bcf8d7c1-09ec-40d6-9e8a-1047648e7e9f.png"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>

    {/* <!-- project end  --> */}

      </div>
      <div ref={exp} className="exp">
        <h3>Exprience</h3>
      </div>
      <div ref={contacts} className="contacts">
        <h3>Contact me</h3>
      </div>






    </div>
  );
}

export default App;
