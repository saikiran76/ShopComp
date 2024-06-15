import { FaUserCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
export const ProfileBar = () =>{
    return(
        <div className="p-3 flex items-center justify-between font-poppin mb-5 bg-gray-100 rounded">
            <div className="flex gap-2 items-center">
                <FaUserCircle style={{color:"gray"}}/>
                <p>Jimmy Sullivan</p>
            </div>
            <FaEdit style={{color:"blue"}}/>
        </div>
    )

}