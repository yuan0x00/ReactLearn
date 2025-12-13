function TodoTaskInput(props) {
    const {
        value,
        onChange,
    } = props

    return <input value={value} onChange={onChange}/>
}

export default TodoTaskInput