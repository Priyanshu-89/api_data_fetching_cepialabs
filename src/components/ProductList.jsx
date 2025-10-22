import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "./Loading"
import ProductItem from "./ProductItem"
import SearchBar from "./SearchBar"
import CategoryFilter from "./CategoryFilter"

const ProductList = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")

    useEffect(() => {
   fetchProducts()
   fetchCategories()
    }, [])

    // All product 

         const fetchProducts = async () => {
            setLoading(true)
            try {
                let productData = await axios.get('https://dummyjson.com/products')
                setProducts(productData.data.products)
                console.log(productData)
            } catch (error) {
                console.log("Error", error)
            }
            setLoading(false)
        }
        // All category

        const fetchCategories=async()=>{
            try {
                const res=await axios.get('https://dummyjson.com/products/categories')
                setCategories(res.data)
            } catch (error) {
                console.log("Error in Fetching Categories: ", error)
            }
        }

        const fetchCategory=async(category)=>{
            if(!category){
                fetchProducts()
                return
            }
            setLoading(true)
            try {
                const res=await axios.get(`https://dummyjson.com/products/category/${category.toLowerCase()}`)

              
                setProducts(res.data.products)
            } catch (error) {
                console.log("Error in Fetching Categories: ", error)
            }finally{
                setLoading(false)
            }
        }

        const handleCategoryChange=(category)=>{
            console.log("Selected Category", category)
            setSelectedCategory(category)
            fetchCategory(category)
        }

    // For Search the filter product by name
    const filterProducts=products.filter((item)=>
    item.title.toLowerCase().includes(search.toLowerCase()))
    return (
        <>

        {/* Serach Bar Filter  */}
        <div>
            <SearchBar search={search} setSearch={setSearch}/>
        </div>
        {/* Category Filter  */}

        <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onChangeCategory={handleCategoryChange}
        />

            {loading && <Loading />}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 p-3">
                {!loading && filterProducts.length>0? (
                filterProducts.map((data)=>(
                        <ProductItem
                            key={data.id}
                            title={data.title}
                            thumbnail={data.thumbnail}
                            price={data.price}
                            rating={data.rating}
                        />

                    ))
                ): !loading && filterProducts.length===0 &&(
                    <p className="text-center text-pink-600 font-semibold text-2xl">OOPS! Category Not Found

                </p>
                )
                }

            </div>

        </>
    )
}
export default ProductList
