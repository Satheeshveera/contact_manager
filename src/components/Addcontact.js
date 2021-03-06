import React from "react";

 

class Addcontact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            number:""
        }
    }
        
    
    addcontact=(e)=>{
            e.preventDefault();
            if(this.state.name === "" || this.state.number === ""){
                alert("All fields are required...")
                return
            }else{
                this.props.addcontacthandler(this.state);
                this.setState({
                    name:"",
                    number:""
                });
            //   this.props.history.push("/")
            }
            
           
            
        }
    render(){
        return(
            <div className="ui main">
                <h2>Add contact <a href="/" className="ui button blue" style={{float:"right"}}  >Go Back</a></h2>
                <form className="ui form" onSubmit={this.addcontact}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={(e)=>this.setState({ name:e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Number/E-mail</label>
                        <input type="text" name="number" placeholder="Enter number/email"   value={this.state.number} onChange={(e)=>this.setState({ number:e.target.value})}/>
                    </div>
                     <button className="ui button blue">Add</button> 
                </form>
            </div>
        )
    }
}

export default Addcontact;