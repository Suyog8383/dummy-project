import React from "react";

function ServicesComponent({ servicesRef }) {
  return (
    <section className="text-gray-600 body-font" ref={servicesRef}>
      <div class="container px-5 pt-20 mx-auto">
        <div class="flex flex-wrap w-full mb-10">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Services
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </h1>
          </div>
          {/* <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p> */}
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://www.sherpadesk.com/hubfs/Spyder%20Bots%20hero.jpg#keepProtocol"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xl font-medium title-font">
                Web Crawling
              </h3>

              <p class="leading-relaxed text-sm">
                Explore the Web's Depth Uncover hidden gems of information with
                our advanced web crawling services. We navigate the complexities
                of the internet to extract relevant data, providing you with a
                competitive edge.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://th.bing.com/th/id/OIP.TocdGCDxdtwAIBLO133w-QAAAA?w=189&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xl font-medium title-font">
                Mobile App Scraping
              </h3>

              <p class="leading-relaxed text-sm">
                Navigate App Data with Precision Extract valuable insights from
                mobile applications with our specialized app scraping services.
                We delve into the intricacies of apps to gather relevant data,
                enhancing your understanding of user behavior and market trends.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://th.bing.com/th/id/OIP.R9GtfVwDOUd63N8RXtHaHgHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xl font-medium title-font">
                Data Crawling
              </h3>

              <p class="leading-relaxed text-sm">
                Transforming Raw Data into Actionable Insights Our data crawling
                services go beyond extraction. We structure, clean, and
                transform raw data into meaningful insights, empowering your
                decision-making process.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://th.bing.com/th/id/OIP.CjzxwielhV8e9ZCbRedAVwHaE8?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xl font-medium title-font">
                Custom Solutions
              </h3>

              <p class="leading-relaxed text-sm">
                Your Data, Your Way Tailored to your specific requirements, our
                custom solutions ensure that you get precisely the data you
                need, presented in a format that aligns with your business
                objectives.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 py-16 mx-auto">
        <div className="text-center mb-5">
          <h2 className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">
            Domain
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            At [DataHarbour], we excel in various domains, including but not
            limited to:
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 sm:justify-center">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">E-commerce</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">
                Hotel, Food and Delivery
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">Travel and Tourism</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">Real Estate</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">Pharma and Medical</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">
                Intellectual Property
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">News and Media</span>
            </div>
          </div>
        </div>
        <span className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center">
          Our expertise spans diverse industries, making us your go-to partner
          for comprehensive web and data crawling solutions.
        </span>
      </div>
    </section>
  );
}

export default ServicesComponent;
