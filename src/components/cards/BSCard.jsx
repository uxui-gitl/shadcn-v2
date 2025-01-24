import Image from "next/image";
import Link from "next/link";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";

function BSCard({ Item, setpageID, setBorderColor="border-neutral-white border-opacity-10", setCardsMinHeight="min-h-[374px]  md:min-h-[374px] lg:min-h-[374px] 2xl:min-h-[374px]" }) {
  const {
    CardBGImageUrl = "",
    CardBGColor = "",
    CardTextColor = "",
    CardDescColor = "",
    CardBGImageUrlSize = "cover",
    CardTitle = "",
    CardIconUrl = "",
    CardHeading = "",
    CardDesc = "",
    isArrow = false,
    DownImageUrl = "",
    link = [],
    CardDownImageMinHeight = "200px",
    arrowColor = "#FFF",
    additionalData=[],
    CardMinHeight=''
  } = Item;

  return (
    <>
      <div
        className={`commonCard mt-5 rounded-3xl ${setCardsMinHeight}  flex flex-col justify-between border-[1px] ${setBorderColor} mb-2`}
        style={{
          background: `url(${CardBGImageUrl}), ${CardBGColor}`,
          backgroundSize: CardBGImageUrlSize,
          color: CardTextColor,
          width: "100%",
        }}
      >
        <div className="card-body p-5 flex-grow">
          {CardTitle && <div className="text-[#E0028E] mb-8">{CardTitle}</div>}
          {CardIconUrl && (
            <div className="pb-8 lg:pb-5 2xl:pb-8">
              <Image src={CardIconUrl} alt="" width={48} height={48} />
            </div>
          )}
          {CardHeading && (
            <h5
              className={`text-heading-03 font-semibold ${CardTextColor}`}
              dangerouslySetInnerHTML={{ __html: CardHeading }} // Render HTML content
            />
          )}
          {CardDesc && (
            <p
              className={`${CardDescColor} text-body-02 my-5 lg:my-3 2xl:my-5 font-normal`}
              dangerouslySetInnerHTML={{ __html: CardDesc }} // Render HTML content
            />
          )}
          {link.length > 0 && (
            <ul className="my-1 md:my-1">
              {link.map((list, index) => (
                <li
                  key={index}
                  className="border-b-2 border-neutral-ghost-white py-3 md:py-3"
                >
                  <Link
                    href={list.url}
                    className="text-body-01 font-medium w-fit flex transition-all hover:opacity-75"
                  >
                    {list.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {DownImageUrl && (
          <div
            style={{
              width: "100%",
              position: "relative",
              minHeight: CardDownImageMinHeight,
            }}
          >
            <Image
              src={DownImageUrl}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        )}
        {isArrow && (
          <div className="flex justify-end px-6 py-4">
            <OutlinedButtonWithArrow arrowColor={CardTextColor} size={24}/>
          </div>
        )}
      </div>
    </>
  );
}

export default BSCard;
