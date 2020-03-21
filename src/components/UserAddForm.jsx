import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            errors: {}
        };

    }

    handleOnNameChange(event) {
        const inputValue = event.target.value;
        this.setState({name: inputValue});
    }

    handleOnEmailChange(event) {
        const inputValue = event.target.value;
        this.setState({email: inputValue});
    }

    handleOnIsGoldClientChange(event) {
        const inputValue = event.target.checked;
        this.setState({isGoldClient: inputValue});
    }

    handleOnSubmitForm(event){
        event.preventDefault();
        const {name, email, isGoldClient} = this.state;
        
        if(this.handleValidation()){
            this.props.updateUsersList(name, email, isGoldClient);
            alert("Form submitted");
        }else{
            alert("Form has errors.")
        }
    }

    handleValidation(){
        let errors = {};
        let formIsValid = true;

        //Name
        if(!this.state.name){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }else if(typeof this.state.name !== "undefined"){
           if(!this.state.name.match(/^(?![\s.]+$)[a-zA-Z\s.]*$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
           }        
        }

        //Email
        if(!this.state.email){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }else if(typeof this.state.email !== "undefined"){
           let lastAtPos = this.state.email.lastIndexOf('@');
           let lastDotPos = this.state.email.lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') === -1 && lastDotPos > 2 
            && (this.state.email.length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

       this.setState({errors: errors});
       return formIsValid;
   }

    render(){
        return (
            <form className="user-add-form" onSubmit={(event) => this.handleOnSubmitForm(event)}> 
                <h2>Add new user</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleOnNameChange(event)}/>
                <span style={{color: "red"}}>{this.state.errors["name"]}</span>

                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={this.state.email} onChange={(event) => this.handleOnEmailChange(event)}/>
                <span style={{color: "red"}}>{this.state.errors["email"]}</span>

                <label htmlFor="gold-client">IsGoldClient:</label>
                <input type="checkbox" name="gold-client" checked={this.state.isGoldClient} onChange={(event) => this.handleOnIsGoldClientChange(event)}/>

                <input type="submit" value="Add New User"></input>
             </form>
        );
    }
}

export default UserAddForm;
