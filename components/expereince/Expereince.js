import Image from "next/image";
import React from "react";

function Expereince({ servicesRef }) {
  return (
    <section ref={servicesRef}>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center items-center">
          <Image
            src="/imageExp.jpeg"
            alt="Description"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}

export default Expereince;
