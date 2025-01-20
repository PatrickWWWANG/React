// Root component

import { createContext, useContext, useState } from "react"
import { useRef } from "react";

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


// // 样式控制

// import './index.css'

// const style = {
//   color: 'purple',
//   fontSize: '60px'
// }

// function App() {
//   return (
//     <div>
//       {/* Inline format */}
//       <span style={{color: 'pink', fontSize: '50px'}}>This is span</span>
//       <br></br>
//       <span style={style}>This is span 2</span>
//       <br></br>

//       {/* Use a class import from a .css file */}
//       <span className="foo">This is span 3</span>
//     </div>
//   )
// }


// // 表单受控绑定

// // 1. Define a react state -- useState
// // 2. Bond: (1)value -> react state (2) onChange -> e.target.value -> react state

// function App() {
//   const [value, setValue] = useState('')
//   return (
//     <div>
//       <input
//       value = {value}
//       onChange={(e) => setValue(e.target.value)}
//       type = 'text'
//       ></input>
//     </div>
//   )
// }


// // React 中获取DOM

// // 1. Use useRef to create a ref, bond to DOM tag
// // 2. When DOM is available, get DOM from ref.current
// // After the rendering the DOM is built

// function App() {
//   const inputRef = useRef(null)
//   const showDOM = () => {
//     console.dir(inputRef.current)
//   }
//   return (
//     <div>
//       <input
//       type = 'text'
//       ref = {inputRef}
//       ></input>
//       <button
//       onClick={showDOM}
//       >Get DOM</button>
//     </div>
//   )
// }



// 组件通信

// // 父传子
// // 1. Parent component send data: bond property to child component tag
// // 2. Child component receive data: use props

// function Son (props) {
//   // props is an object with all data sent from parent component
//   // { name: 'data from parent' }
//   // props can pass any type of data
//   // props is read only object
//   console.log(props)
//   return <div>This is son, {props.name}, jsx: {props.child}</div>
// }

// function Son2 (props) {
//   // children is a special prop
//   console.log(props)
//   return <div>This is son2, {props.children}</div>
// }

// function App () {
//   const name = 'This is App name'
//   return (
//     <div>
//       <Son 
//         name={name} 
//         age={18}
//         isTrue={false}
//         list={['vue', 'react']}
//         obj={{ name: 'Jack' }}
//         cb={() => console.log(123)}
//         child={<span>This is span</span>}
//       />

//       <Son2>
//         <span>This is span2</span>
//       </Son2>
//     </div>
//   )
// }

// // 子传父
// // Call parent function in child component to send data as coefficient

// function Son ({ onGetSonMsg }) {
//   const sonMsg = 'this is son msg'
//   return (
//     <div>
//       This is son
//       <button onClick={() => onGetSonMsg(sonMsg)}>sendMsg</button>
//     </div>
//   )
// }

// function App () {
//   const [msg, setMsg] = useState('')
//   const getMsg = (msg) => {
//     console.log(msg)
//     setMsg(msg)
//   }
//   return (
//     <div>
//       This is App, {msg}
//       <Son 
//         onGetSonMsg={getMsg}
//       />
//     </div>
//   )
// }

// // 兄弟组件通信
// // child1 -> parent -> child2

// function A ({ onGetAName }) {
//   const name = 'This is A name'
//   return (
//     <div>
//       This is A component,
//       <button onClick={() => onGetAName(name)}>Send</button>
//     </div>
//   )
// }

// function B ({ name }) {
//   return (
//     <div>
//       This is B component, 
//       {name}
//     </div>
//   )
// }

// function App () {
//   const [name, setName] = useState('')
//   const getAName = (name) => {
//     console.log(name)
//     setName(name)
//   }
//   return (
//     <div>
//       This is App
//       <A onGetAName={getAName} />
//       <B name={name} />
//     </div>
//   )
// }

// 跨层通信
// Use context mechanism
// App -> A -> B
// 1. Use createContext method to create a context object

const MsgContext = createContext()

// 2. Use Provider to provide data from top level component
// 3. Use useContext hook to receive data from bottom level component

function A () {
  return (
    <div>
      This is A component
      <B />
    </div>
  )
}

function B () {
  const msg = useContext(MsgContext)
  return (
    <div>
      This is B component, {msg}
    </div>
  )
}

function App () {
  const msg = 'This is App message'
  return (
    <div>
      <MsgContext.Provider value={msg}>
        This is App
        <A />
      </MsgContext.Provider>
    </div>
  )
}

export default App;