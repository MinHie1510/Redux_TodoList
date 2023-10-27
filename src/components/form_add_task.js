import { useDispatch, useSelector } from "react-redux"
import {add} from '../reducers/task_slice';
import { useRef } from "react";

function Formaddtask(){
    const taskname = useRef()
    const dispatch = useDispatch();

    function addTask ()  {
        let newTask = taskname.current.value;
        if(newTask == ''){
            alert('Không được để trống');
        }
        else{
            dispatch(add(newTask));
            // alert(newTask);
        }
    }

    return(
        <>
            <div class="form-add-task">
                    <label>Task name:</label>
                    <input type="text" placeholder="Input name of task" ref = {taskname} />
                    <button onClick={addTask}>Add</button>
            </div>
        </>
    )
}

export default Formaddtask