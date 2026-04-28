import { useState } from "react";
import { PostItem } from "./PostItem";
export default function Feed() {

    const [posts, setPosts] = useState([
        {id:1, title: 'Java Script', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {id:2, title: 'React', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {id:3, title: 'C++', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {id:4, title: 'Python', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
    ]);

    return (
        <div className="container">
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
}

