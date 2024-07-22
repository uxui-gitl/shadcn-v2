import Image from "next/image";
import React from "react";

const ClientLogos = () => {
  return (
    <section
      className=" text-white pt-32 pb-40 bg-[url('/cur.png')] h-lvh flex flex-col justify-center"
    >
      {/* <h2 className=" hidden text-center text-2xl mb-2 font-bold leading-8 ">
        Our Clients
      </h2> */}
      <p className="text-center text-[#D4BEFF] text-xl font-[500] leading-8 ">
        500 + organisations trust our exceptional expertise. <br /> Join us
        today!
      </p>
      {/* <div className="logos group relative overflow-hidden whitespace-nowrap  pt-12 pb-40 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]"> */}
      <div className="pt-12 flex justify-center align-middle flex-col sm:flex-row align-middle">
        <Image
          width={158}
          height={48}
          className="mx-5 inline h-16"
          src="/logos/3.svg"
          alt="Tuple"
        />
        <Image
          width={158}
          height={48}
          className="mx-5 inline h-16"
          src="/logos/4.svg"
          alt="SavvyCal"
        />
        <Image
          width={158}
          height={48}
          className="mx-5 inline h-16"
          src="/logos/2.svg"
          alt="Reform"
        />
         <Image
          width={158}
          height={48}
          className="mx-5 inline h-16"
          src="/logos/1.svg"
          alt="Transistor"
        />
      </div>
      {/* <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="/logos/1.svg"
            alt="Transistor"
          />
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="/logos/2.svg"
            alt="Reform"
          />
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="/logos/3.svg"
            alt="Tuple"
          />
          <Image
            width={158}
            height={48}
            className="mx-5 inline h-16"
            src="/logos/4.svg"
            alt="SavvyCal"
          />
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default ClientLogos;
