import { LinearGradient } from "react-text-gradients";

function CenterHeading({ heading, desc, textColor, descColor, applyGradient }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full sm:w-1/2 text-center">
          <div className={`text-heading-01 ${textColor} ${desc ? "mb-6" : ""}`}>
            {applyGradient ? (
              <LinearGradient
                gradient={["to left", "#5F22D9, #E0028E"]}
                fallbackColor="black"
              >
                {heading}
              </LinearGradient>
            ) : (
              heading
            )}
          </div>
          {desc && (
            <div className={`text-heading-04 ${descColor} mb-8`}>{desc}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default CenterHeading;
