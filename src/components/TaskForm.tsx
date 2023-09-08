
type Props = {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
    return <form>
        <div>
            <label htmlFor="title">Titulo:</label>
            <input type="text" name="title" placeholder="Titulo da tarefa" />
        </div>
        <div>
            <label htmlFor="difficulty">Dificuldade</label>
            <input type="text" name="difficulty" placeholder="Dificuldade" />
        </div>
        <input type="submit" value={btnText} />
    </form>
}

export default TaskForm