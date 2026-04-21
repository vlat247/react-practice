
export default function Feed() {
    return (
        <div className="container">
            <h1 style={{ marginTop: '50px' }}>This is the FEED page</h1>
            <p>The routing is working! You are now on the /feed route.</p>
            <div className="feed-container">
                <div className="post">
                    <div className="post-content">
                        <p>Java Script</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

                    </div>
                    <div className="post-btn">
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
