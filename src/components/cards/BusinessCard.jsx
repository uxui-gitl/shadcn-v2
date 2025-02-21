import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";
import Image from "next/image";
import Link from "next/link";


function BusinessCard({item}){
    return(
        <>
            <div className="p-5 bg-white border border-gray-200 rounded-3xl">
              <div className="flex justify-left mb-4">
            <Image src={item.icon} alt="icon" width={48} height={48}/> {/* Adjust size as needed */}
          </div>
              
                <h5 className="mb-5 text-heading-03 font-medium  text-[#1D162B] ">{item.heading}</h5>
                {item?.list.map((data, index) => (
                  <p className="mb-2 p-1 border-b border-neutral-light-grey text-body-01 text-gray-500 " key={index}>{data}</p>
                ))}
                <div className="flex justify-end bottom-5 right-5">
                  <Link href={item?.url} target="_blank">
                    <OutlinedButtonWithArrow arrowColor={'black'} size={24} />
                  </Link>
                </div>
              </div>
        </>
    )
}


export default BusinessCard;