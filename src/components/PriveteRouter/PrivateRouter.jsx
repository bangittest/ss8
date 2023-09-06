import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRouter() {
    //navigate khác với useNavigate
    //Navigate chuyển hướng router và render component
    const isLogin=false

  return (
   isLogin? <Outlet/>:<Navigate to={"/login"}/>
  )
}

export default PrivateRouter