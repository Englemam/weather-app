import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { WiSmallCraftAdvisory } from "react-icons/wi";
import { BsFillSunriseFill, BsFillSunsetFill, BsSun } from "react-icons/bs";

export const IconGenerator = (iconName) => {

    const iconObj = {
        FaTemperatureHigh: <FaTemperatureHigh />,
        FaTemperatureLow: <FaTemperatureLow />,
        WiSmallCraftAdvisory: <WiSmallCraftAdvisory size={60} />,
        BsFillSunriseFill: <BsFillSunriseFill />,
        BsFillSunsetFill: <BsFillSunsetFill />,
        BsSun: <BsSun size={60} />
    }

    return iconObj[iconName];

}