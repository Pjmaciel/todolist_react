
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
                    <div>
                    <h4>{task.title}</h4>
                    <p>Dificuldade: {task.difficulty}</p>
                    </div>
                    <i className="bi bi-pencil"></i>
                    <i className="bi bi-trash"></i>
                    <div>

                    </div>
                </div>
            ))
        ) : (
            <p>Não existe tarefas cadastradas</p>
        )}
        </>
    )
}

export default TaskList