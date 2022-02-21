import React from "react";

class Updatecontact extends React.Component{
    constructor(props){
        super(props);
         console.log(props 
            )
        // const {id,name,number} = props.location.state.contact;
        this.state={
            name:"",
            number:"",
             
        }
    }
        
    
    updatecontact=(e)=>{
            e.preventDefault();
            if(this.state.name === "" || this.state.number === ""){
                alert("All fields are required...")
                return
            }else{
                this.props.updatecontacthandler(this.state);
                this.setState({
                    name:"",
                    number:""
                });
              
            }
            
        }
    render(){
        return(
            <div className="ui main">
                <h2>Update contact</h2>
                <form className="ui form" onSubmit={this.updatecontact}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={(e)=>this.setState({ name:e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Number</label>
                        <input type="text" name="number" placeholder="Enter number" max={10} value={this.state.number} onChange={(e)=>this.setState({ number:e.target.value})}/>
                    </div>
                     <button className="ui button blue">Update</button> 
                </form>
            </div>
        )
    }
}

export default Updatecontact;