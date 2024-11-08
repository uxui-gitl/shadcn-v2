import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

const Footer = () => {
  const facebookRef = useRef(null);
  const instagramRef = useRef(null);
  const twitterRef = useRef(null);

  const addMagneticEffect = (iconRef) => {
    const icon = iconRef.current;

    const onMouseMove = (e) => {
      const rect = icon.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      gsap.to(icon, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(icon, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    };

    icon.addEventListener("mousemove", onMouseMove);
    icon.addEventListener("mouseleave", onMouseLeave);

    return () => {
      icon.removeEventListener("mousemove", onMouseMove);
      icon.removeEventListener("mouseleave", onMouseLeave);
    };
  };

  useEffect(() => {
    const cleanUpFacebook = addMagneticEffect(facebookRef);
    const cleanUpInstagram = addMagneticEffect(instagramRef);
    const cleanUpTwitter = addMagneticEffect(twitterRef);

    return () => {
      cleanUpFacebook();
      cleanUpInstagram();
      cleanUpTwitter();
    };
  }, []);

  const footerHeading = "font-medium text-base  text-gray-900 dark:text-[#eef4ff] leading-4";
  const footerSubHeading = "font-medium text-[14px]  text-gray-900 dark:text-[#eef4ff]";
  const footerList = "font-regular text-[14px] text-gray-900 dark:text-[#CDBAF3] tracking-wider";

  return (
    <>
      <div
        className="relative h-[1000px]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 h-[1000px] w-full text-sm">
          <footer className="container">
            <div className="mx-auto space-y-8 py-16 lg:space-y-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <div className="text-teal-600 dark:text-teal-300">
                    <Link href="/" className="w-fit dark:hidden">
                      <Image
                        src={"/home/godrejLogo.svg"}
                        alt="Godrej Infotech Logo"
                        width={163}
                        height={59}
                        priority={true}
                      />
                    </Link>
                    <Link href="/" className="w-fit dark:block">
                      <Image
                        src={"/home/godrejLogoWhite.svg"}
                        alt="Godrej Infotech Logo"
                        width={163}
                        height={59}
                        priority={true}
                      />
                    </Link>
                  </div>

                  <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
                    Revolutionize your business operations, save time and boost
                    productivity with our cutting-edge offerings.
                  </p>

                  <ul className="mt-8 flex gap-6">
                    <li ref={facebookRef}>
                      <Link
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className={footerList}
                      >
                        <span className="sr-only">Facebook</span>
                        <svg
                          className="h-10 w-10"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li ref={instagramRef}>
                      <Link
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className={footerList}
                      >
                        <span className="sr-only">Instagram</span>
                        <svg
                          className="h-10 w-10"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.993a6.006 6.006 0 100 12.013 6.006 6.006 0 000-12.013zm0 1.802a4.204 4.204 0 110 8.409 4.204 4.204 0 010-8.409zm6.406-1.24a1.44 1.44 0 11-2.882-.001 1.44 1.44 0 012.882 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li ref={twitterRef}>
                      <Link
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className={footerList}
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="h-10 w-10"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M8 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0022 4.5a8.1 8.1 0 01-2.4.7 4.2 4.2 0 001.8-2.3 8.1 8.1 0 01-2.6 1 4.1 4.1 0 00-7 3.7A11.7 11.7 0 012.1 3.4 4.1 4.1 0 003.4 9a4 4 0 01-1.8-.5v.1a4.1 4.1 0 003.3 4 4.1 4.1 0 01-1.8.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 17.6 11.7 11.7 0 008 19" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                  <div>
                    <p className={footerHeading}>
                      Solutions
                    </p>

                    <ul className="mt-4">
                      <li className="mb-3">
                        <p className={footerHeading}>
                          Automation
                        </p>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerSubHeading}
                        >
                          Intelligent Technologies
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          AI/ML
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          RPA
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          IIOT
                        </Link>
                      </li>

                      <li className="mt-4">
                        <Link
                          href="#"
                          className={footerSubHeading}
                        >
                          Data Insights
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Cyber Security
                        </Link>
                      </li>
                      <li className="mt-4">
                        <Link
                          href="#"
                          className={footerSubHeading}
                        >
                          Technology Stack
                        </Link>
                      </li>



                    </ul>
                    <ul className="my-4 ">
                      <li className="mb-3">
                        <p className={footerHeading}>
                          Cloud
                        </p>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Upgrade to cloud
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Cloud Stack & Services
                        </Link>
                      </li>
                      
                    </ul>
                    <ul className="my-4 ">
                      <li className="mb-3">
                        <p className={footerHeading}>
                          Transformation
                        </p>
                      </li>
                      <li className="mt-4">
                        <Link
                          href="#"
                          className={footerSubHeading}
                        >
                          Enterprise Suite
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Infor
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Infor WMS
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Infor LN
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Infor CloudSuite
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          HxnEAM
                        </Link>
                      </li>

              
                      <li className="mt-4">
                        <Link
                          href="#"
                          className={footerSubHeading}
                        >
                          Microsoft Practices
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Business Central
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          F&O
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          D365 Commerce
                        </Link>
                      </li>
                      <li className="mt-4">
                        <Link
                          href="#"
                          className={footerSubHeading}
                        >
                        Oracle
                        </Link>
                      </li>

                      

                      <li className="mt-4">
                        <Link
                          href="#"
                          className={footerSubHeading}
                        >
                          Customer Experience
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Infor CRM
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Microsoft CRM
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Salesforce CRM
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                         E-Commerce
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          LS Retail
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className={footerHeading}>
                      Services
                    </p>

                    <ul className="my-6 ">
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Business Consulting
                        </Link>
                      </li>


                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Implementation & Global Rollout
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Managed Services
                        </Link>
                      </li>

                
                    </ul>
                    <p className={footerHeading}>
                      Industry Focus
                    </p>

                    <ul className="my-4 ">
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Manufacturing
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Retail
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Trading & Distribution
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Projects
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Professional Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                         Healthcare
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className={footerHeading}>
                      Company
                    </p>

                    <ul className="my-4 ">
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          About us
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Infotech Weekly
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Career - We are Hiring
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Why Godrej Infotech?
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={footerList}
                        >
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#EFE9FB]">
                Copyright &copy; 2024. Godrej Infotech |{" "}
                <Link href="#">Disclaimer</Link> |{" "}
                <Link href="#">Privacy Policy</Link> | <Link href="#">T&C</Link>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
