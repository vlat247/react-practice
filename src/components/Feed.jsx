import { useState } from "react";
import { PostItem } from "./PostItem";
import PostList from "./PostList";
export default function Feed() {

    const [posts, setPosts] = useState([
        {id:1, title: 'Java Script', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {id:2, title: 'React', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {id:3, title: 'C++', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {id:4, title: 'Python', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
    ]);

    const [title, setTitle] = useState("fsd");

    const addNewPost = (e) => {

    }


    return (
        <div className="container">
            <form action="">
                <input value={title}
                onChange={e => setTitle(e.target.value)} type="text" placeholder="Title"/>
                <input type="text" placeholder="Content"/>
                <button>Create post</button>
            </form>
            <PostList posts={posts} title="My feed"/>
        </div>
    );
}

