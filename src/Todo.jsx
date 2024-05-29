import { useState } from "react"

function Todo()
{
    const [task,setTask] = useState([]);
    const [newTask,setNewTask] = useState("");
    
    function handleChange()
    {
    }

    function AddTask(e)
    {
    }

    function DeleteTask(index)
    {
    }

    function MoveTaskUp(index)
    {
    }
    function MoveTaskDown(index)
    {
    }

    return (
        <>
        <h1>Todo List</h1>
        <input type="text"  placeholder="Enter Task ..."/>
        </>
    )
}
export default Todo