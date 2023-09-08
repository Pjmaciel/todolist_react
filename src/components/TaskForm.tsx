import { ChangeEvent, useState } from "react";
//css
import styles from './TaskForm.module.css';

//Interface

type Props = {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {

    const [id,setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHandler = () => {}
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        if(e.target.name === "title"){
            setTitle(e.target.value)
        }else{
            setDifficulty(parseInt(e.target.value))
        }
        console.log(title)
        console.log(difficulty)
    }




    return <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Titulo:</label>
            <input type="text" name="title" placeholder="Titulo da tarefa" onChange={handleChange} />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade</label>
            <input type="text" name="difficulty" placeholder="Dificuldade" onChange={handleChange} />
        </div>
        <input type="submit" value={btnText} />
    </form>
}

export default TaskForm