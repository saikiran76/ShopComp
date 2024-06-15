import { useState } from "react";
import { Button } from "./Button";
import { LuSettings2 } from "react-icons/lu";
import { searchItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [searchQuery, setSearchQuery]=useState('');
  const dispatch = useDispatch()
  console.log(searchQuery)

  return (
    <header className="bg-gray-100 p-4 flex items-center">
      <input
        type="text"
        placeholder="Search all product here..."
        className="w-1/2 p-2 border border-gray-300 rounded"
        onChange={(e)=>{
          setSearchQuery(e.target.value)
          dispatch(searchItem(searchQuery))
        }}
      />
      <Button name="Search" mar="ml-2" pad="px-5 py-2" handler={()=>{
        dispatch(searchItem(searchQuery))
        console.log("dispatched", searchQuery)
        }}/>
      <div className="p-3 bg-white cursor-pointer rounded ml-[14em]">
        <LuSettings2/>
      </div>
    </header>
  );
};

export default Header;
