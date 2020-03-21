import React from 'react'

function PostItem(props){
    const {title, id} = props;
    return (
        <div>
            <p>PostId: {id}</p>
            <p>Title: {title}</p>
        </div>
    );
}

export default PostItem;
