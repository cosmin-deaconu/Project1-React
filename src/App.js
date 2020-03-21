import React from 'react';
import './App.css'
import UserAddForm from './components/UserAddForm'
import UserList from './components/UserList';
import PostList from './components/PostList';

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

    render() {
      return(
        <div className="App" style={{background : this.state.background, color : this.state.textColor}}>
          <div>
            <h1>Add people:</h1>
            <UserAddForm />
          </div>
          
          <div>
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
          </div>
          
          <div>
            {this.state.loadUsers
            ? <UserList users={this.state.users} />
            : <PostList posts={this.state.posts} />
            }
          </div>

          <div>
          <h2>Change color</h2>
            <label>Background color:</label>
            <input type="color" onChange={(event) => this.handleBackgroundChange(event)}/>
          </div>
          <div>
            <label>Text color:</label>
            <input type="color" onChange={(event) => this.handleTextColorChange(event)}/>
          </div>       
        </div>
      );
    }
}

export default App;
