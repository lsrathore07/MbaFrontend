import { Button, Form, Navbar } from "react-bootstrap"
import logo from "../../assetes/30036222730.png"
import { isUserLoggedIn } from "../../utils/helper"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

 const Nav=({filterMovies})=>{
  
    const isloggedIn =isUserLoggedIn()
    const navigate=useNavigate()
    const [searchValue,onSearchChange]=useState("")

    const onAuthButtonClick=()=>{
        if(isloggedIn){
            localStorage.clear();
        }
        navigate("/login")

    }

   const onInputChange=(e)=>{
     onSearchChange(e.target.value)
     
     if(filterMovies){
        filterMovies(e.target.value);
    }
   }

    return(
        <div className=" bg-dark sticky-top">
        <div className="d-flex align-items-center justify-content-around">
            <div className="  ">
             <div className="text-white"><img height="70rem" width={"auto"} src={logo}/></div>
            </div >
            <div >
            <Form.Control  type="text"  placeholder="Search Movie" input={searchValue} onChange={onInputChange}/>
            </div>
            <div >
            <Button onClick={onAuthButtonClick}  variant="danger">{{isloggedIn }?"Logout":"Login"}</Button>
            </div>
        </div>
        </div>
    )
}

export default Nav;