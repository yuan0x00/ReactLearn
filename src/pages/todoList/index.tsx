import {useState} from 'react'
import TodoTaskInput from './components/TodoTaskInput'
import TodoTaskAddButton from './components/TodoTaskAddButton'
import TodoTaskList from './components/TodoTaskList'

function TodoList() {
    const [taskList, setTaskList] = useState<string[]>([]);
    const [task, setTask] = useState('');

    function addTaskToList(taskText: string) {
        if (!taskText.trim()) return;
        setTaskList(prev => [...prev, taskText]);
    }

    return <>
        <TodoTaskInput value={task}
                       onChange={e => setTask(e.target.value)}/>

        <TodoTaskAddButton onClick={() => addTaskToList(task)}>
            添加
        </TodoTaskAddButton>

        <TodoTaskList taskList={taskList}/>
    </>
}

export default TodoList;