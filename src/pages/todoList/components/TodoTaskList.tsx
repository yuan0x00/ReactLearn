import { forwardRef } from "react"

function TodoTaskList({ taskList, listRef }) {
    return (
        <ul ref={listRef}>
            {taskList.map((task, index) => (
                <div key={index}>{task}</div>
            ))}
        </ul>
    )
}

export default forwardRef(({ taskList }, listRef) => <TodoTaskList taskList={taskList} listRef={listRef} />);
    
