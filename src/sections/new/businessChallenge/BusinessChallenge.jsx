import SectionWrapperNew from '@/components/SectionWrapperNew';
import Image from "next/image";

function BusinessChallenge({item, setTop, setPad, style, sectionHeading, sectionDesc}){
    return(
        <>
      <SectionWrapperNew
        sectionHeading={sectionHeading}
        sectionDesc={sectionDesc}
        sectionTextColor='text-neutral-white'
        sectionDescColor='text-neutral-white'
        sectionHeadingLayout="horizontal"
        setTop={setTop}
        setPad={setPad}
        style={style}
        bgColor={'bg-primary-900'}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="space-y-2 w-full text-neutral-white">
            {item.map((challenge, index) => (
              <li
                key={challenge.id}
                className={`flex items-start py-2 border-b-[0.5px] border-neutral-white border-opacity-20 w-full ${index === item.length - 1 ? 'border-b-0' : ''}`}
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
                  <h3 className="text-body-01 font-normal">
                    {challenge.title}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
          <div>
            {/* <img src="/about/video.png" /> */}
          </div>
        </div>
      </SectionWrapperNew>
        </>
    )
}


export default BusinessChallenge;