import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Course() {
    const [searchParam,setsearchParam]=useSearchParams()
  return (
    <div>
        
        <h1>Course Table</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>React</td>
                    <td>14000</td>
                    <td>
                        <button onClick={()=>setsearchParam({Course:"reactJs",price:"12000"})}>Detail</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Java</td>
                    <td>14000</td>
                    <td>
                    <button onClick={()=>setsearchParam({Course:"Java",price:"14000"})}>Detail</button>
                    </td>
                </tr>
            </tbody>
        </table>


        <h3>Khoa hoc la :{searchParam.get("course")}-Gia:{searchParam.get("price")}</h3>
    </div>
  )
}

export default Course