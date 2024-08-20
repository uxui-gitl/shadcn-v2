import Image from "next/image";
import Link from "next/link";
import OutlinedButtonWithArrow from "./OutlinedButtonWithArrow";

function CommonCard({ Item, setpageID }) {
  const {
    CardBGImageUrl = "",
    BGColor = "",
    CardBGColor = "",
    CardColor = "",
    cardTitle = "",
    cardIconUrl = "",
    cardHeading = "",
    cardDesc = "",
    isArrow = "true",
    downImageUrl = "",
    link = [],
    cardDownImageMinHeight = "200px",
    arrowColor = "#FFF",
  } = Item;

  const cardBodyMinHeight = setpageID === "ai-ml" ? "564px" : "424px";

  return (
    <>
      <div
        className="rounded-3xl shadow min-h-[424px] flex flex-col justify-between"
        style={{
          backgroundImage: `url(${CardBGImageUrl})`,
          backgroundSize: "cover",
          backgroundColor: `${CardBGColor}`,
          color: CardColor,
          width: "100%",
          minHeight: cardBodyMinHeight,
        }}
      >
        <div className="card-body p-10 flex-grow">
          {cardTitle && <div className="text-[#E0028E] mb-8">{cardTitle}</div>}
          {cardIconUrl && (
            <div className="pb-8">
              <Image src={cardIconUrl} alt="" width={50} height={50} />
            </div>
          )}
          {cardHeading && (
            <h5
              className="text-[42px] leading-[48px] font-semibold"
              dangerouslySetInnerHTML={{ __html: cardHeading }} // Render HTML content
            />
          )}
          {cardDesc && (
            <p
              className="my-5 font-normal"
              dangerouslySetInnerHTML={{ __html: cardDesc }} // Render HTML content
            />
          )}
          {link.length > 0 && (
            <ul className="my-1 md:my-1">
              {link.map((list, index) => (
                <li
                  key={index}
                  className="border-b-2 border-[#dbdbdb3d] py-2 md:py-3"
                >
                  <Link
                    href={list.url}
                    className="text-[#101828] text-[16px] md:text-[18px] font-normal leading-[28px] w-fit flex transition-all hover:opacity-75"
                  >
                    {list.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {downImageUrl && (
          <div
            style={{
              width: "100%",
              position: "relative",
              minHeight: cardDownImageMinHeight,
            }}
          >
            <Image
              src={downImageUrl}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        )}
        {isArrow && (
          <div className="flex justify-end px-6 py-4">
            <OutlinedButtonWithArrow arrowColor={arrowColor} size={48} />
          </div>
        )}
      </div>
    </>
  );
}

export default CommonCard;
