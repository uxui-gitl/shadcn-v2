import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const HighlightPromo = ({
  blurEffect,
  setImageURL,
  setHeading,
  setDesc,
  setColor,
  setImageBGURL,
  setLogoImages,
  setPadding,
  setMSLogoURL,
  setMsAzureLogoURL,
  sectionHeaderWidth
}) => {
  const conditionalBlurStyles = blurEffect === "blurON" ? {
    background: 'linear-gradient(145deg, rgba(205, 186, 243, 0.25) 0%, rgba(205, 186, 243, 0.10) 75%)',
    boxShadow: '0px 40px 100px rgba(0, 0, 0, 0.10)',
    borderRadius: '24px',
    border: '2px #EFE9FB solid',
    backdropFilter: 'blur(30px)',
  } : {};

  const conditionalPadding = blurEffect === "blurON" ? {
    padding: '6rem',
  } : {};

  const logoImages = [
    "/CloudStackServices/logos/logo--dynamic-365.png",
    "/CloudStackServices/logos/logo--infor-CloudSuite.png",
    "/CloudStackServices/logos/logo--dynamic-365.png",
    "/CloudStackServices/logos/logo--dynamic-365.png",
  ];

  return (
    <SectionWrapper
      BGColor="bg-primary-10"
      Padding={setPadding}
      style={{
        backgroundImage: `url(${setImageBGURL})`,
        backgroundSize: "cover",
        Zindex: 1,
        position: 'relative',
      }}
    >
      <div className={`container mx-auto ${setPadding ? 'py-32' : ''}`}>
        <div
          className={` flex flex-col md:flex-row gap-8`}
          style={conditionalBlurStyles}
        >
          <div
            className={`flex-1 pb-2  ${setPadding ? '' : 'py-32'}`}
          >
            <SectionHeading
              Heading={setHeading}
              Color={setColor}
              Desc={setDesc}
              headingContainerWidth={sectionHeaderWidth}
            />
            {setLogoImages && (
              <section className="w-full md:w-1/2">
                <div className="flex flex-col md:flex-row gap-8 mb-2">
                  <div className="flex-1 bg-slate-400">
                    <Image src={logoImages[0]} alt="image size" width={264} height={120} />
                  </div>
                  <div className="flex-1">
                    <Image src={logoImages[1]} alt="Logo 2" width={264} height={120} />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 mb-2">
                  <div className="flex-1">
                    <Image src={logoImages[2]} alt="Logo 3" width={264} height={120} />
                  </div>
                  <div className="flex-1">
                    <Image src={logoImages[3]} alt="Logo 4" width={264} height={120} />
                  </div>
                </div>
              </section>
            )}
          </div>

          {setImageURL && (
            <div className="flex-1">

              <div className="relative w-full h-full  overflow-hidden">
                <Image
                  src={setImageURL}
                  alt="Main Image"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                  fill={true}
                />

              </div>
            </div>
          )}

          {setMSLogoURL && (
            <div className="w-full flex-1 flex flex-col justify-center items-center">
              <Image
                src={setMSLogoURL}
                alt="MS Logo"
                width={324}
                height={324}
            
              />
            </div>
          )}

          {setMsAzureLogoURL && (
            <div className="w-full flex-1 flex flex-col justify-center items-center mb-8">
              <Image
                src={setMsAzureLogoURL}
                alt="MS Logo"
                width={324}
                height={324}
             
              />
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HighlightPromo;
