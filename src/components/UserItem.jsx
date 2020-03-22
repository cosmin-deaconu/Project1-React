import React from 'react'
import logo from '../favicon.ico';

class UserItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  handleOnDeleteUser(id){
    this.props.deleteUserFromList(id);
  }

  render(){
    const {id, name, email, isGoldClient } = this.props;
    return (
      <div>
          <p>name: {name}</p>
          <p>email: {email}</p>
          {
            isGoldClient
              ? <p>Client Gold</p> 
              : null
          }
          
          { id === 1 ? <img src={logo} alt="" /> : null }
          { id === 1 ? <p>salary: 1000 $</p> : null }
          <input type="submit" value="Delete User" onClick={() => this.handleOnDeleteUser(id)}></input>
      </div>  
    );
  }
}

export default UserItem;
