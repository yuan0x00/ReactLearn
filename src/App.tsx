import './App.css'
import TodoList from './pages/todoList'
import {ThemeProvider} from './utils/ThemeContext.tsx'

function App() {
    return (
        <ThemeProvider>
            <TodoList />
        </ThemeProvider>
    )
}

export default App
