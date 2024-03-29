import React , {useEffect, useState} from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers/index';

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
}; 

function App({value, onIncrement, onDecrement} : Props) {
  const dispatch = useDispatch();
  const counter = useSelector((state:RootState) => state.counter);
  const todos : string[] = useSelector((state:RootState) => state.todos);

  const [todoValue, setTodoValue] = useState("");

  const fetchPosts = (): any => {
    return async function fetchPostsThunk(dispatch:any, getState:any) {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      dispatch({type: "FETCH_POSTS", payload: await response.json()});
    }
  }

  useEffect(() => {
    dispatch(fetchPosts())
  },[dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  }
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //페이지가 refresh되는 것을 강제로 막아줌
    dispatch({type: 'ADD_TODO', text: todoValue});
    setTodoValue("");
  }

  return (
    <div className='App'>
      Clicked: {counter} times
      <button onClick={onIncrement}>
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>

      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange}/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;