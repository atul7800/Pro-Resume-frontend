import Header from "@/components/custom/Header";
import React from "react";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <div className="mx-auto flex max-w-screen-xl flex-col justify-center px-4 py-8 text-center lg:px-12 lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Build Your Resume <span className="text-primary">With AI</span>{" "}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
            Effortlessly Craft a Standout Resume with Our AI-Powered Resume
            Builder
          </p>
          {/* <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
            <a
              href="/dashboard"
              className="focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-center text-base font-medium text-white hover:bg-primary focus:ring-4"
            >
              Get Started
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
