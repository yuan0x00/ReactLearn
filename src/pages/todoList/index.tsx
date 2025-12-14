import {useEffect, useRef, useState} from 'react'
import TodoTaskInput from './components/TodoTaskInput'
import TodoTaskAddButton from './components/TodoTaskAddButton'
import TodoTaskList from './components/TodoTaskList'

function TodoList() {
    const [taskList, setTaskList] = useState<string[]>([]);
    const [task, setTask] = useState('');
    const [requestList, setRequestList] = useState<string[]>([]);
    const taskListRef = useRef(null);

    useEffect(() => {
        if (task || !task.trim()) {
            setRequestList(prev => [...prev, task])
            console.log("InputCurrent->" + task + "\n" + "InputSum->" + requestList.length)
        }
    }, [task]);

    useEffect(() => {
        if (taskListRef.current) {
            const nodeCount = taskListRef.current.childElementCount;
            console.log(`当前有 ${nodeCount} 个dom节点`);
        }
    }, [taskList]);

    return <>
        <TodoTaskInput
            value={task}
            onChange={e => {
                setTask(e.target.value)
            }}/>

        <TodoTaskAddButton
            onClick={() => {
                if (task.trim()) {
                    setTaskList(prev => [...prev, task]);
                }
            }}>
            添加
        </TodoTaskAddButton>

        <div ref={taskListRef}>
            <TodoTaskList taskList={taskList}/>
        </div>
    </>
}

export default TodoList;