import React from 'react'

const CategoryFilter = ({categories, selectedCategory,  onChangeCategory}) => {
    return (
        <div>
            <div className="flex flex-col items-center m-4">
                <label className='mb-3 text-lg text-pink-600 font-medium'>---Filter By Category---</label>
                <select value={selectedCategory} onChange={(e) => onChangeCategory(e.target.value)} className='w-full max-w-xl px-3 py-2 bg-pink-100 outline-none rounded-md'>
                    <option className='border-none text-center'>--Category--</option>
                    {
                        categories.map((category, idx) => (
                            <option key={idx} value={category.name}>
                                {category.name.toUpperCase()}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default CategoryFilter
