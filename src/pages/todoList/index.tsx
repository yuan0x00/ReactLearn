import {useCallback, useEffect, useRef, useState} from 'react'
import TodoTaskInput from './components/TodoTaskInput.tsx'
import TodoTaskAddButton from './components/TodoTaskAddButton.tsx'
import TodoTaskList from './components/TodoTaskList.tsx'
import {debounce} from '../../utils/debounce.ts'
import {useTheme} from '../../utils/UseTheme.tsx'

function TodoList() {
    const [taskList, setTaskList] = useState<string[]>([])
    const [requestCount, setRequestCount] = useState<number>(0)
    const taskRef = useRef<string>('')
    const taskListRef = useRef<HTMLDivElement>(null)
    const {theme, toggleTheme} = useTheme()

    const handleChange = useCallback(
        debounce(e => {
            const task = e.target.value
            if (task || task.trim() != '') {
                taskRef.current = task
                setRequestCount(prevCount => prevCount + 1)
                console.log(`内容更改，发送请求`)
            }
        }, 300),
        [],
    )

    const handleAdd = () => {
        if (taskRef.current?.trim()) {
            setTaskList([...taskList, taskRef.current])
        }
    }

    const handleTheme = () => {
        toggleTheme()
    }

    useEffect(() => {
        console.log(`总共发起了 ${requestCount} 次请求`)
    }, [requestCount])

    useEffect(() => {
        if (taskListRef.current) {
            const nodeCount = taskListRef.current.childElementCount
            console.log(`当前有 ${nodeCount} 个dom节点`)
        }
    }, [taskList])

    return (
        <div className={'full-screen'}>
            <button
                style={{
                    color: theme == 'light' ? 'yellow' : 'red',
                }}
                onClick={handleTheme}>
                {theme}
            </button>

            <TodoTaskInput handleChange={handleChange} />

            <TodoTaskAddButton handleClick={handleAdd}>添加</TodoTaskAddButton>

            <TodoTaskList ref={taskListRef} taskList={taskList} />
        </div>
    )
}

export default TodoList
