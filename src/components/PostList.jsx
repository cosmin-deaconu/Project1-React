import React from 'react';
import PostItem from './PostItem';

class PostList extends React.Component{
    constructor(props){
        super(props);
        this.state = { };
    }

    render(){
        return (
            <div>
                <h1>List of posts</h1>
                {this.props.posts.map((post, index) => {
                    return <PostItem 
                        key={index}
                        id={post.id}
                        title={post.title}
                    />
                }
                )}
            </div>
        );
    }
}

export default PostList;