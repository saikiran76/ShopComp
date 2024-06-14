const ProductItem = ({ product, addToCart }) => {
    return (
        <div className="product-item border p-2 mt-2 rounded flex flex-col relative h-fit w-[23%] bg-white group">
            <div className='w-full mb-2'>
                <img className="w-full h-32 object-cover" src={`https://m.media-amazon.com/images/S/aplus-media-library-service-media/c1fce2f7-164d-465a-8955-894bf3d28575.__CR0,23,463,579_PT0_SX362_V1___.jpg`} alt={product.name} />
            </div>
            <h4 className="text-sm font-bold mb-1">{product.name}</h4>
            <p className="text-orange-500 font-bold mb-2 text-xs">$ {product.price.toFixed(2)}</p>
            <button onClick={addToCart} className="hidden group-hover:block duration-200 text-black text-lg rounded-b p-1 absolute left-[8em]">
                +
            </button>
        </div>
  );
};

export default ProductItem;
