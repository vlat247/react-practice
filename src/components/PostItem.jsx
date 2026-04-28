import React from 'react'

export const PostItem = (props) => {
  return (
    <div>
        <div className="feed-container">
                <div className="post">
                    <div className="post-content">
                        <strong>{props.post.id}</strong>
                        <p>{props.post.title}</p>
                        <p>{props.post.content}</p>
                    </div>
                    <div className="post-btn">
                        <button>Delete</button>
                    </div>
                </div>
            </div>
    </div>
  )
}
