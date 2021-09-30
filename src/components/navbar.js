import React from 'react' 
import {Link} from 'react-router-dom'

const Navbar=(props)=>{
    return(
        <div className="row" >

            <div className="col" ><Link to="/" style={{color:"white"}}>Home</Link></div>
            <div className="col" ><Link to="/login" style={{color:"white"}}>Login </Link></div>           
            <div className="col" ><Link to="/Signin" style={{color:"white"}}>SignIn</Link></div>


        </div>
    )
}

export default Navbar