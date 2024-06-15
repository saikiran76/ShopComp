import { AiFillAppstore } from "react-icons/ai";
import { GiPieChart } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { GrPowerReset } from "react-icons/gr";

export const BlackBar = () =>{
    return(
        <div className="bg-black flex justify-around gap-5 p-[2rem] text-white text-xl">
            <AiFillAppstore/>
            <GiPieChart />
            <CgNotes/>
            <GrPowerReset style={{color: "blue"}}/>

        </div>
    )

}