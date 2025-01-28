import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import { MLData } from "./data.js";

function MLExperties(){
    return(
        <>
  <SectionWrapper ID={'MLExpertise'} BGColor={'bg-primary-400'}>
          <div className="container pt-8 pb-16 max-auto flex flex-col md:flex-row gap-x-11 -mt-8">
            <div className="text-left  flex-1">
              <SectionHeading
                Heading={'Machine Learning Expertise'}
                Desc={'We specialize in developing predictive models to forecast market shifts and identify untapped opportunities.'}
                Color={'white'}
                headingContainerWidth={'w-full'}
              >
              </SectionHeading>
            </div>

            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mt-5 md:mt-20 flex flex-col md:flex-row flex-1 flex-wrap gap-y-7">
              {MLData.map((item, index) => (
                <div className="flex-1 min-w-[50%]" key={index}>
                  <div className="p-4 pb-0">
                    <div className="w-[6rem] h-[0.25rem] mb-2 bg-primary-200"></div>
                    <p className="text-neutral-white font-semibold text-heading-03 my-3">
                      {item.title}
                    </p>
                    <p className=" text-neutral-white text-body-01  font-normal ">
                      {item.subTitle}
                    </p>
                    <Link
                      href={item.ctaURL}
                      className="text-primary-400 invisible text-body-01 font-medium  w-fit  flex transition-all hover:opacity-75  "
                    >
                      Know More{" "}
                      <Icon
                        path={mdiArrowRight}
                        style={{ marginLeft: "0.5em" }}
                        size={1}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
        </>
    )
}


export default MLExperties;