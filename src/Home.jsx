import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Icon from "./Icon";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <div className="flex  flex-col gap-10  ">
        <section
          id="home"
          className="bg-stone-100 flex flex-col justify-center items-center gap-14 md:gap-20 px-8 py-24 md:py-32 md:px-20 max-w-8xl md:pb-52"
        >
          <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-14 md:gap-20 ">
            <div>
              {" "}
              <img
                src="/leul-avater.jpg"
                alt="Avatar"
                className="avatar morph-effect h-60 w-60 sm:h-80 sm:w-80"
              />
            </div>
            <div className="flex flex-col items-center md:items-start gap-6">
              <h1 className=" text-center text-stone-800 md:text-start font-[900] tracking-wide text-3xl sm:text-5xl">
                Full-Stack MERN
                <p>
                  Developer{" "}
                  <img
                    src="/hi-img.png"
                    alt="waving_hand"
                    className=" h-10 inline"
                  ></img>
                </p>
              </h1>
              <p className="text-center md:text-start max-w-[32rem] text-stone-700 font-[400] ">
                Hi I'm Kemeriya Mohammed.I am passionate full stack engineer
                with React and Node(nest)Js developer based in Addis Ababa,
                Ethiopia
              </p>
              <Icon />
            </div>
          </div>
          <div className="flex flex-col gap-10 justify-center items-center">
            <p className=" border-b-2 border-stone-500 pb-3 font-[700]">
              Tech Stack{" "}
            </p>
            <div className="flex flex-col gap-8 justify-center">
              <ul className="flex gap-8 flex-wrap items-center justify-center ">
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=html,css"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=js,ts"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=tailwind,materialui"
                    alt="skill-icon"
                  />
                </li>
              </ul>
              <ul className="flex gap-8 flex-wrap items-center justify-center ">
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=nodejs,nestjs"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=postgres,mongodb,mysql"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=docker,postman"
                    alt="skill-icon"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="white flex flex-col justify-center items-center gap-14 md:gap-20 px-8 py-24 md:py-32 md:px-20 max-w-8xl md:pb-52"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-14 ">
            <div>
              {" "}
              <img
                src="/about-img.webp"
                alt="Avatar"
                className=" h-auto w-auto sm:h-96 sm:w-auto rounded-3xl "
              />
            </div>
            <div className="flex flex-col items-center md:items-start gap-6">
              <h3 className=" text-center md:text-start uppercase text-lg font-[850] text-blue-600">
                about me
              </h3>
              <h6 className=" text-center text-stone-800 font-[900] md:text-start text-2xl sm:text-2xl">
                Full-Stack Developer based <br />
                in Addis Ababa, Ethiopia
              </h6>
              <p className="text-center md:text-start max-w-[32rem]  text-stone-700 font-[400] ">
                Hey, my name is Kemeriya. I am passionate Mern-stack developer
              </p>
              <p className="text-center md:text-start max-w-[32rem]  text-stone-700 font-[400] ">
                my main stack currently is React in combination with MUI and
                Tailwind CSS and Node and Nest js with Express
              </p>
            </div>
          </div>
        </section>
        <section
          id="project"
          className="bg-stone-100 flex flex-col justify-center items-center gap-14 md:gap-20 px-8 py-24 md:py-32 md:px-20 max-w-8xl md:pb-52"
        >
          <div className="md:ml-[-18%]">
            <h3 className=" text-center md:text-start uppercase text-lg font-[850] text-blue-600 mb-6">
              portfolio
            </h3>
            <h6 className=" text-center text-2xl  text-stone-800 font-[900] md:text-start sm:text-3xl">
              Each project is a unique piece of developemnt
            </h6>
          </div>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col-reverse md:flex-row flex-1 ">
              <img
                src="/the-wild-oasis.png"
                alt="Avatar"
                className="h-full max-h-[480px] max-w-[582px] w-full p-10 object-cover md:h-[30rem] md:w-auto rounded-3xl "
              />

              <div className="flex flex-col gap-7 items-center px-4 pt-10">
                <h6 className=" text-center md:text-start text-2xl sm:text-xl uppercase  text-stone-800 font-[800]">
                  the wild oasis
                </h6>
                <p className=" text-center max-w-[32rem]  text-stone-700 font-[400]">
                  the wild oasis website is a hotel management plateform that
                  help employers to manage booking process, customers and
                  cabins. it also tracks the whole activities throw piechart and
                  graph.
                </p>

                <img
                  src="https://skillicons.dev/icons?i=react,supabase,styledcomponents"
                  alt="skill-icon"
                />
                <div className="flex flex-row gap-10 font-[700]">
                  <a
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/leulsege/the_wild_oasis"
                    className=" hover:text-blue-600"
                  >
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <p className=" hover:text-blue-600">
                    <a
                      aria-label="wild-oasis"
                      target="_blank"
                      rel="noreferrer"
                      href="https://the-wild-oasis-4kd3.vercel.app/"
                    >
                      Live Demo
                      <ExternalLinkIcon className="w-6 h-6 inline" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row-reverse flex-1 ">
              <img
                src="/traffic-analaysis.png"
                alt="Avatar"
                className="h-full max-h-[480px] max-w-[582px] w-full p-10 object-cover md:h-[30rem] md:w-auto rounded-3xl "
              />

              <div className="flex flex-col gap-7 items-center px-4 pt-10">
                <h6 className=" text-center md:text-start text-2xl sm:text-xl uppercase  text-stone-800 font-[800]">
                  Traffic Analaysis
                </h6>
                <p className=" text-center max-w-[32rem]  text-stone-700 font-[400]">
                  the traffic analaysis website is a transport service
                  management system that helps a company to manage their
                  vehicles, drivers, the number of accidents, relation between
                  the drivers, vehicles and accidents, and track drivers
                  trainings.
                </p>

                <img
                  src="https://skillicons.dev/icons?i=react,css,nodejs,mongodb"
                  alt="skill-icon"
                />
                <div className="flex flex-row gap-10 font-[700]">
                  <a
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer"
                    className=" hover:text-blue-600"
                    href="https://github.com/leulsege/Traffic-analysis"
                  >
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <p className=" hover:text-blue-600">
                    <a
                      aria-label="wild-oasis"
                      target="_blank"
                      rel="noreferrer"
                      href="https://traffic-analysis-frontend.vercel.app/"
                    >
                      Live Demo
                      <ExternalLinkIcon className="w-6 h-6 inline" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row flex-1 ">
              <img
                src="/fast-pizza.png"
                alt="Avatar"
                className="h-full max-h-[480px] max-w-[582px] w-full p-10 object-cover md:h-[30rem] md:w-auto rounded-3xl "
              />

              <div className="flex flex-col gap-7 items-center px-4 pt-10">
                <h6 className=" text-center md:text-start  text-2xl sm:text-xl uppercase  text-stone-800 font-[800]">
                  fast pizza
                </h6>
                <p className=" text-center max-w-[32rem]  text-stone-700 font-[400]">
                  fast pizza is a pizza ordering website for customers. it
                  manages the available pizza menu and allow customers to order
                  from it. it also tracks customers location to deliver.
                </p>

                <img
                  src="https://skillicons.dev/icons?i=react,tailwind,supabase"
                  alt="skill-icon"
                />
                <div className="flex flex-row gap-10 font-[700]">
                  <a
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer"
                    className=" hover:text-blue-600"
                    href="https://github.com/leulsege/fast-pizza"
                  >
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <p className=" hover:text-blue-600">
                    <a
                      aria-label="wild-oasis"
                      target="_blank"
                      rel="noreferrer"
                      href="https://fast-pizza-rho.vercel.app/"
                    >
                      Live Demo
                      <ExternalLinkIcon className="w-6 h-6 inline" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row-reverse flex-1 ">
              <img
                src="/world-tour.png"
                alt="Avatar"
                className="h-full max-h-[480px] max-w-[582px] w-full p-10 object-cover md:h-[30rem] md:w-auto rounded-3xl "
              />

              <div className="flex flex-col gap-7 items-center px-4 pt-10">
                <h6 className=" text-center md:text-start font-bold text-2xl sm:text-xl uppercase">
                  world tour
                </h6>
                <p className=" text-center max-w-[32rem]  text-stone-700 font-[400]">
                  World tour website keeps track of users adventures. A world
                  map that tracks users footsteps into every city they can think
                  of. Helps them to Never forget their wonderful experiences.
                </p>

                <img
                  src="https://skillicons.dev/icons?i=react,css"
                  alt="skill-icon"
                />
                <div className="flex flex-row gap-10 font-[700]">
                  <a
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer"
                    className=" hover:text-blue-600"
                    href="https://github.com/leulsege/world-wise"
                  >
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <p className=" hover:text-blue-600">
                    <a
                      aria-label="wild-oasis"
                      target="_blank"
                      rel="noreferrer"
                      href="https://world-tour-chi.vercel.app/"
                    >
                      Live Demo
                      <ExternalLinkIcon className="w-6 h-6 inline" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="white flex flex-col justify-center md:justify-start md:items-start items-center gap-14 md:gap-20 px-8 py-24 md:py-32 md:px-20 md:mx-[20%] md:pb-52 "
        >
          <div>
            <h3 className=" text-center md:text-start  uppercase text-2lg text-blue-600  font-[800]">
              contact
            </h3>
            <h6 className=" text-center md:text-start text-2xl sm:text-3xl  text-stone-800 font-[800] ">
              Don't be shy! Hit me up! 👇
            </h6>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-30 items-center">
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
              <span className="text-blue-600 bg-stone-100 h-14 w-14 rounded-full p-3 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>

              <div className="flex flex-col items-center md:items-start">
                <h3 className=" font-[800] text-xl ">Location</h3>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
              <span className="text-blue-600 bg-stone-100 h-14 w-14 rounded-full p-3 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              <div className="flex flex-col items-center md:items-start">
                <h3 className=" font-[800] text-xl ">Mail</h3>
                <p className="hover:text-blue-600">
                  <a href="mailto:kemmah5833@gmail.com">kemmah5833@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
