export const Button = ({name, border, width, handler=()=>null, mar, pad="p-2", bg="bg-orange-500", col="text-white"}) =>{
    return(
        <button className={`${bg} ${col} ${pad} rounded ${mar} ${border} hover:bg-[#FEE4A4] hover:text-[#764A2D] duration-300 ${width}`} onClick={handler}>{name}</button>
    )
}