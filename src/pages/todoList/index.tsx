import {useEffect, useRef, useState} from 'react'
import TodoTaskInput from './components/TodoTaskInput'
import TodoTaskAddButton from './components/TodoTaskAddButton'
import TodoTaskList from './components/TodoTaskList'

function TodoList() {
    const [taskList, setTaskList] = useState<string[]>([]);
    const [task, setTask] = useState('');
    const requestList = useRef<string[]>([]);
    const taskListRef = useRef(null);
    const lastClickTime = useRef(Date.now())
    const currentTimeoutId = useRef(null)
    const timeDelay = 2000;

    useEffect(() => {
        if (task || task.trim() != '') {
            //防抖：目标是点击后延迟一段时间触发，若在延迟时间内触发，则重置延迟时间。
            const startTime = Date.now()
            if (startTime - lastClickTime.current <= timeDelay) {
                if (currentTimeoutId.current) {
                    clearTimeout(currentTimeoutId.current)
                }
            }
            currentTimeoutId.current = setTimeout(() => {
                requestList.current.push(task)
                console.log("InputCurrent->" + task + "\n" + "InputSum->" + requestList.current.length)
            }, timeDelay)

            lastClickTime.current = startTime
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