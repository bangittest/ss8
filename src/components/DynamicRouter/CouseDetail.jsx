import React from 'react'
import { useParams } from 'react-router-dom'

function CouseDetail() {
    // useParam la 1 hook dc cung cap bowi react-router-dom => lay param tren url
    const param=useParams()
    console.log(param);
    
  return (
    <div><p>
        Khoa hoc co id la :{param.id}</p></div>
  )
}

export default CouseDetail