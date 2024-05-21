import Image from "next/image";
import React from "react";

const ClientLogos = () => {
  return (
    <section className=" text-white pt-8 pb-4">
      <h2 className=" hidden text-center text-2xl mb-2 font-bold leading-8 ">
        Our Clients
      </h2>
      <p className="text-center text-[#d4beff] text-xl font-[500] leading-8 ">
        500 + organisations trust our exceptional expertise. <br /> Join us
        today!
      </p>{" "}
      <div className="logos group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
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
        </div>

        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
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
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
