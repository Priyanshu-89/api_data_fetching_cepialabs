

const ProductItem = ({title, thumbnail, price, rating}) => {
  return (
    <div className="bg-slate-200 shadow rounded-md px-4  hover:scale-105 transform transition  duration-300 ease-linear">
      <div className="relative">
  <img src={thumbnail} alt={title}  className=""/>
        <h2 className="absolute top-4 right-2 bg-pink-600 text-pink-50 rounded font-medium text-xs py-1 px-2">{title}</h2>
      </div>
    

  <div className="flex items-center justify-between gap-3">
        <p className="text-pink-600 md:bg-pink-200 md:px-2 md:py-1 rounded-md  font-medium">Price: ${price}</p>
      <p className="text-orange-600 md:bg-orange-200 md:px-2 md:py-1 rounded-md  font-medium">Rating: {rating}</p>
  </div>
    </div>
  )
}

export default ProductItem
