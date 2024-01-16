import React, { useCallback } from 'react'

const Message = React.memo(({message})=>{
  return (
    <p>{message}</p>
  )
})

const ListItem = React.memo(({post}) => {
  return (
    <li key={post.id}>
      {post.title}
    </li>
  )
})

const List = React.memo(({posts, testFunction}) => {
  console.log("List is rendered");

  return (
    <ul>
      {posts.map(post => {
        return (<ListItem key={post.id} post={post}/>)
      })}
    </ul>
  )
})

const B = ({message, posts}) => {
  console.log("B is rendered");
  const testFunction = useCallback(() => {},[]);
  // useCallback을 이용하여 부모가 랜더링 되면 자식이 랜더링 되는 불필요한 현상을 막음
  // [] 에는 함수 내에서 참조하는 state, props가 있다면 의존성 배열에 추가
  /**
    useCallback을 사용하기 좋은 때 : 
    useCallback도 모든 함수에 다 사용하기보다는
    사용하는 자체로서 비용이 들기 때문에 정말 필요한 때 에 사용하는 게 좋습니다. 
    1. 자식 컴포넌트가 React.memo()로 최적화되어 있고
    2. 그 자식 컴포넌트에게 해당 함수를 props로 넘겨줄 때 
    useCallback을 사용하는 것이 유용합니다.
   */

  return (
    <div>
      <h1>B Component</h1>
      <Message message={message}/>
      <List posts={posts} testFunction={testFunction}/>
    </div>
  )
}

export default B