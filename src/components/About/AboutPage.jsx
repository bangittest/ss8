import React from 'react'
import { Outlet } from 'react-router-dom'

function AboutPage() {
  return (
    // Out let dùng để định vị trí hiển thị các component
    <div><Outlet/></div>
  )
}

export default AboutPage