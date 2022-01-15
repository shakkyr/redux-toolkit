import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './redux/slices/counterSlices';
import logo from './logo.svg';
import './App.css';





function App() {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchPost())
  },[])
//select store state
  const post = useSelector(state => state.post)
  const {postsList, loading} = post
  return (
    <div className="App">
      <h1>Post List </h1>
      <hr/>
      {loading ? <h2>Loadding...</h2> : postsList?.map(post =>(
        <>
          <h2>{post?.title}</h2>
          <p>{post?.body}</p>
          <hr/>
        </>
      ))}
      
    </div>
  );
}

export default App;
