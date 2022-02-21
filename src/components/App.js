
import React, { useEffect, useState } from "react"
import './App.css';
import Header from "./Header";
import Addcontact from "./Addcontact";
import Listcontact from "./Listcontact";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Contactinfo from "./Contactinfo";
import Updatecontact from "./Updatecontact";
import api from "../API/contacts"
 
function App() {
  const Local_key = "ContactList";
  const [contactArr,setcontactArr] = useState([]);


  // Retrive form axios call - all contactlist
  const retriveallData = async()=>{
    const responce = await api.get("/contacts");
    return responce.data;
  }

  const addcontacthandler= async(props)=>{
    const obj = {
      id:(Math.random()*100),
      ...props
    }
    const responce  = await api.post("/contacts",obj)
    setcontactArr([...contactArr, responce.data])
  }
  const removecontacthandler = async (id)=>{
    await api.delete(`/contacts/${id}`);
    const newConList = contactArr.filter((contact)=>{
          return contact.id !== id
    })
   
    setcontactArr(newConList)
  }
  const updatecontacthandler=async(props)=>{
   
    const responce  = await api.put(`/contacts/${props.id}`,props)
    setcontactArr([...contactArr, responce.data])
  }
  useEffect(()=>{
    // const retriveData = JSON.parse(localStorage.getItem(Local_key));
    // if(retriveData){
    //   setcontactArr(retriveData)
    // }
  const getall = async()=>{
    const getallData = await retriveallData();
    setcontactArr(getallData);
   
  } 

  getall();
  },[])

  useEffect(()=>{
    // localStorage.setItem(Local_key,JSON.stringify(contactArr))
  },[contactArr])
  return (
    <div className="App ui container " style={{width:"450px"}}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Listcontact contacts = {contactArr} getContactId = {removecontacthandler}  />}/>
          <Route path="/add" element={<Addcontact addcontacthandler={addcontacthandler} />} />
          <Route path="/update" element={<Updatecontact updatecontacthandler={updatecontacthandler} />} />
          <Route path="/contact:id" element={<Contactinfo contacts = {contactArr}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
