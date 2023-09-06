import React from 'react'
import { useNavigate } from 'react-router-dom'

function DemoNavigate() {
    // Navigate được sử dụng để chuyển trang ,sử dụng với history của trình duyệt
    // để chuyển trang
    // là 1 hook được cung cấp bởi react-router-dom
    const navigate=useNavigate()
  return (
    <div>
        {/* dùng để chuyển trang */}
        <button onClick={()=>navigate("/contact")}>Go to contact Page</button>
        {/* Sử dụng navigate với history */}
        <button onClick={()=>navigate(-1)}>Back</button>
        <button onClick={()=>navigate(1)}>Forward</button>
        {/* sử dụng navigate với replace =true=> không lưu lịch sử */}
        <button onClick={()=>navigate("/contact",{replace:true})}>Go to contact page - Not save history</button>
        {/* Sử dụng navigate để truyêfn dữ liệu (contact)*/}
        <button onClick={()=>navigate("/contact",{state:{Number:10}})}>Go to contact with Data</button>
    </div>
  )
}

export default DemoNavigate