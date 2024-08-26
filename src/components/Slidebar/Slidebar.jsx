import React from "react"
import { Link } from "react-router-dom"
import add_product_icon from "../../assets/Product_Cart.svg"
import list_product_icon from "../../assets/Product_list_icon.svg"

const Slidebar = () => {
  return (
    <div className='flex md:flex-col pt-8 gap-5 w-full md:max-w-[250px] md:h-[100vh]  md:justify-normal justify-center py-8 bg-white '>
      <Link to='/addproduct'>
        <div className='flex items-center justify-center md:mx-5 py-3 px-3  rounded-md bg-[#f6f6f6] gap-5 cursor-pointer '>
          <img src={add_product_icon} alt='' />
          <p className='text-[blue] pt-2 text-xs'>Add Product</p>
        </div>
      </Link>

      <Link to='/listproduct'>
        <div className='flex items-center justify-center md:mx-5 py-3 px-3 rounded-md bg-[#f6f6f6] gap-5 cursor-pointer '>
          <img src={list_product_icon} alt='' />
          <p className='text-[blue] pt-2 text-xs'>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Slidebar
