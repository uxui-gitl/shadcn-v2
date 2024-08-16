import React from "react";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import SectionHeading from "../../components/SectionHeading";

const HighlightPromo = ({
  setImageURL,
  setHeading,
  setDesc,
  setColor,
  setImageBGURL,
  setLogoImages
}) => {


  const logoImages = [
    "/CloudStackServices/logos/logo--dynamic-365.png",
    "/CloudStackServices/logos/logo--infor-CloudSuite.png",
    "/CloudStackServices/logos/logo--dynamic-365.png",
    "/CloudStackServices/logos/logo--dynamic-365.png",
  ]
  return (
    <>
      <SectionWrapper
        BGColor="#BEBEBE"
        Padding={false}
        style={{
          backgroundImage: `url(${setImageBGURL})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-col md:flex-row gap-2">
            <div className="flex-1 py-8 md:py-12 lg:py-48">
              <SectionHeading
                Heading={setHeading}
                Color={setColor}
                Desc={setDesc}
              />
             {setLogoImages && <section className="w-1/2">
                <div className="flex flex-row gap-8 mb-8">
                  <div className="flex-1 ">
                    <Image src={logoImages[0]} alt="test" width={264} height={264}/>
                  </div>
                  <div className="flex-1 "> <Image src={logoImages[1]} alt="test" width={264} height={264}/></div>
                </div>
                <div className="flex flex-row gap-8 mb-8">
                  <div className="flex-1 "> <Image src={logoImages[2]} alt="test" width={264} height={264}/></div>
                  <div className="flex-1 "> <Image src={logoImages[3]} alt="test" width={264} height={264}/></div>
                </div>
              </section>}
            </div>
            {setImageURL && (
              <div className="flex-1 relative flex flex-col justify-end">
                <Image
                  src={setImageURL}
                  alt="test"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default HighlightPromo;
