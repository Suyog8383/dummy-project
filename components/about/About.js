import React from "react";
import Image from "next/image";

function AboutComponent({ aboutRef }) {
  const people = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];
  return (
    <section ref={aboutRef}>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Us
            </h1>
            <p class="mb-8 leading-relaxed">
              Welcome to [DataHarbour], where we specialize in cutting-edge web
              and data crawling solutions. With a passion for data-driven
              insights, our team is dedicated to providing you with unparalleled
              expertise in extracting, processing, and delivering valuable
              information. At [DataHarbour], we believe in the transformative
              potential of data. Our journey began with a vision to empower
              businesses with the ability to harness the vast ocean of
              information available on the web. Today, we stand as pioneers in
              the field of web and data crawling, committed to delivering
              tailored solutions that meet your unique needs.
            </p>
          </div>
          <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div class="flex justify-center">
              <p class="mb-8 leading-relaxed">
                <h2 class="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">
                  Values
                </h2>
                Our Pillars of Excellence At [DataHarbour], our values are the
                keystones of our commitment to excellence and integrity:
              </p>
            </div>
            <div class="flex relative pb-5">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"></div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Integrity
                </h2>
                <p class="leading-relaxed">
                  We uphold transparency, honesty, and accountability, ensuring
                  your trust in every interaction.
                </p>
              </div>
            </div>
            <div class="flex relative pb-5">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"></div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Client-Centric
                </h2>
                <p class="leading-relaxed">
                  Your success is our focus. We tailor solutions to meet your
                  unique needs, placing your objectives at the forefront.
                </p>
              </div>
            </div>
            <div class="flex relative pb-5">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"></div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Innovation
                </h2>
                <p class="leading-relaxed">
                  We embrace creativity and technological innovation, ensuring
                  our services remain cutting-edge.
                </p>
              </div>
            </div>
            <div class="flex relative pb-5">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"></div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Data Security
                </h2>
                <p class="leading-relaxed">
                  Your data's privacy and security are paramount. We adhere to
                  rigorous standards to safeguard your information.
                </p>
              </div>
            </div>
            <div class="flex relative pb-5">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"></div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Continuous Learning
                </h2>
                <p class="leading-relaxed">
                  In the dynamic world of data, we stay ahead through continuous
                  learning and professional development.
                </p>
              </div>
            </div>
            <div class="flex relative">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"></div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Environmental Responsibility
                </h2>
                <p class="leading-relaxed">
                  Mindful of our impact, we operate with sustainability in mind,
                  contributing to a greener future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutComponent;
