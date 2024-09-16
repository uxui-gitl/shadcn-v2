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
    bgColor='#3a7398',
}) => {
    return (
        <>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="hidden md:block" style={{ background: `url('${setImageBGURL}')`, minHeight: 'auto', backgroundSize: 'cover', backgroundRepeat:'no-repeat' }}>
                    </div>
                    <div className="py-20 px-10 md:px-20" style={{ backgroundColor: bgColor }}>
                        <SectionHeading
                            Heading={setHeading}
                            Color={setColor}
                            Desc={setDesc}
                            headingContainerWidth={'w-full'}
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
                                        <h3 className="text-2xl font-normal">
                                            {challenge.title}
                                        </h3>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
            <div className="md:container mx-auto  justify-end hidden">
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
                                    <h3 className="text-2xl font-normal">
                                        {challenge.title}
                                    </h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
        // </SectionWrapper>
    );
}

export default ChallengeSection;
