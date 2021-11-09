import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { WiSmallCraftAdvisory } from "react-icons/wi";
import { BsFillSunriseFill, BsFillSunsetFill, BsSun } from "react-icons/bs";
import { WiHumidity, WiDayWindy, WiCloudyWindy } from "react-icons/wi";

export const IconGenerator = (iconName) => {

    const iconObj = {
        FaTemperatureHigh: <FaTemperatureHigh />,
        FaTemperatureLow: <FaTemperatureLow />,
        WiSmallCraftAdvisory: <WiSmallCraftAdvisory size={60} />,
        BsFillSunriseFill: <BsFillSunriseFill />,
        BsFillSunsetFill: <BsFillSunsetFill />,  
        WiHumidity: <WiHumidity size={25} />,  
        WiDayWindy: <WiDayWindy size={25} />,  
        WiCloudyWindy: <WiCloudyWindy size={60} />,
    }

    return iconObj[iconName];

}