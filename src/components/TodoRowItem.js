// This component is a child component of TodoTable.js, it represents a 
// single row in the todo table using props 

import { useState } from "react"

function TodoRowItem(props){
//State to check if we're editing 
const[isEditing,setIsEditing] = useState(false);

const[editDescription,setEditDescription]= useState(props.rowDescription)
const[editAssigned,setEditAssigned]= useState(props.rowAssigned)

// Handle enter key to save 
const handleKeySave = (e,value) => {
    if(e.key === 'Enter'){
        props.editTodo(
            props.rowNumber,
            value === 'Description' ? editDescription : props.rowDescription,
            value === 'Assigned' ? editAssigned : props.rowAssigned
        );
        setIsEditing(false);
    }

};

//  Handle clicking outside (blur)
const handleBlur = (value) => {
    setIsEditing(false);
};

return (
    <tr>
        <td>
            <div className="form-check">
            <input 
                type="checkbox" 
                className="form-check-input rounded-circle" 
                checked={props.isComplete}
                onChange={() => props.isCompleteTodo(props.rowNumber)}
            />
        </div>
        </td>
        <th scope='row'>{props.rowNumber}</th>
        <td onClick={() => setIsEditing(true)}>
            {isEditing ? (
                <input
                    type="text"
                    className="form-control"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    onKeyDown={(e) => handleKeySave(e, 'Description')}
                    onBlur={handleBlur}
                />
            ) : (props.rowDescription)}
        </td>
        <td onClick={() => setIsEditing(true)}>
            {isEditing ? (
                <input
                    type="text"
                    className="form-control"
                    value={editAssigned}
                    onChange={(e) => setEditAssigned(e.target.value)}
                    onKeyDown={(e) => handleKeySave(e, 'Assigned')}
                    onBlur={handleBlur}
                />
            ): (props.rowAssigned)}</td>
    </tr>
    
)

}

export default TodoRowItem //allows to use this component within our application