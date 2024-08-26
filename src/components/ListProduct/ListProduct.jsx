import React, { useEffect, useState } from "react"
import cross_icon from "../../assets/cross_icon.png"

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([])

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:4000/allproducts")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setAllProducts(data)
    } catch (error) {
      console.error("Error during network request in fetchInfo:", error.message)
    }
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  const removeProduct = async (id) => {
    try {
      const response = await fetch("http://localhost:4000/removeproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })

      if (!response.ok) {
        throw new Error(
          `Failed to remove product. HTTP status: ${response.status}`
        )
      }

      await fetchInfo()
    } catch (error) {
      console.error("Error in removeProduct:", error.message)
    }
  }


  return (
    <div className='flex flex-col items-center md:w-full w-[95%] box-border md:py-[10px] md:h-[680px] h-full overflow-y-auto md:px-12 py-3 px-8 my-5 mx-5 m-8 rounded-md bg-white  '>
      <h1 className='text-2xl font-bold'>All Product List</h1>
      <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-10 w-full md:py-5 py-4 md:text-[15px] text-xs text-[#454545] font-semibold '>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div>
        <hr />
        {allProducts.map((product, index) => {
          return (
            <>
              <div
                className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center gap-10 w-full py-5 text-[#454545] font-medium'
                key={index}>
                <img src={product.image} alt='' className='md:h-20 h-[60px]' />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => {removeProduct(product.id)}}
                  src={cross_icon}
                  alt=''
                  className='cursor-pointer m-auto'
                />
              </div>
              <hr />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ListProduct
