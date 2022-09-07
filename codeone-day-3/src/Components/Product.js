import React from 'react'

const Product = ({Product, deleteFunction}) => {
  return (
    <div className='flex flex-col gap-2'>
    Product List 
    <ul className='list-disc list-inside flex flex-col gap-4 items-center'>
      {Product.map((Product) => {
        return(
          <div key={Product.id} className='flex gap-5 justify-center'>
          <li>
            {Product.title} - {Product.price}
          </li>
          <button onClick={()=>deleteFunction(Product.id)} className="text-2xl bg-gray-500 rounded-lg p-1">
            Delete List
          </button>
          </div>
        )
      })}
    </ul>
  </div>
  )
}

export default Product