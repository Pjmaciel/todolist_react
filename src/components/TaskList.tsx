
//interface
import { ITask } from "../interfaces/Task"

//CSS

type Props = {
    taskList : ITask[]
}

const TaskList = ({taskList}: Props) => {
    return (
        <>
        {taskList.length > 0 ? (
            taskList.map((task) => (
                <div key={task.id}>
                    <p>{task.title}</p>
                </div>
            ))
        ) : (
            <p>Não existe tarefas cadastradas</p>
        )}
        </>
    )
}

export default TaskList