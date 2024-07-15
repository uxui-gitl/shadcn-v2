import Image from "next/image";

function CardSectionNew() {
  return (
    <>
      <div className="container mt-4 flex-col px-10">
        <h2 className="font-semibold text-[60px] leading-[70px] text-[#fff] text-left text-2xl mb-2 pl-0 sm:pl-40">
          Embrace tomorrow <br /> with Automation
        </h2>
      </div>

      <div className="container mt-24 card-wrapper flex flex-col sm:flex-row justify-between">
        {[1, 2, 3].map((item) => (
          <>
            <div
            key={item}
              className="card min-w-full min-h-[400px] sm:min-h-[596px] px-5 py-11 sm:px-8 sm:py-12 sm:max-w-[396px] sm:min-w-[396px] rounded-3xl border-[#243c5a] relative mb-6"
              style={{
                border: "3px solid #d3d3d3d3",
                background:
                  "var(--Gradient-New, linear-gradient(90deg, rgba(195, 21, 169, 0.40) 0%, rgba(137, 40, 200, 0.10) 50%, rgba(83, 57, 229, 0.40) 100%))",
              }}
            >
              <div className="card-body">
                <div className="card-header">
                  <div className="border-[#FFF] border-2 rounded-6xl p-5 rounded-[48px] inline-block text-[#EEF4FF] text-base font-normal">
                    Automation
                  </div>
                </div>
                <div className="card-content mt-11">
                  <div className="text-2xl sm:text-4xl font-semibold">
                    Experience New Business Dimensions with Cloud
                  </div>
                  <div className="mt-6 text-base sm:text-xl">
                    We are committed to provide, secure, cost-effective &
                    scalable cloud implementation, cloud migration & cloud
                    support services to our customers.
                  </div>

                  <div
                    className="absolute right-1 bottom-1"
                    style={{ rotate: "-90deg" }}
                  >
                    <Image
                      src="/arrow-right.svg"
                      width={70}
                      height={70}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default CardSectionNew;
