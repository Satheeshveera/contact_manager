import React from "react";
import { Link } from "react-router-dom";
import Cardcontact from "./Cardcontact";

const Listcontact = (props)=>{

  const deleteHandler=(id)=>{
    props.getContactId(id)
  }
 
  const conList = props.contacts.map((contact)=>{
        return (
           <Cardcontact contact={contact}  key={contact.id} clickHander={deleteHandler}/>
        )
  })
    return(
     <div className=" ui">
        <div > 
        <Link to={"/add"}>
        <button className="ui button blue right" >Add Contact</button>
        </Link>
        </div>
            <div className="ui celled list">
                 {conList} 
            </div>
     </div>
        
    )
}

export default Listcontact;