import {useState} from 'react'
import './App.css'

function App() {
    const [taskList, setTaskList] = useState<string[]>([]);
    const [task, setTask] = useState('');

    function addTaskToList(taskText: string) {
        if (!taskText.trim()) return;
        setTaskList(prev => [...prev, taskText]);
    }

    return (
        <>
            <div>
                <input value={task}
                       onChange={e => setTask(e.target.value)}/>
                <button onClick={() => addTaskToList(task)}>
                    添加
                </button>
                {taskList.map((task) => (
                    <div key={task}>{task}</div>
                ))}
            </div>
        </>
    )
}

export default App
