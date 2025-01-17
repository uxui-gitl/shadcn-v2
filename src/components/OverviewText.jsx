
import { LinearGradient } from "react-text-gradients";
function Overview({ Text }) {
    return (
        <div className ="text-heading-03 text-center px-4 md:px-6 ">
            <LinearGradient
                gradient={["to left", "#5F22D9 ,#E0028E"]}
                fallbackColor="black"
            >
                {Text}
            </LinearGradient>
        </div>
    )
}


export default Overview;