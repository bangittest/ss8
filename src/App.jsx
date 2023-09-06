import "./App.css";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
// import HomePage from './components/HomePage'
// import AboutPage from './components/About/AboutPage'
// import ContactPage from './components/Contact/ContactPage'
// import NotFound from './components/NotFound'
// import AboutProduct from './components/About/AboutProduct'
// import AboutUser from './components/About/AboutUser'
// import AboutIndex from './components/About/AboutIndex'
// import DemoNavigate from './components/DemoNavigate'
// import Course from './components/DynamicRouter/Course'
// import CouseDetail from './components/DynamicRouter/CouseDetail'
// import CourseDetailType from './components/DynamicRouter/CourseDetailType'
// import Login from './components/PriveteRouter/Login'
// import PrivateRouter from './components/PriveteRouter/PrivateRouter'
// import Admin from './components/PriveteRouter/Admin'

// function App() {
//   // const styleNavLink=({isActive})=>(
//   //   {
//   //     color:isActive?"red":"black",
//   //   }
//   // )

//   return (
//     <div>
//       {/* dùng link */}
//       {/* <ul>
//         <li>
//           <Link to={"/"}>HomePage</Link>
//         </li>
//         <li><Link to={"/about"}>AboutPage</Link>
//         <ul>
//           <li>
//             <Link to={"/about/about-product"}>About Product</Link>
//           </li>
//           <li>
//             <Link to={"/about/about-user"}>About User</Link>
//           </li>
//         </ul>
//         </li>
//         <li><Link to={"/contact"}>ContactPage</Link></li>
//       </ul> */}

//       {/* dùng NavLink */}
//       <ul>
//         <li>
//           <NavLink to={"/"} >HomePage</NavLink>
//         </li>
//         <li><NavLink to={"/about"} >AboutPage</NavLink>
//         <ul>
//           <li>
//             <NavLink to={"/about/about-product"}  >About Product</NavLink>
//           </li>
//           <li>
//             <NavLink to={"/about/about-user"} >About User</NavLink>
//           </li>
//         </ul>
//         </li>
//         <li><NavLink to={"/contact"} >ContactPage</NavLink></li>
//       </ul>

//       <DemoNavigate/>

//       {/*cấu hình router
//        */ }
//        <Routes>
//         { /*
//         Route:nhận 2 giá trị
//         +path:Đường dân url
//         +element:Component tương ứng
//         */ }
//         <Route path='/' element={<HomePage/>}></Route>
//         <Route path='/about' element={<AboutPage/>}>
//           {/* Router Index:Lấy path của router cha:path="/about" */}

//           <Route index element={<AboutIndex/>}></Route>

//           {/*định tuyến lồng*/}
//         <Route path='about-product' element={<AboutProduct/>}></Route>
//         <Route path='about-user' element={<AboutUser/>}></Route>
//         </Route>
//         <Route path='/contact' element={<ContactPage/>}></Route>

//         {/* Dynamic */}

//         <Route path='/course' element={<Course/>}></Route>
//         <Route path='/course/:id' element={<CouseDetail/>}></Route>
//         <Route path='/course/:id/:type' element={<CourseDetailType/>}></Route>

//         {/* private router */}

//         <Route element={<PrivateRouter/>}>
//         <Route path='/admin' element={<Admin/>}></Route>
//         </Route>
//         <Route path='/login' element={<Login/>}></Route>

//         {/* route bao loi */}
//         <Route path='*' element={<NotFound/>}></Route>
//        </Routes>

//     </div>
//   )
// }

// export default App

// import React from "react";
// import Home from "./components/Bai1/Home";
// import Contact from "./components/Bai1/Contact";
// import About from "./components/Bai1/About";
// import Portfolio from "./components/Bai1/Portfolio";

// function App() {
//   return (
//     <div className="p-4 p-md-5" id="content">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <button
//             type="button"
//             id="sidebarCollapse"
//             className="btn
//                       btn-primary"
//           >
//             <i className="fa fa-bars" />
//             <span className="sr-only">Toggle Menu</span>
//           </button>
//           <button
//             className="btn btn-dark d-inline-block d-lg-none
//                       ml-auto"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle
//                       navigation"
//           >
//             <i className="fa fa-bars" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="nav navbar-nav ml-auto">
//               <li className="nav-item active">
//                 <NavLink to={"/"} className="nav-link">Hom</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to={"/about"} className="nav-link">About</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to={"/portfolio"} className="nav-link">Portfolio</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to={"/contact"} className="nav-link">Contact</NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/about" element={<About />}></Route>
//         <Route path="/contact" element={<Contact />}></Route>
//         <Route path="/portfolio" element={<Portfolio />}></Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Service from "./components/Bai2/Service";
import Portfolia from "./components/Bai2/Portfolia";
import About from "./components/Bai2/About";
import Team from "./components/Bai2/Team";
import Contact from "./components/Bai2/Contact";
import Home from "./components/Bai2/Home";

function App() {
  return (
    <div>
      
      <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<Service />}></Route>
        <Route path="/portfolia" element={<Portfolia />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
