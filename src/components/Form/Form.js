import { useState } from "react"

function Form({addTodo}){
    const [todoInput, setTodoInput] = useState([])
    return(
        <form>
            <input
                type='text'
                value={todoInput}
                onChange={(event) => setTodoInput(event.target.value)}  
            />
            <button type='button' onClick={() => addTodo(todoInput)}>Enviar</button>
        </form>
    )
}

export default Form