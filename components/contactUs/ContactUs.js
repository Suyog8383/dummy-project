import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import swal from "sweetalert";
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  // else if (values.name.length > 15) {
  //   errors.name = "Must be 15 characters or less";
  // }

  if (!values.company) {
    errors.company = "Required";
  }

  // else if (values.company.length > 15) {
  //   errors.company = "Must be 15 characters or less";
  // }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length !== 10) {
    errors.phone = "Must be 10 characters";
  }

  if (!values.inquiry) {
    errors.inquiry = "Required";
  }

  // else if (values.inquiry.length > 50) {
  //   errors.inquiry = "Must be 50 characters or less";
  // }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const submitUser = async (values) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let data = JSON.stringify({
    name: values.name,
    company: values.company,
    phone: values.phone,
    email: values.company,
    inquiry: values.inquiry,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: data,
    redirect: "follow",
  };

  fetch(
    "https://sheet.best/api/sheets/3fc1b249-2b59-4071-a4cb-b7b65c720430",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      swal(
        "Success!",
        "Your form has been submitted. Our team will get back to you shortly.",
        "success"
      );
    })
    .catch((error) => console.error(error));
};

function ContactUsComponent({ contactRef }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      inquiry: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      await submitUser(values);
      resetForm();
    },
  });

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
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-wrap -m-2 flex-col md:flex-row">
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Name <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      {formik.errors.name ? (
                        <div className="text-red-700">{formik.errors.name}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Company <span className="text-red-700">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        onChange={formik.handleChange}
                        value={formik.values.company}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      {formik.errors.company ? (
                        <div className="text-red-700">
                          {formik.errors.company}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Phone <span className="text-red-700">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        maxLength="10"
                        pattern="[0-9]{10}"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      {formik.errors.phone ? (
                        <div className="text-red-700">
                          {formik.errors.phone}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      {formik.errors.email ? (
                        <div className="text-red-700">
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Inquiry/Project Details{" "}
                        <span className="text-red-700">*</span>
                      </label>
                      <textarea
                        id="inquiry"
                        name="inquiry"
                        onChange={formik.handleChange}
                        value={formik.values.inquiry}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                      {formik.errors.inquiry ? (
                        <div className="text-red-700">
                          {formik.errors.inquiry}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ContactUsComponent;
