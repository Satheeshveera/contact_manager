import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg"

const Cardcontact = (props)=>{
     const {id,name,number} = props.contact;
      
      return(
            <div className="item"  style={{display:"flex"}}>
                <img src={Logo} className="ui avatar image"></img>
                <div className="content">
                   <Link to={{pathname:`/contact:${id}`, obj:"stirng" }}>
                   <div className="header">{name}</div>
                    <div >{number}</div></Link>
                </div>
               <div style={{width:"100%",textAlign:"end"}}> 
               {/* <Link to={{pathname:`update`, state:{contact:props.contact} }}> 
                <i className="edit alternate outline icon" style={{color:"Blue",marginTop:"7px"}} ></i> </Link> */}
                     <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px"}} onClick={()=>props.clickHander(id)}></i>
               </div>
            </div>
      )
  }
  
  export default Cardcontact;