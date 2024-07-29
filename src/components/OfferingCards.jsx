import Image from "next/image";
import { LinearGradient } from "react-text-gradients";

function OfferingCards() {
  return (
    <>
      <div className="" style={{ padding: "150px 0px" }}>
        <div className="container flex-col px-10">
          <h2
            style={{ color: "#B599EE" }}
            className="font-semibold text-[60px] leading-[70px] text-left text-2xl mb-2"
          >
            Unlock Potential with <br></br> Our Offerings
          </h2>
        </div>

        <div>
          <div className="offering-card container mt-24 card-wrapper flex flex-col sm:flex-row justify-between">
            {[1, 2, 3].map((item) => (
              <>
                <div
                  key={item}
                  style={{ backgroundColor: "#EFE9FB" }}
                  className="card min-w-full min-h-[400px] sm:min-h-[400px] sm:max-w-[396px] sm:min-w-[396px] rounded-3xl relative mb-6"
                >
                  <div
                    className="rounded-3xl"
                    style={{
                      backgroundImage:
                        "url(/worker-explaining-change-project.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      minHeight: "360px",
                    }}
                  ></div>
                  <div className="card-body px-5 py-7 sm:px-4 sm:py-3">
                    <div className="card-header">
                      <div
                        className="inline-block font-semibold"
                        style={{ color: "black", fontSize: "28px" }}
                      >
                        <LinearGradient
                          gradient={["to left", "#5F22D9 ,#E0028E"]}
                          fallbackColor="black"
                        >
                          Services
                        </LinearGradient>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferingCards;
