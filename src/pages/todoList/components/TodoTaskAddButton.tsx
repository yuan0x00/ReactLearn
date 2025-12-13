function TodoTaskAddButton(props) {
    const {
        children,
        onClick
    } = props

    return <button onClick={onClick}>
        {children}
    </button>
}

export default TodoTaskAddButton