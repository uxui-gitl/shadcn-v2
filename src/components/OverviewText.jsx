
import { LinearGradient } from "react-text-gradients";
function Overview({ Text }) {
    return (
        <h1 className =" text-paragraph-01 leading-paragraph-01 text-center px-6 pt-24 mb-24 font-medium">
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