import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
export const ProfileBar = () =>{
    const [name, setName] =useState('Jimmy Sullivan')
    const [visible, setVisible] = useState('hidden')
    return(
        <div className="p-3 flex items-center justify-between font-poppin mb-5 bg-gray-100 rounded">
            <div className="flex gap-2 items-center">
                <FaUserCircle style={{color:"gray"}}/>
                <p>{name}</p>
                <div className={`${visible} gap-1 items-center`}>
                    <input placeholder={name} className="p-2 border-gray-300 rounded" onChange={(e)=>setName(e.target.value)}></input>
                    <div className="text-orange-400 cursor-pointer" onClick={()=>setVisible('hidden')}><TiTick/></div>
                </div>
            </div>
            <div className="cursor-pointer" onClick={()=>setVisible('flex')}><FaEdit style={{color:"blue"}}/></div>
        </div>
    )

}