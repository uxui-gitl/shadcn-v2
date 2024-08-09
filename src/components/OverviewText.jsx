
import { LinearGradient } from "react-text-gradients";
function Overview({ Text }) {
    return (
        <h1 className="text-lg sm:text-[24px] md:text-[32px] sm:leading-10 font-medium">
            <LinearGradient
                gradient={["to left", "#5F22D9 ,#E0028E"]}
                fallbackColor="black"
            >
                {Text}
            </LinearGradient>
        </h1>
    )
}


export default Overview;