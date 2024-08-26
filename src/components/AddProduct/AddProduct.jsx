import React, { useState } from "react"
import upload_area from "../../assets/upload_area.svg"

const AddProduct = () => {
  const [image, setImage] = useState(false)
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
  }

  const Add_product = async () => {
    let responseData
    let product = { ...productDetails }

    let formData = new FormData()
    formData.append("product", image)

    try {
      const uploadResponse = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      responseData = await uploadResponse.json()

      if (responseData.success) {
        product.image = responseData.image_url

        const addProductResponse = await fetch(
          "http://localhost:4000/addproduct",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        )

        const addProductData = await addProductResponse.json()

        if (addProductData.success) {
          alert("Product Added")
          console.log(product)
        } else {
          alert("Failed to add product")
        }
      } else {
        alert("Failed to upload image")
      }
    } catch (error) {
      console.error("Error during operation:", error)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <div className='box-border md:w-full md:max-w-[800px] w-auto p-7 m-5 md:py-8 md;px-12 md:my-5 md:mx-8 rounded-md bg-white  '>
      <div className='w-full text-[#7b7b7b] text-base '>
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          className='box-border w-full h-12 rounded pl-4 border border-[#c3c3c3] outline-none text-[#7b7b7b] font-poppins text-sm '
          type='text'
          name='name'
          placeholder='Enter Product Title'
        />
      </div>
      <div className='grid sm:grid-cols-2 grid-cols-1 my-5 gap-10'>
        <div className='w-full text-[#7b7b7b] text-base '>
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            className='box-border w-full h-12 rounded pl-4 border border-[#c3c3c3] outline-none text-[#7b7b7b] font-poppins text-sm '
            type='text'
            name='old_price'
            placeholder='Enter Old Price'
          />
        </div>
        <div className='w-full text-[#7b7b7b] text-base '>
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            className='box-border w-full h-12 rounded pl-4 border border-[#c3c3c3] outline-none text-[#7b7b7b] font-poppins text-sm '
            type='text'
            name='new_price'
            placeholder='Enter Offer Price'
          />
        </div>
      </div>
      <div className='w-full text-[#7b7b7b] text-base'>
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name='category'
          className='p-[10px] w-[200px] h-[50px] outline-none text-sm text-[#7b7b7b] border border-[#7b7b7b8d] rounded'>
          <option value='men'>Men</option>
          <option value='women'>Women</option>
          <option value='kid'>Kid</option>
        </select>
      </div>
      <div className='h-[120px] w-[120px] rounded-[10px] my-3 overflow-hidden'>
        <label htmlFor='file-input' className='cursor-pointer'>
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt='Upload Preview'
            className='object-contain w-full h-full'
          />
          <input
            onChange={(e) => imageHandler(e)}
            type='file'
            name='image'
            id='file-input'
            className='hidden'
          />
        </label>
      </div>

      <button
        onClick={() => {
          Add_product()
        }}
        className='mt-5 w-40 h-12 rounded-md bg-[#6079ff] border-none cursor-pointer text-white text-base font-medium '>
        ADD
      </button>
    </div>
  )
}

export default AddProduct
