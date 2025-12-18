function TodoTaskAddButton({
    handleClick,
    children
}) {
    return <button onClick={handleClick}>
        {children}
    </button>
}

export default TodoTaskAddButton