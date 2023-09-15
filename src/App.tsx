import { useState } from "react";
//Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


//css
import styles from "./App.module.css";


//inteface
import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);//Começa com um array vazio
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const iconDeleteTask = (id: number) => {
      setTaskList(
        taskList.filter(task =>{
          return task.id !== id
        })
      );
  };
  
  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if(display){
        modal!.classList.remove("hide");
    }else{
        modal!.classList.add("hide");
    }
}

  const iconEditTask = (task: ITask):void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
};

const updateTask = (id: number, title: string, difficulty: number) =>{

  const updatedTask: ITask = {id, title, difficulty}

  const updatedItens = taskList.map((task) => {
    return task.id === updatedTask.id ? updatedTask : task
  })

  setTaskList(updatedItens)
  hideOrShowModal(false)

}

  return <div>
    <Modal children={<TaskForm btnText="Editar Tarefa"taskList={taskList} task={taskToUpdate} handleUpdate={updateTask}/>}/>
    <Header />
    <main className={styles.main}>
      <div>
        <h2>O que voce vai fazer?</h2>
        <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div>
        <h2>Suas Tarefas:</h2>
        <TaskList taskList={taskList} handleDelete={iconDeleteTask} handleEdit={iconEditTask}/>
      </div>
    </main>
    <Footer />
  </div>
}

export default App;
