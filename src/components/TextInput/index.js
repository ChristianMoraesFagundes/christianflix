import React from 'react';


function TextInput({ label, type, name, value, onChange }) {

    return (
        <div>
            <label>
                {label}:
                <textarea
                    type={type}
                    onChange={onChange}
                    value={value}
                    name={name}

                />
            </label>

        </div>

    )
}

export default TextInput;