import React from 'react';
import './App.css'
import UserAddForm from './components/UserAddForm'
import UserList from './components/UserList';
import PostList from './components/PostList';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  float: ${props => props.float ? `${props.float}` : 'left'};;
  width: ${props => props.width ? `${props.width}%` : '30%'};
  border: ${props => props.border ? `${props.border}px solid #73AD21` : '0px solid #73AD21'};
  padding: 10px;
  margin: auto;
  text-align: center;
`;

class App extends React.Component{
    constructor() {
      super();
      this.state = {
        background:'black',
        textColor:'white',
        users: [],
        posts: [],
        loadUsers: true
      };
    }

    handleBackgroundChange (event) {
      const userColor = event.target.value;
      this.setState({background: userColor});
    }

    handleTextColorChange (event) {
      const userTextColor = event.target.value;
      this.setState({textColor: userTextColor});
    }

    componentDidMount(){
      this.getUsers();
      this.getPosts();
    }

    getUsers(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        const myUsers = users.filter(u => u.id <= 3);
        myUsers.forEach(u => u.isGoldClient = true)
        this.setState({users : myUsers });
      })
    }

    getPosts() {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json();
      })
      .then((posts) => {
        const customPosts = posts.filter(p => p.id <= 3);
        this.setState({posts : customPosts });
      })
    }

    handleOnClickGetUsers(){
      this.setState({loadUsers : true});
    }

    handleOnClickGetPosts(){
      this.setState({loadUsers : false});
    }
  
    getMaxId(users) {
      let maxId = 0;
  
      users.forEach(user => {
        if (user.id > maxId) {
          maxId = user.id;
        }
      });
  
      return maxId;
    }

    updateUsersList(name, email, isGoldClient){
      this.setState((previousState) => {
        return {
          users: [
            ...previousState.users,
            {
              id: this.getMaxId(previousState.users) + 1,
              name,
              email,
              isGoldClient
            }
          ]
        }
      });
    }

    deleteUserFromList(id){
      this.setState((previousState) => {
        return {
          users: [
            ...previousState.users.filter(u => u.id !== id)
          ]
        }
      });
    }
    
    render() {
      return(
        <div className="App" style={{background : this.state.background, color : this.state.textColor}}>
         <StyledDiv border = {3}>
           <UserAddForm updateUsersList={(name, email, isGoldClient) => this.updateUsersList(name, email, isGoldClient)}/>

           <h2>Get Data</h2>
            <input
              type="submit" 
              value="Get Posts"
              onClick={() => this.handleOnClickGetPosts()}
            />
            <input
              type="submit" 
              value="Get Users"
              onClick={() => this.handleOnClickGetUsers()}
            />

            <h2>Change color</h2>
            <label>Background color:</label>
            <input type="color" onChange={(event) => this.handleBackgroundChange(event)}/>
            <label>Text color:</label>
            <input type="color" onChange={(event) => this.handleTextColorChange(event)}/>
         </StyledDiv>

         <StyledDiv float = {"right"} width = {60}>
            {this.state.loadUsers
            ? <UserList users={this.state.users} deleteUserFromList={(id) => this.deleteUserFromList(id)} />
            : <PostList posts={this.state.posts} />
            }
         </StyledDiv>
        </div>
      );
    }
}

export default App;
