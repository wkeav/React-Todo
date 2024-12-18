import React from 'react';

function TodoDate(){
    const today = new Date();
    const values = {
        weekday:'long', // Output: Thursday 
        year: 'numeric', // Output: 2024
        month:'long', // Output: March
        day:'numeric' // Output: 03, 14 
    }

    const date = today.toLocaleDateString('en-US',values)

    return(
        <div className='text-center fs-5 text-dark mb-3 fw-bold'>
            {date}
        </div>
    ); 
}
export default TodoDate;