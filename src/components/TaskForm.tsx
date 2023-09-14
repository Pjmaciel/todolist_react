import { ChangeEvent, FormEvent, useState } from "react";
//css
import styles from './TaskForm.module.css';

//Interface
import { ITask } from "../interfaces/Task";

type Props = {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList,setTaskList}: Props) => {

    const [id,setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const id = Math.floor(Math.random() * 1000) //numero arrendoda para baixo ate 1000
        
        const newTask: ITask = {id, title, difficulty}

        setTaskList!([...taskList, newTask])

        //zerar os campos
        setTitle("")
        setDifficulty(0)
        
        console.log(taskList)
    }
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        if(e.target.name === "title"){
            setTitle(e.target.value)
        }else{
            setDifficulty(parseInt(e.target.value))
        }
    }




    return <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input type="text" name="title" placeholder="Titulo da tarefa" onChange={handleChange} value={title} />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade</label>
            <input type="text" name="difficulty" placeholder="Dificuldade" onChange={handleChange} value={difficulty}/>
        </div>
        <input type="submit" value={btnText} />
    </form>
}

export default TaskForm