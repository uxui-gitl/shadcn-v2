import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const ChallengeSection = ({
    setHeading,
    setColor,
    setDesc,
    setImageBGURL
}) => {
    const defaultChallengesIcon = '/upgradeCloud/icons/ico--target.svg';
    const CHALLENGES_LIST_DATA = [
        { id: 1, title: "Inadequate Scalability and Availability", icon: defaultChallengesIcon },
        { id: 2, title: "Unreliable Backup Storage", icon: defaultChallengesIcon },
        { id: 3, title: "Weak Disaster Recovery and Redundancy", icon: defaultChallengesIcon },
        { id: 4, title: "Inadequate Data Integrity and Automation Capabilities", icon: defaultChallengesIcon },
        { id: 5, title: "Limited IT Universality and Centralized Monitoring", icon: defaultChallengesIcon },
        { id: 6, title: "High Management Costs of IT Infrastructure", icon: defaultChallengesIcon },
    ];

    return (
        // <SectionWrapper
        //     BGColor="#356990"
        // >

        <>
            <div className="">
                <div class="grid grid-cols-2 gap-0">
                    <div style={{ background: `url('${setImageBGURL}')`, minHeight: 'auto', backgroundSize: 'cover', backgroundRepeat:'no-repeat' }}>
                    </div>
                    <div className="py-20 px-20" style={{ backgroundColor: '#3a7398' }}>
                        <SectionHeading
                            Heading={setHeading}
                            Color={setColor}
                        />

                        <ul className="mt-2 space-y-4 w-full text-white">
                            {CHALLENGES_LIST_DATA.map((challenge, index) => (
                                <li
                                    key={challenge.id}
                                    className={`flex items-start py-6 border-b-[0.5px] border-white w-full ${index === CHALLENGES_LIST_DATA.length - 1 ? 'border-b-0' : ''}`}
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


            <div className="container mx-auto  justify-end hidden">
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <SectionHeading
                        Heading={setHeading}
                        Color={setColor}
                    />

                    <ul className="mt-2 space-y-4 w-full text-white">
                        {CHALLENGES_LIST_DATA.map((challenge, index) => (
                            <li
                                key={challenge.id}
                                className={`flex items-start py-6 border-b-[0.5px] border-white w-full ${index === CHALLENGES_LIST_DATA.length - 1 ? 'border-b-0' : ''}`}
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