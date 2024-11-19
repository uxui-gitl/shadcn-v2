
import { LinearGradient } from "react-text-gradients";
function Overview({ Text }) {
    return (
        <h1 className ="text-heading-03 text-center px-6 pt-24 mb-24">
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