// This component creates a form for adding new todos by checking the 
// description & assigned and add the onChange of both setAssigned & setDescription
// to addTodo function
import React,{useState} from 'react';

function NewTodoForm(props){

    const[description,setDescription] = useState ('');
    const[assigned,setAssigned] = useState ('');

    const submitTodo = () => {
        if(description !== '' && assigned!== ''){
            props.addTodo(description,assigned);
            setDescription('');
            setAssigned('');
        }
    }

return(
    <div className='mt-5'>
        <form>
            <div className='mb-3'>
                <label className='form-label'>Assigned</label>
                <input 
                type='text' 
                className='form-control' 
                required
                onChange={e => setAssigned(e.target.value)} //onchange listener 
                value={assigned}
                ></input>
            </div>
            <div className='mt-3'>
                <label 
                className='form-label'>Description</label>
                <textarea 
                className='form-control' 
                rows={3} 
                required 
                onChange={e => setDescription(e.target.value)} 
                value={description}
                ></textarea>
            </div>
            <button 
            type='button' 
            className='btn btn-primary mt-3'
            onClick={submitTodo}
            >Add todo</button>
        </form>
    </div>
)
}
export default NewTodoForm