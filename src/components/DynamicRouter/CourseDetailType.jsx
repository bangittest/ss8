import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetailType() {
    const param=useParams()
    console.log(param);
  return (
    <div>Khoa hoc co id la {param.id}-khoa hoc{param.type}</div>
  )
}

export default CourseDetailType