import Image from "next/image";

function EmbraceCard() {
  return (
    <>
      <div className="py-28">
        <div className="container mt-4 flex-col">
          <h2 className="font-semibold text-[60px] leading-[70px] text-[#fff] text-left text-2xl mb-2">
            Embrace tomorrow <br /> with Automation
          </h2>
        </div>

        <div className="embrace-card container mt-24 card-wrapper flex flex-col sm:flex-row justify-between">
          {[1, 2, 3].map((item) => (
            <>
              <div
                key={item}
                className="card min-w-full min-h-[400px] sm:min-h-[496px] px-5 py-11 sm:px-8 sm:py-12 sm:max-w-[396px] sm:min-w-[396px] rounded-3xl border-[#243c5a] relative mb-6 bg-[#561FC5]"
              >
                <div className="card-body ">
                  <div className="card-header">
                    <div className="inline-block text-[#EEF4FF] text-xl font-semibold">
                      Automation
                    </div>
                  </div>
                  <div className="card-content mt-11">
                    <div className="heading text-2xl sm:text-[36px] font-normal leading-[50px]">
                      Embrace tomorrow with automation
                    </div>
                    <div className="spacification-text mt-6 text-base">
                      We are committed to provide, secure, cost-effective &
                      scalable cloud implementation, cloud migration & cloud
                      support services to our customers.
                    </div>

                    <div className="absolute right-1 bottom-1">
                      <Image
                        src="/arrow-right.svg"
                        width={70}
                        height={70}
                        alt="Picture of the author"
                        className="clickarrow1"
                      />

                      <Image
                        src="/arrow-right2.svg"
                        width={70}
                        height={70}
                        alt="Picture of the author"
                        className="clickarrow2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default EmbraceCard;
