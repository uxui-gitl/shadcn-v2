import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import {RPALifeCycleData} from "./data.js";

function RPALifecycle() {
    return (
        <>
            <SectionWrapper
                id=""
                BGColor="bg-primary-900"
            >
                <div className="max-auto pt-8 pb-16 container grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-20">
                    {/* Left Column */}
                    <div className="flex flex-col justify-between md:min-h-[600px]">
                        <SectionHeading
                            Heading={"RPA Project Lifecycle"}
                            Desc={
                                "From inception to upheld outcomes, every stage of our RPA project lifecycle is precisely developed to optimize your business processes."
                            }
                            Color="white"
                            headingContainerWidth="w-full"
                        />

                        {/* Image Container with 50% Height */}
                        <div
                            className="items-end h-1/2 mt-6 bg-primary-10 rounded-3xl hidden md:block"
                            style={{
                                backgroundImage: "url('/rpa/RPA_ProjectLifecycle.webp')",
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                            }}
                        ></div>
                    </div>

                    {/* Right Column */}
                    <div className="" style={{ maxHeight: "600px" }}>
                        <div
                            className="p-2 bg-primary-10 border border-gray-200 rounded-3xl flex flex-col"
                            style={{ overflow: "auto", maxHeight: "inherit" }}
                        >
                            {RPALifeCycleData.map((item, index) => (
                                <div className="card bg-white rounded-3xl mb-3" key={index}>
                                    <div className="card-body p-6">
                                        <div className="text-body-01  text-secondary-400 mb-3">
                                            {item.title}
                                        </div>
                                        <h5 className=" text-heading-03 font-bold mb-3">
                                            {item.CardHeading}
                                        </h5>
                                        <ul className="max-w-md space-y-2 text-neutral-darkest-grey  text-base font-medium">
                                            {item.list &&
                                                item.list.map((listItem, listIndex) => (
                                                    <li
                                                        key={listIndex}
                                                        className="relative text-neutral-700 hover:text-primary-900 transition-colors duration-300 pl-4" // Ensure the padding is consistent
                                                    >
                                                        <span className="before:content-['•'] before:w-4 before:h-4 before:bg-no-repeat before:absolute before:left-0 before:top-0 before:bg-[url('/path/to/your-floral-icon.svg')] inline-block pr-2">
                                                            {listItem.text}
                                                        </span>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    )
}


export default RPALifecycle;


