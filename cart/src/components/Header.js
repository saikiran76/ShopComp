const Header = () => {
  return (
    <header className="bg-gray-100 p-4 flex items-center font-sans">
      <input
        type="text"
        placeholder="Search all product here..."
        className="w-1/2 p-2 border border-gray-300 rounded"
      />
      <button className="bg-orange-500 text-white p-2 rounded ml-2">Search</button>
    </header>
  );
};

export default Header;
