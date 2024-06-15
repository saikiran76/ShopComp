export const Button = ({name, width, handler=()=>null, mar, pad="p-2"}) =>{
    return(
        <button className={`bg-orange-500 text-white ${pad} rounded ${mar} hover:bg-[#FEE4A4] hover:text-[#764A2D] duration-300 ${width}`}>{name}</button>
    )
}