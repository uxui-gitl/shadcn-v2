"use client";
import Image from "next/image";
import { useState } from "react";
import { LinearGradient } from "react-text-gradients";

function OfferingCards() {
    const [isOfferingCardDataOpen1, setOfferingCardDataOpen1] = useState(false);
    const [isOfferingCardDataOpen2, setOfferingCardDataOpen2] = useState(false);
    const [isOfferingCardDataOpen3, setOfferingCardDataOpen3] = useState(false);


    function handleofferingCardClick1() {
        setOfferingCardDataOpen1(!isOfferingCardDataOpen1);
    }
    function handleofferingCardClick2() {
        setOfferingCardDataOpen2(!isOfferingCardDataOpen2);
    }
    function handleofferingCardClick3() {
        setOfferingCardDataOpen3(!isOfferingCardDataOpen3);
    }
    return (
        <>
            <div className="" style={{ padding: "150px 0px" }}>
                <div className="container flex-col px-10">
                    <h2
                        style={{ color: "#B599EE" }}
                        className="font-semibold text-[60px] leading-[70px] text-left text-2xl mb-2"
                    >
                        Unlock Potential with <br></br> Our Offerings
                    </h2>
                </div>

                <div>
                    <div className="offering-card container mt-24 card-wrapper flex flex-col sm:flex-row justify-between items-start">
                            {/* card1 */}
                            <>
                                <div
                                    
                                    style={{ backgroundColor: "#EFE9FB" }}
                                    className="card min-w-full min-h-[400px] sm:min-h-[400px] sm:max-w-[396px] sm:min-w-[396px] rounded-3xl relative mb-6"
                                >
                                    {isOfferingCardDataOpen1 ? (
                                        <div className="" style={{ padding: "30px 30px" }}>
                                            <div
                                                className="heading"
                                                style={{
                                                    fontSize: "28px",
                                                    color: "#000",
                                                    fontWeight: "600",
                                                    marginBottom: "30px",
                                                }}
                                            >
                                                Services
                                            </div>

                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>
                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>
                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>
                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>
                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>                                    
                                         
                                            <div
                                                className=""
                                                style={{
                                                    padding: "20px 0px 0px 0px",
                                                    display: "flex",
                                                    justifyContent: "end",
                                                }}
                                            >
                                                <Image
                                                    src={"home/icon/arrowUp.svg"}
                                                    width={45}
                                                    height={45}
                                                    alt="icon"
                                                    onClick={() => handleofferingCardClick1()}
                                                    style={{ transform: "rotate(-134deg)", cursor: 'pointer' }}
                                                ></Image>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="">
                                            <div
                                                className="rounded-3xl"
                                                style={{
                                                    backgroundImage:
                                                        "url(home/worker-explaining-change-project.png)",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover",
                                                    minHeight: "360px",
                                                }}
                                            ></div>
                                            <div className="card-body px-5 py-7 sm:px-4 sm:py-3">
                                                <div
                                                    className="card-header"
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <div
                                                        className="inline-block font-semibold"
                                                        style={{ color: "black", fontSize: "28px" }}
                                                    >
                                                        <LinearGradient
                                                            gradient={["to left", "#5F22D9 ,#E0028E"]}
                                                            fallbackColor="black"
                                                        >
                                                            Services
                                                        </LinearGradient>
                                                    </div>

                                                    <Image
                                                        onClick={() => handleofferingCardClick1()}
                                                        src={"home/icon/arrowUp.svg"}
                                                        width={40}
                                                        height={40}
                                                        style={{ cursor: "pointer" }}
                                                    ></Image>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>

                            {/* card2 */}
                            <>
                                <div
                                    
                                    style={{ backgroundColor: "#EFE9FB" }}
                                    className="card min-w-full min-h-[400px] sm:min-h-[400px] sm:max-w-[396px] sm:min-w-[396px] rounded-3xl relative mb-6"
                                >
                                    {isOfferingCardDataOpen2 ? (
                                        <div className="" style={{ padding: "30px 30px" }}>
                                            <div
                                                className="heading"
                                                style={{
                                                    fontSize: "28px",
                                                    color: "#000",
                                                    fontWeight: "600",
                                                    marginBottom: "30px",
                                                }}
                                            >
                                                Industry Spotlight
                                            </div>

                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>
                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>
                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>
                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>
                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>                                            
                                            
                                            <div
                                                className=""
                                                style={{
                                                    padding: "20px 0px 0px 0px",
                                                    display: "flex",
                                                    justifyContent: "end",
                                                }}
                                            >
                                                <Image
                                                    src={"home/icon/arrowUp.svg"}
                                                    width={45}
                                                    height={45}
                                                    alt="icon"
                                                    onClick={() => handleofferingCardClick2()}
                                                    style={{ transform: "rotate(-134deg)", cursor: 'pointer' }}
                                                ></Image>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="">
                                            <div
                                                className="rounded-3xl"
                                                style={{
                                                    backgroundImage:
                                                        "url(home/offerings/2.png)",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover",
                                                    minHeight: "360px",
                                                }}
                                            ></div>
                                            <div className="card-body px-5 py-7 sm:px-4 sm:py-3">
                                                <div
                                                    className="card-header"
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <div
                                                        className="inline-block font-semibold"
                                                        style={{ color: "black", fontSize: "28px" }}
                                                    >
                                                        <LinearGradient
                                                            gradient={["to left", "#5F22D9 ,#E0028E"]}
                                                            fallbackColor="black"
                                                        >
                                                            Industry Spotlight
                                                        </LinearGradient>
                                                    </div>

                                                    <Image
                                                        onClick={() => handleofferingCardClick2()}
                                                        src={"home/icon/arrowUp.svg"}
                                                        width={40}
                                                        height={40}
                                                        style={{ cursor: "pointer" }}
                                                    ></Image>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>

                            {/* card3 */}
                            <>
                                <div
                                    
                                    style={{ backgroundColor: "#EFE9FB" }}
                                    className="card min-w-full min-h-[400px] sm:min-h-[400px] sm:max-w-[396px] sm:min-w-[396px] rounded-3xl relative mb-6"
                                >
                                    {isOfferingCardDataOpen3 ? (
                                        <div className="" style={{ padding: "30px 30px" }}>
                                            <div
                                                className="heading"
                                                style={{
                                                    fontSize: "28px",
                                                    color: "#000",
                                                    fontWeight: "600",
                                                    marginBottom: "30px",
                                                }}
                                            >
                                                Partners
                                            </div>

                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>
                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>
                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>
                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>
                                            <div
                                                className="subtext"
                                                style={{
                                                    fontSize: "20px",
                                                    borderBottom: "1px solid #d3d3d3",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                    paddingBottom: "10px",
                                                    paddingTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {" "}
                                                Business Consulting
                                            </div>
                                           
                                            <div
                                                className=""
                                                style={{
                                                    padding: "20px 0px 0px 0px",
                                                    display: "flex",
                                                    justifyContent: "end",
                                                }}
                                            >
                                                <Image
                                                    src={"home/icon/arrowUp.svg"}
                                                    width={45}
                                                    height={45}
                                                    alt="icon"
                                                    onClick={() => handleofferingCardClick3()}
                                                    style={{ transform: "rotate(-134deg)", cursor: 'pointer' }}
                                                ></Image>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="">
                                            <div
                                                className="rounded-3xl"
                                                style={{
                                                    backgroundImage:
                                                        "url(home/offerings/6.png)",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover",
                                                    minHeight: "360px",
                                                }}
                                            ></div>
                                            <div className="card-body px-5 py-7 sm:px-4 sm:py-3">
                                                <div
                                                    className="card-header"
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <div
                                                        className="inline-block font-semibold"
                                                        style={{ color: "black", fontSize: "28px" }}
                                                    >
                                                        <LinearGradient
                                                            gradient={["to left", "#5F22D9 ,#E0028E"]}
                                                            fallbackColor="black"
                                                        >
                                                            Partners
                                                        </LinearGradient>
                                                    </div>

                                                    <Image
                                                        onClick={() => handleofferingCardClick3()}
                                                        src={"home/icon/arrowUp.svg"}
                                                        width={40}
                                                        height={40}
                                                        style={{ cursor: "pointer" }}
                                                    ></Image>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OfferingCards;
