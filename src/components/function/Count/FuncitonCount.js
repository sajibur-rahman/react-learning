import { useEffect, useState } from "react";

function FunctionCount() {
  const [count, setCount] = useState(0);
  const [posts,setPosts] = useState([]);
//   const [date, setDate] = useState(new Date());

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, []);

  const handleCount = () =>  {
    setCount((prevState) => prevState + 1);
  }

  return (
    <div>
      <h1>{posts.length}</h1>
      <button onClick={handleCount}>increase</button>
    </div>
  );
}

export default FunctionCount;
