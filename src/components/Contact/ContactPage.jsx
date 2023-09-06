import React from 'react'
import { useLocation } from 'react-router-dom'

function ContactPage() {
  const data=useLocation();
  console.log(data.state);
  return (
    // nhận data đc chuyển sang
    
    <div>ContactPage
      {/* &&=> toan tu if
        ?:=>toan tu 3 ngoi:if else      
      */}
      <p>{data.state && data.state.number}</p>
    </div>
  )
}

export default ContactPage