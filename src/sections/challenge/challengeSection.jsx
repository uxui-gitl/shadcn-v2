import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const ChallengeSection = ({
    setHeading,
    setColor,
    setDesc,
    setImageBGURL,
    setChallengesList=[],
    bgColor='',

}) => {
    return (
        <>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0  min-h-[720px]">
                    <div className="rounded-l-3xl" style={{ background: `url('${setImageBGURL}')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition: 'left top' }}>
                    </div>
                    <div className={`px-5 py-10 rounded-r-3xl  ${bgColor}`} style={{backgroundColor: `${bgColor}`}}>
                        <SectionHeading
                            Heading={setHeading}
                            Color={setColor}
                            Desc={setDesc}
                            headingContainerWidth={'w-full'}
                        />

                        <ul className=" w-full text-neutral-white">
                            {setChallengesList.map((challenge, index) => (
                                <li
                                    key={challenge.id}
                                    className={`flex items-start py-4  border-b-[0.5px] border-neutral-white border-opacity-20 w-full ${index === setChallengesList.length - 1 ? 'border-b-0' : ''}`}
                                >
                                    <div className="flex-shrink-0 mr-4">
                                        <Image
                                            src={challenge.icon}
                                            alt={`${challenge?.title} icon`}
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-paragraph-01 leading-paragraph-01 font-normal">
                                            {challenge?.title}
                                        </h3>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
            <div className="container mx-auto py-32 justify-end hidden">
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <SectionHeading
                        Heading={setHeading}
                        Color={setColor}
                        Desc={setDesc}
                    />

                    <ul className="mt-2 space-y-4 w-full text-white">
                        {setChallengesList.map((challenge, index) => (
                            <li
                                key={challenge.id}
                                className={`flex items-start py-6 border-b-[0.5px] border-white w-full ${index === setChallengesList.length - 1 ? 'border-b-0' : ''}`}
                            >
                                <div className="flex-shrink-0 mr-4">
                                    <Image
                                        src={challenge.icon}
                                        alt={`${challenge.title} icon`}
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-paragraph-01 leading-paragraph-01 font-normal">
                                        {challenge.title}
                                    </h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
       
    );
}

export default ChallengeSection;
