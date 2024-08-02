import { useEffect, useState } from "react"
import Create from "./Create"
import axios from "axios"

function Home() {
    const [todos,setTodos] =useState([])
    useEffect(() => {
       axios.get('http://localhost:3001/gettask')
       .then(result => setTodos(result.data))
       .catch(err => console.log(err))
    }, [])
    
  return (
    <div className="home">
        <h2>TODO LIST</h2>
        <Create/>
        {
             todos.length === 0 ?
            <div>
                <h2>Oops! Not Added Yet</h2>
            </div>
            :
            todos.map(todo => (
                <div>
                    {todo.task}
                </div>
            ))
        }
    </div>
  )
}

export default Home