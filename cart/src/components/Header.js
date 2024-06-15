import { Button } from "./Button";
import { LuSettings2 } from "react-icons/lu";

const Header = () => {
  return (
    <header className="bg-gray-100 p-4 flex items-center">
      <input
        type="text"
        placeholder="Search all product here..."
        className="w-1/2 p-2 border border-gray-300 rounded"
      />
      <Button name="Search" mar="ml-2" pad="px-5 py-2"/>
      <div className="p-3 bg-white cursor-pointer rounded ml-[14em]">
        <LuSettings2/>
      </div>
    </header>
  );
};

export default Header;
