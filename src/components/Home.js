import { useState, useRef } from 'react';



function List(props){
    const [task, settask] = useState([])
    const taskname = useRef()

    const addtask = () => {
        const newtask = task.concat(taskname.current.value)
        settask(newtask);
    }

    const deltask = (name) => {
        const newtask = task.filter(function (task){
            return task != name
        });
        settask(newtask);
    }




    return(
        <>
            <div class="wrapper">
                <h1 class="text-center">TODO LIST APP</h1>
                <div class="form-add-task">
                    <label>Task name:</label>
                    <input type="text" placeholder="Input name of task" ref = {taskname} />
                    <button onClick={addtask}>Add</button>
                </div>
                <div class="list-tasks">
                    <h3 class="mb-5">List of tasks:</h3>
                    {
                        task.map(function(task,idx){
                            return(
                                
                                    <div class="task" key ={idx}>
                                    <p>{task}</p>
                                    <button onClick={() => deltask(task)}>X</button>
                                    </div>
                               
                            )
                        })
                    }
                    
                    
                </div>
            </div>
        </>
    )
}
export default List