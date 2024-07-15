"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap, { TweenMax, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
gsap.registerPlugin(ScrollTrigger);

const Robot = () => {
  useEffect(() => {
    // Animation for #master element
    TweenMax.to("#master", 40, {
      rotation: 360,
      svgOrigin: "326 326",
      ease: Linear.easeNone,
      repeat: -1,
    });

    // Animation for #master > g element
    TweenMax.to("#master > g", 40, {
      rotation: -360,
      transformOrigin: "center center",
      ease: Linear.easeNone,
      repeat: -1,
    });

    // Timeline for sequencing animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#master",
        start: "top center",
        once: true,
      },
    });

    // Animation for circles to pop in a staggered manner from the center
    const circles = document.querySelectorAll("circle");
    tl.set(circles, { scale: 0, opacity: 0, transformOrigin: "center center" })
      .to(circles, {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
      })
      // Animation for the image to appear
      .fromTo(
        "#hidden-image",
        { opacity: 0, scale: 0, transformOrigin: "center center" },
        { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      )
      // Animation for the <rect> elements to appear
      .fromTo(
        "#master > g",
        { opacity: 0, scale: 0, transformOrigin: "center center" },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "elastic.out(1, 0.5)",
        }
      );
  }, []);
  return (
    <>
    <div className="flex justify-center text-6xl font-medium text-center leading-tight pt-16">Building Tomorrow's <br /> Solutions Today</div>
      <CardContainer className="flex justify-center items-center mx-auto mb-40">
        {/* <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"> */}
        <CardBody className="bg-transparent w-auto sm:w-[w-dvh] h-dvh relative p-6 ">
          <CardItem translateZ="50" className="">
            {/* Your Robot SVG and animations */}
            <div className="h-screen">
              <svg
                className="block mx-auto w-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="654"
                height="647"
                viewBox="0 0 654 647"
              >
                <g fill="none" fillRule="evenodd">
                  <circle
                    cx="326"
                    cy="326"
                    r="100"
                    stroke="#FFF"
                    strokeOpacity=".8"
                  />
                  <circle
                    cx="326"
                    cy="326"
                    r="160"
                    stroke="#FFF"
                    strokeOpacity=".5"
                  />
                  <circle
                    cx="326"
                    cy="326"
                    r="225.5"
                    stroke="#FFF"
                    strokeOpacity=".35"
                  />
                  <circle
                    id="pathXXL"
                    cx="327"
                    cy="324"
                    r="290"
                    stroke="#FFF"
                    strokeOpacity=".2"
                  />
                  <foreignObject
                    id="hidden-image"
                    x="227"
                    y="224"
                    width="200"
                    height="200"
                  >
                    <div className="h-auto w-auto max-w-[200px] m-8">
                      <Image
                        src="https://i.postimg.cc/5yy9XqGQ/hero-Robot.png"
                        height="200"
                        width="200"
                        layout="responsive"
                        alt="thumbnail"
                      />
                    </div>
                  </foreignObject>
                  <g id="master">
                    <g id="svg-services-brush" transform="translate(502 73)">
                      <rect width="50" height="50" fill="#BEE4E0" rx="25" />
                      <path
                        fill="#3EB0A5"
                        fillRule="nonzero"
                        d="M16.3156 29.2756c-1.818 1.7856-.282 3.6192-2.6964 6.3348-1.0896 1.2276 4.4856.8532 7.2468-1.8612 1.1724-1.1532.8412-2.8308-.4152-4.0668-1.2564-1.2336-2.964-1.56-4.1352-.4068zm20.1312-15.4848C35.5156 12.874 25.192 21.1456 22.12 24.166c-1.5252 1.5-2.034 2.304-2.5008 2.904-.204.2628.066.342.1848.4032.6048.3096 1.0272.5952 1.5732 1.1316.5472.5364.8388.9516 1.1508 1.5468.0636.1176.1452.3816.4104.1824.612-.4596 1.4292-.9612 2.9544-2.4588 3.0732-3.0192 11.4876-13.1688 10.554-14.0844z"
                      />
                    </g>
                    <g transform="translate(76 299)">
                      <rect width="50" height="50" fill="#BEE4E0" rx="25" />
                      <path
                        fill="#3EB0A5"
                        fillRule="nonzero"
                        d="M32.8125 14h-2.375c-.6555 0-1.1875.531-1.1875 1.188v20.187H34V15.188c0-.657-.5308-1.188-1.1875-1.188zm-7.125 7.1282h-2.375c-.6555 0-1.1875.531-1.1875 1.188V35.375h4.75V22.3162c0-.657-.5308-1.188-1.1875-1.188zm-7.125 7.1281h-2.375c-.6555 0-1.1875.531-1.1875 1.188v5.9307h4.75v-5.9306c0-.657-.5308-1.188-1.1875-1.188z"
                      />
                    </g>
                    <g transform="translate(512 222)">
                      <rect width="50" height="50" fill="#BEE4E0" rx="25" />
                      <path
                        fill="#3EB0A5"
                        fillRule="nonzero"
                        d="M20.67 27.88v-7.13H16.3c-1.265 0-2.3 1.035-2.3 2.3v6.9c0 1.265 1.035 2.3 2.3 2.3h1.15v3.45l3.45-3.45h5.75c1.265 0 2.3-1.035 2.3-2.3v-2.093a1.084 1.084 0 0 1-.23.0242h-8.05V27.88zM34.7 15H24.35c-1.265 0-2.3 1.035-2.3 2.3v9.2h8.05l3.45 3.45V26.5h1.15c1.265 0 2.3-1.0339 2.3-2.3v-6.9c0-1.265-1.035-2.3-2.3-2.3z"
                      />
                    </g>
                    <g transform="translate(137 541)">
                      <rect width="50" height="50" fill="#BEE4E0" rx="25" />
                      <g fill="#3EB0A5" fillRule="nonzero">
                        <path d="M14.5385 30.7341v3.8379c0 .2334.178.428.4019.428h2.7859c.2192 0 .402-.1897.402-.428v-6.7515l-2.0233 2.1548c-.4293.4524-.9774.715-1.5665.7588zm5.1282-2.9136v6.7543c0 .232.178.4252.4019.4252h2.786c.2191 0 .4018-.1884.4018-.4252v-3.9762c-.6348-.0145-1.2285-.2802-1.6761-.7537l-1.9136-2.0244zm5.641 2.2556v4.4897c0 .2368.1781.4342.4019.4342h2.786c.2192 0 .4018-.1924.4018-.4342v-8.2837l-3.1924 3.4486a2.4347 2.4347 0 0 1-.3973.3454zm8.4485-8.4094l-3.3203 3.4631v9.451c0 .2287.1781.4192.4019.4192h2.786c.2192 0 .4018-.1858.4018-.4192V21.9287c-.0913-.081-.1598-.1525-.21-.2001l-.0594-.062z" />
                        <path d="M36.389 15.2275c-.1405-.15-.3538-.2275-.6252-.2275h-.0775c-1.3764.063-2.748.1307-4.1244.1936-.1841.0097-.4362.0193-.6349.2178-.063.0629-.1114.1355-.1502.2226-.2035.4404.0824.726.2181.8614l.344.3485c.2376.242.4799.484.7222.721l-8.3165 8.3096-3.7366-3.7313a1.1887 1.1887 0 0 0-.8433-.3485c-.3199 0-.6155.1259-.8384.3485l-4.9774 4.9654a1.1847 1.1847 0 0 0 0 1.6793l.223.2226c.223.2226.5234.3485.8433.3485.3198 0 .6155-.1259.8384-.3485l3.911-3.9055 3.7367 3.7313c.223.2226.5234.3485.8433.3485.3199 0 .6155-.1259.8433-.3485l9.3827-9.3694 1.0614 1.055c.126.1259.3005.3.567.3.1115 0 .223-.029.3393-.0919.0775-.0435.1454-.092.2035-.15.2084-.208.2472-.4743.2569-.6824.0388-.8904.0824-1.781.126-2.6762l.063-1.3406c.0145-.2807-.0485-.4985-.1987-.6533z" />
                      </g>
                    </g>
                    <g transform="translate(300 138)">
                      <rect width="50" height="50" fill="#BEE4E0" rx="25" />
                      <path
                        fill="#3EB0A5"
                        fillRule="nonzero"
                        d="M34.4444 15.025H16.5556C15.15 15.025 14 16.175 14 17.5807V32.914c0 1.4056 1.15 2.5556 2.5556 2.5556h17.8888c1.4056 0 2.5556-1.15 2.5556-2.5556V17.5806c0-1.4055-1.15-2.5555-2.5556-2.5555zm-6.3888 17.889h-11.5v-5.1112h11.5v5.1111zm0-6.389h-11.5v-5.111h11.5v5.111zm6.3888 6.389h-5.111v-11.5h5.111v11.5z"
                      />
                    </g>
                    <g transform="translate(300 524)">
                      <rect width="50" height="50" fill="#BEE4E0" rx="25" />
                      <path
                        fill="#3EB0A5"
                        fillRule="nonzero"
                        d="M30.6 12H19.4c-1.32 0-2.4 1.08-2.4 2.4v20.8c0 1.32 1.08 2.4 2.4 2.4h11.2c1.32 0 2.4-1.08 2.4-2.4V14.4c0-1.32-1.08-2.4-2.4-2.4zm-8.8 1.2h6.4v.8h-6.4v-.8zM25 36c-.8836 0-1.6-.7163-1.6-1.6 0-.8836.7164-1.6 1.6-1.6s1.6.7164 1.6 1.6c0 .8837-.7164 1.6-1.6 1.6zm6.4-4.8H18.6v-16h12.8v16z"
                      />
                    </g>
                    <g transform="translate(425 397)">
                      <rect width="50" height="50" fill="#BEE4E0" rx="25" />
                      <path
                        fill="#3EB0A5"
                        fillRule="nonzero"
                        d="M28.7313 16.255l-.8588-.234c-.1105-.0367-.2194-.0252-.3253.0344-.1062.0596-.178.1492-.2148.2685l-5.165 17.7726c-.0369.1194-.0253.232.0347.3373.06.1056.1498.1767.27.2134l.8585.2341c.1108.037.2193.0254.3255-.0343.1062-.06.1778-.1492.2146-.2683l5.1652-17.773c.0368-.1192.0253-.2318-.0348-.3374-.06-.1056-.1498-.1767-.2698-.2133zm-7.8045 3.52c0-.1183-.0454-.223-.1362-.3139l-.681-.6823c-.0909-.091-.1953-.1365-.3134-.1365-.118 0-.2225.0456-.3132.1365l-6.3468 6.3587c-.0909.091-.1362.1956-.1362.3138 0 .1183.0455.223.1362.3138l6.3467 6.3587c.0908.091.195.1364.3133.1364.1182 0 .2225-.0455.3133-.1364l.681-.682c.0908-.0909.1363-.1956.1363-.314 0-.118-.0455-.2227-.1363-.3136l-5.3525-5.3629 5.3526-5.3625c.091-.0909.1362-.1956.1362-.3138zm16.937 5.3624l-6.3472-6.3586c-.0908-.0909-.1953-.1365-.3132-.1365-.1182 0-.2223.0456-.3134.1365l-.6808.6823c-.0908.091-.136.1954-.136.3138 0 .1184.0452.223.136.3139l5.353 5.3625-5.353 5.3629c-.0908.0909-.136.1956-.136.3137 0 .1184.0452.223.136.314l.6808.6819c.091.091.1953.1364.3134.1364.118 0 .2224-.0455.3132-.1364l6.3472-6.3586c.0908-.0909.1362-.1957.1362-.314 0-.1182-.0454-.223-.1362-.3138z"
                      />
                    </g>
                    <g id="svg-services-computer" transform="translate(87 98)">
                      <rect width="50" height="50" fill="#BEE4E0" rx="25" />
                      <path
                        fill="#3EB0A5"
                        fillRule="nonzero"
                        d="M34.4413 16h-18.878c-.8595 0-1.559.7051-1.559 1.572L14 30.542c0 .8667.699 1.5746 1.5587 1.5746h6.1763v1.5597h-1.206c-.095 0-.1689.0814-.1689.177v.6842c0 .0957.0738.1788.1688.1788h8.9107c.0945 0 .2003-.0831.2003-.1788v-.6842c0-.0956-.1058-.177-.2003-.177H28.265v-1.5597h6.1721c.859 0 1.5589-.708 1.5589-1.5746L36 17.5734c.0002-.867-.699-1.5734-1.5587-1.5734zm-9.4628 14.8947c-.285 0-.5156-.2328-.5156-.52 0-.287.2306-.5197.5156-.5197.2848 0 .5156.2327.5156.5197 0 .2872-.2306.52-.5156.52zm9.645-2.244h-19.247V17.3863h19.247v11.2644z"
                      />
                    </g>
                    <path
                      style={{ display: "none" }}
                      stroke="#181818"
                      d="M.5.5h653v646H.5z"
                    />
                  </g>
                </g>
              </svg>
              <div id="balloon" className="opacity-60"></div>
              <div id="slider" className="float-left w-72 relative top-8"></div>
              <div id="guides" className="opacity-0"></div>
              <div id="nav" className="w-96 mx-auto my-5 h-12"></div>
              <button className="p-4 float-right"></button>
              <button id="rerun-button" className="hidden"></button>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default Robot;
