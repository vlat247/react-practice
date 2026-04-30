import React from 'react'
import { PostItem } from './PostItem'

const PostList = ({posts, title}) => {
  return (
    <div>
        <h1 style={{fontSize: "40px", textAlign: "center", marginTop: "0px"}}>{title}</h1>
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
    </div>
  )
}

export default PostList