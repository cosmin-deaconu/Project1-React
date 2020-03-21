import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillMount(){
        console.log("UserItem did mount")
    }

    deleteUserFromList(id){
        this.props.deleteUserFromList(id);
    }

    render() {
        return (
            <div>
                <h1>List of peoples</h1>
                {
                    this.props.users.map((user, index) => {
                        return (
                            <UserItem 
                                id={ user.id }
                                key={index}
                                name={user.name}
                                email={user.email}
                                isGoldClient={user.isGoldClient}
                                deleteUserFromList={(id) => this.deleteUserFromList(id)}
                            />
                        );
                    })
                }
            </div>
        );
    }

}

export default UserList;
