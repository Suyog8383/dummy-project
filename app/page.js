"use client";
import Header from "@/components/navBar/header";
import HomeComponent from "@/components/home/Home";
import AboutComponent from "@/components/about/About";
import ServicesComponent from "@/components/services/Services";
import ContactUsComponent from "@/components/contactUs/ContactUs";
import FooterComponent from "@/components/footer/Footer";
import { useRef } from "react";
// import { CheckIcon } from "@heroicons/react/20/solid";
export default function Home() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll handler function
  const scrollHandler = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };
  return (
    <>
      {/* header start */}
      <Header
        scrollHandler={scrollHandler}
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      {/* header end */}

      {/* Home Start */}
      <HomeComponent homeRef={homeRef} />
      {/* Home End */}

      {/* About Us Start */}
      <AboutComponent aboutRef={aboutRef} />
      {/* About Us Start */}

      {/* Services Start */}
      <ServicesComponent servicesRef={servicesRef} />

      {/* Services End */}

      {/* Contact Us Start */}
      <ContactUsComponent contactRef={contactRef} />
      {/* Contact Us End */}

      {/* Footer Start */}
      <FooterComponent />
      {/* Footer End */}
    </>
  );
}
