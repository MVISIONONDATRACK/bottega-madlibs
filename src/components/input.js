import React from 'react';

const Input = ({title, state, name}, onChange, index) => {
    return (
        <div key={name} className="input">
            <label>{index}</label>
            <input name={name} value={state} onChange={onChange}/>
            <label>{title}</label>
        </div>
    )
}

export default Input; 