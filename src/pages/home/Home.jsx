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
        </div>
      </div>
    </div>
  );
}

export default Home;
