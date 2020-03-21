import React from 'react'

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
          <h2>name: {name}</h2>
          <p>email: {email}</p>
          {
            isGoldClient
              ? <p>Client Gold</p> 
              : null
          }
          <input type="submit" value="Delete User" onClick={() => this.handleOnDeleteUser(id)}></input>
      </div>  
    );
  }
}

export default UserItem;
