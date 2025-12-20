import {useState} from 'react'

function TodoTaskInput({handleChange}) {
    const [value, setValue] = useState('')

    const handleInputChange = e => {
        setValue(e.target.value)
        handleChange(e)
    }

    return <input value={value} onChange={handleInputChange} />
}

export default TodoTaskInput
