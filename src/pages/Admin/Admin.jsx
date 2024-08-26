import React from "react"
import Slidebar from "../../components/Slidebar/Slidebar"
import { Routes, Route } from "react-router-dom"
import AddProduct from "../../components/AddProduct/AddProduct"
import ListProduct from "../../components/ListProduct/ListProduct"

const Admin = () => {
  return (
    <div className=' md:flex md:flex-row flex-col '>
      <Slidebar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/listproduct' element={<ListProduct />} />
      </Routes>
    </div>
  )
}

export default Admin
