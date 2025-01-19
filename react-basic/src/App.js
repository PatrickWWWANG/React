// Root component

import { useState } from "react"

// App -> index.js -> public/index.html(root)


// const count = 100

// function getName () {
//   return 'Jack'
// }

// const list = [
//   { id: 1001, name: 'Vue'},
//   { id: 1002, name: 'React'},
//   { id: 1003, name: 'Angular'}
// ]

// const isLogin = true

// const articleType = 3 // 0 1 3
// function getArticleTemplate(){
//   if(articleType === 0){
//     return <div>No img</div>
//   } else if(articleType === 1){
//     return <div>One img</div>
//   } else{
//     return <div>Three img</div>
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       This is App

//       {/* Use '' for string */}
//       {'This is message'}

//       {/* Recognize js variable */}
//       {count}

//       {/* Use function */}
//       {getName()}

//       {/* Use method */}
//       {new Date().getDate()}

//       {/* Use js object */}
//       <div style={{color: 'red'}}>This is div</div>

//       {/* Render a list */}
//       {/* Map循环哪个结构 return结构 */}
//       {/* 注意：加上一个unique key， string or number id */}
//       {/* key的作用：react内部使用 提升更新性能 */}
//       <ul>
//         { list.map(item => <li key={item.id}>{item.name}</li>)}
//       </ul>

//       {/* Conditional rendering */}
//       {/* && */}
//       {isLogin && <span>This is span</span>}
//       {/* ?: */}
//       {isLogin ? <span>Jack</span> : <span>loading...</span>}
//       {/* Use a function for more complicated cases */}
//       {getArticleTemplate()}
//     </div>
//   );
// }

// function App() {
//   const clickHandler = () => {
//     console.log('Button clicked')
//   }
//   return (
//     <button onClick={clickHandler}>Click me</button>
//   )
// }

// function App() {
//   // Event arg e
//   const clickHandler = (e) => {
//     console.log('Button clicked', e)
//   }
//   return (
//     <button onClick={clickHandler}>Click me</button>
//   )
// }

// function App() {
//   // Custom event arg
//   const clickHandler = (name, e) => {
//     console.log('Button clicked', name, e)
//   }
//   return (
//     <button onClick={(e) => clickHandler('Jack', e)}>Click me</button>
//   )
// }

// // Define a component

// function Button() {
//   // Component logic
//   return <button>Click me</button>
// }

// const Button2 = () => {
//   return <button>Click me 2</button>
// }

// function App() {
//   return (
//     <div className="App">
//       {/* Method 1 */}
//       <Button />
//       <br></br>

//       {/* Method 2 */}
//       <Button2></Button2>
//     </div>
//   )
// }


// useState hook: 添加状态变量 数据驱动视图
// Build a counter, click to increment

// function App() {
//   const [count, setCount] = useState(0)

//   const handleClick = () => {
//     // Moodify count, rerender
//     setCount(count + 1)
//   }

//   return (
//     <div className="App">
//       <button onClick={handleClick}>{count}</button>
//     </div>
//   )
// }

// function App() {
//   const [form, setForm] = useState({
//     name: 'Jack',
//   })

//   const handleChangeName = () => {
//     setForm({
//       ...form,
//       name: 'John'
//     })
//   }

//   return (
//     <div className="App">
//       <button onClick={handleChangeName}>{form.name}</button>
//     </div>
//   )
// }


// 样式控制

import './index.css'

const style = {
  color: 'purple',
  fontSize: '60px'
}

function App() {
  return (
    <div>
      {/* Inline format */}
      <span style={{color: 'pink', fontSize: '50px'}}>This is span</span>
      <br></br>
      <span style={style}>This is span 2</span>
      <br></br>

      {/* Use a class import from a .css file */}
      <span className="foo">This is span 3</span>
    </div>
  )
}

export default App;
