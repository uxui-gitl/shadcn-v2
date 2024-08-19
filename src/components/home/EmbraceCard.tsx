"use client";
import Image from "next/image";
import { useState } from "react";

function EmbraceCard() {
  const [isDescriptionCardOpen, setisDescriptionCardOpen] = useState(false);

  function handleDescreptionClick() {
    setisDescriptionCardOpen(!isDescriptionCardOpen);
  }
  return (
    <>
      <div className="py-28">
        <div className="container mt-4 flex-col">
          <h2 className="font-semibold text-[60px] leading-[70px] text-[#fff] text-left text-2xl mb-2">
            Embrace tomorrow <br /> with Automation
          </h2>
        </div>

        {isDescriptionCardOpen ? (
          <div className="embrace-full-card container mt-24 card-wrapper flex flex-col sm:flex-row justify-between">
            <>
              <div className="card min-w-full min-h-[400px] sm:min-h-[550px] px-5 py-11 sm:px-8 sm:py-5 rounded-3xl border-[#243c5a] relative mb-6 bg-[#EFE9FB]">
                <div className="card-body ">
                  <div className="card-header text-right">
                    <div className="inline-block text-[#000] text-xl font-semibold">
                      <Image
                        src={"home/icon/arrowSlideleft.svg"}
                        width={70}
                        height={70}
                        alt="icon"
                        onClick={() => handleDescreptionClick()}
                        style={{ cursor: "pointer" }}
                      ></Image>
                    </div>
                  </div>
                  <div className="card-content mt-2">
                    <div className="" style={{ display: "flex", justifyContent:'space-around'}}>
                      <div className="">
                        <div
                          className="heading-text"
                          style={{
                            fontSize: "32px",
                            fontWeight: "500",
                            lineHeight: "40px",
                            color: "#1D162B",
                            marginBottom: "56px",
                          }}
                        >
                          Intelligent Technologies
                        </div>

                        <div
                          className="subtext"
                          style={{
                            display: "flex",
                            color: "#1D162B",
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "36px",
                            marginBottom: "40px",
                          }}
                        >
                          <Image
                            src={"home/icon/framer.svg"}
                            width={40}
                            height={40}
                            alt="icon"
                            style={{ marginRight: "16px" }}
                          ></Image>{" "}
                          Artificial Intelligence & Machine Learning
                        </div>
                        <div
                          className="subtext"
                          style={{
                            display: "flex",
                            color: "#1D162B",
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "36px",
                            marginBottom: "40px",
                          }}
                        >
                          <Image
                            src={"home/icon/framer.svg"}
                            width={40}
                            height={40}
                            alt="icon"
                            style={{ marginRight: "16px" }}
                          ></Image>{" "}
                          Robotic Process Automation
                        </div>
                        <div
                          className="subtext"
                          style={{
                            display: "flex",
                            color: "#1D162B",
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "36px",
                            marginBottom: "40px",
                          }}
                        >
                          <Image
                            src={"home/icon/framer.svg"}
                            width={40}
                            height={40}
                            alt="icon"
                            style={{ marginRight: "16px" }}
                          ></Image>{" "}
                           Internet of Things - IoT
                        </div>
                      </div>
                      <div className="">
                        <div
                          className="heading-text"
                          style={{
                            fontSize: "32px",
                            fontWeight: "500",
                            lineHeight: "40px",
                            color: "#1D162B",
                            marginBottom: "56px",
                          }}
                        >
                          Technology
                          Suite
                        </div>

                        <div
                          className="subtext"
                          style={{
                            display: "flex",
                            color: "#1D162B",
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "36px",
                            marginBottom: "40px",
                          }}
                        >
                          <Image
                            src={"home/icon/framer.svg"}
                            width={40}
                            height={40}
                            alt="icon"
                            style={{ marginRight: "16px" }}
                          ></Image>{" "}
                          JAVA
                        </div>
                        <div
                          className="subtext"
                          style={{
                            display: "flex",
                            color: "#1D162B",
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "36px",
                            marginBottom: "40px",
                          }}
                        >
                          <Image
                            src={"home/icon/framer.svg"}
                            width={40}
                            height={40}
                            alt="icon"
                            style={{ marginRight: "16px" }}
                          ></Image>{" "}
                          .NET | Sharepoint
                        </div>
                        <div
                          className="subtext"
                          style={{
                            display: "flex",
                            color: "#1D162B",
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "36px",
                            marginBottom: "40px",
                          }}
                        >
                          <Image
                            src={"home/icon/framer.svg"}
                            width={40}
                            height={40}
                            alt="icon"
                            style={{ marginRight: "16px" }}
                          ></Image>{" "}
                          Low Code No Code App
                        </div>
                      </div>
                      <div className="">
                        <div
                          className="heading-text"
                          style={{
                            fontSize: "32px",
                            fontWeight: "500",
                            lineHeight: "40px",
                            color: "#1D162B",
                            marginBottom: "56px",
                          }}
                        >
                          Data
                          Insights
                        </div>

                        <div
                          className="subtext"
                          style={{
                            display: "flex",
                            color: "#1D162B",
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "36px",
                            marginBottom: "40px",
                          }}
                        >
                          <Image
                            src={"home/icon/framer.svg"}
                            width={40}
                            height={40}
                            alt="icon"
                            style={{ marginRight: "16px" }}
                          ></Image>{" "}
                          Power BI & Power App
                        </div>
                        <div
                          className="subtext"
                          style={{
                            display: "flex",
                            color: "#1D162B",
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "36px",
                            marginBottom: "40px",
                          }}
                        >
                          <Image
                            src={"home/icon/framer.svg"}
                            width={40}
                            height={40}
                            alt="icon"
                            style={{ marginRight: "16px" }}
                          ></Image>{" "}
                          BIRST
                        </div>
                        <div
                          className="subtext"
                          style={{
                            display: "flex",
                            color: "#1D162B",
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "36px",
                            marginBottom: "40px",
                          }}
                        >
                          <Image
                            src={"home/icon/framer.svg"}
                            width={40}
                            height={40}
                            alt="icon"
                            style={{ marginRight: "16px" }}
                          ></Image>{" "}
                           Tableau
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        ) : (
          <div className="embrace-card container mt-24 card-wrapper flex flex-col sm:flex-row justify-between">
            {[1, 2, 3].map((item) => (
              <>
                <div
                  key={item}
                  className="card min-w-full min-h-[400px] sm:min-h-[496px] px-5 py-11 sm:px-8 sm:py-12 sm:max-w-[396px] sm:min-w-[396px] rounded-3xl border-[#243c5a] relative mb-6 bg-[#561FC5]"
                >
                  <div className="card-body ">
                    <div className="card-header">
                      <div className="inline-block text-[#EEF4FF] text-xl font-semibold">
                        Automation
                      </div>
                    </div>
                    <div className="card-content mt-11">
                      <div className="heading text-2xl sm:text-[36px] font-normal leading-[50px]">
                        Embrace tomorrow with automation
                      </div>
                      <div className="spacification-text mt-6 text-base">
                        We are committed to provide, secure, cost-effective &
                        scalable cloud implementation, cloud migration & cloud
                        support services to our customers.
                      </div>

                      <div className="absolute right-4 bottom-4">
                        <Image
                          src="home/arrow-right.svg"
                          width={55}
                          height={55}
                          alt="Picture of the author"
                          className="clickarrow1"
                        />

                        <Image
                          src="home/arrow-right2.svg"
                          width={55}
                          height={55}
                          alt="Picture of the author"
                          className="clickarrow2"
                          onClick={() => handleDescreptionClick()}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default EmbraceCard;
