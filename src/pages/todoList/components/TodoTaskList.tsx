function TodoTaskList(props) {
    const {
        taskList
    } = props

    return taskList.map((task, index) => (
        <div key={index}>{task}</div>
    ))
}

export default TodoTaskList