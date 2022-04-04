import React, { useEffect, useState } from 'react';

const Posts = () => {
    const [posts,setPosts] = useState([]);
    const [serchPosts,setSearchPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => setPosts(data))
    },[])
    const handleSearch = e => {
        const searchText =  e.target.value
        const match = posts.filter((post) => post.title.toLowerCase().includes(searchText))
        console.log(match);
        setSearchPosts(match)
    }
    return (
        <div>
            <input onChange={handleSearch} type="text" placeholder='search'/> 
            {
                serchPosts.map((post) => (
                    <div>
                        <p>{post.title}</p>
                    </div>
                ))
            }       
        </div>
    );
};

export default Posts;