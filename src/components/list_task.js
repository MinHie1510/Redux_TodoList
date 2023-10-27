import { useDispatch, useSelector } from "react-redux"
import {del} from '../reducers/task_slice';

function Listtask() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task.list);

    const deltask = (name) => {
        dispatch(del(name));
    }
    

    return (
        <>
            <div class="list-tasks">
                    <h3 class="mb-5">List of tasks:</h3>
                    {
                        tasks.map(function(task,idx){
                            return(
                                
                                <div class='task' key ={idx}>
                                    <p>{task}</p>
                                    <button onClick={() => deltask(task)}>X</button>
                                </div>
                            )
                        })
                    }
            </div>
        </>
    )
}

export default Listtask