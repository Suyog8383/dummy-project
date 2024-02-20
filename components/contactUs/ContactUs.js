import React from "react";

function ContactUsComponent({ contactRef }) {
  return (
    <section ref={contactRef} className="text-gray-600 body-font relative">
      <div className="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
        <section className="text-gray-600 body-font relative flex flex-col md:flex-row">
          <div className="container px-5 py-20 mx-auto flex justify-center align-middle items-center">
            <div className="flex flex-col text-left w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Connect with Us
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </h1>
              <p className="leading-relaxed text-base">
                Connect with us to explore how our services can elevate your
                data strategy. Whether you have a specific project in mind or
                want to discuss the possibilities, our team is ready to assist
                you.
              </p>
              <p className="mt-4">
                <strong>Email:</strong> info@dataharbour.com
              </p>
              <p>
                <strong>Phone:</strong> [+91 xxxx] [+1 xxxx]
              </p>
            </div>
          </div>
          <div className="container px-5 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Inquiry Form:
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Ready to transhtmlForm your approach to data? Fill out the form
                below, and our team will get in touch with you shortly.
              </p>
            </div>
            <div className="mx-auto">
              <div className="flex flex-wrap -m-2 flex-col md:flex-row">
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Inquiry/Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ContactUsComponent;
