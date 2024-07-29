"use client";
import { motion, useTransform, useScroll, useAnimation } from "framer-motion";
import { useRef } from "react";

const OfferingsSlider = () => {
  return (
    <>
      {/*  */}
      <div className="bg-[#1D162B]" style={{display:'none'}}>
        <div className="flex flex-col pt-10 items-center justify-center">
          <h2 className=" font-semibold text-[60px] leading-[70px] text-[#FFFFF] text-center text-2xl mb-2 ">
            Our Offerings
          </h2>
          <p className="text-center text-[#FFFFF] max-w-[50%]  text-xl font-[500] leading-8 ">
            Explore the boundless possibilities that our industry-focused
            expertise and reliable partnerships bring
          </p>{" "}
        </div>
        <HorizontalScrollCarousel />
        {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
      </div>
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="container relative h-[300vh] bg-[#1D162B] "
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  const backgroundColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
  ];
  const fontColors = ["text-white", "text-white", "text-white", "text-black"];

  const getRandomIndex = () =>
    Math.floor(Math.random() * backgroundColors.length);
  const randomIndex = getRandomIndex();
  const randomColorClass = backgroundColors[randomIndex];
  const fontColorClass = fontColors[randomIndex];

  const controls = useAnimation();

  return (
    <motion.div
      key={card.id}
      className={`group relative rounded-2xl me-8 h-[450px] w-[450px] overflow-hidden ${randomColorClass}`}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => controls.start({ width: "100%" })} // Adjust width on hover start
      onHoverEnd={() => controls.start({ width: "0%" })}
    >
      <motion.div
        className="absolute inset-0 z-0 transition-transform duration-300"
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.8)",
        }}
      >
        <div className="absolute inset-0 z-10 grid place-content-start">
          {/* expand this label to full width of the card gradient bg color  */}
          <p
            className={`px-8 py-4 tracking-wide font-semibold rounded-full capitalize text-base leading-6 backdrop-blur-lg m-8 bg-[rgb(195,21,169)] bg-[linear-gradient(90deg,_rgba(195,21,169,1)_0%,_rgba(137,40,200,1)_50%,_rgba(83,57,229,1)_100%)]`}
          >
            {card.title}
          </p>
        </div>
      </motion.div>
      <motion.div
        animate={controls}
        className="absolute bg-[rgb(195,21,169)] bg-[linear-gradient(90deg,_rgba(195,21,169,1)_0%,_rgba(137,40,200,1)_50%,_rgba(83,57,229,1)_100%)] inset-0 z-10 flex flex-col justify-center items-center"
        style={{ width: "0%", overflow: "hidden", color: "#fff" }}
      >
        <h3 className={`text-2xl font-bold mb-2 `}>{card.title}</h3>
        <p className={`text-lg `}>{card.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default OfferingsSlider;

type CardType = {
  url: string;
  title: string;
  description: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/offerings/1.png",
    title: "Automation",
    description: "Lorem ipsum dolar etc",
    id: 1,
  },
  {
    url: "/offerings/2.png",
    description: "Lorem ipsum dolar etc",

    title: "Cloudification",
    id: 2,
  },
  {
    url: "/offerings/3.png",
    description: "Lorem ipsum dolar etc",

    title: "Transformation",
    id: 3,
  },
  {
    url: "/offerings/4.png",
    description: "Lorem ipsum dolar etc",

    title: "Title 4",
    id: 4,
  },
  {
    url: "/offerings/5.png",
    description: "Lorem ipsum dolar etc",

    title: "Title 5",
    id: 5,
  },
  {
    url: "/offerings/6.png",
    description: "Lorem ipsum dolar etc",

    title: "Title 6",
    id: 6,
  },
  {
    url: "/offerings/7.png",
    description: "Lorem ipsum dolar etc",

    title: "Title 7",
    id: 7,
  },
];
