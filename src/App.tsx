import { useState } from "react";
//Components
import Footer from "./components/Footer";
import Header from "./components/Header";

//Components forms
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

//css
import styles from "./App.module.css";


//inteface
import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);//Começa com um array vazio

  return <div>
    <Header />
    <main className={styles.main}>
      <div>
        <h2>O que voce vai fazer?</h2>
        <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
      </div>
      <div>
        <h2>Suas Tarefas:</h2>
        <TaskList />
      </div>
    </main>
    <Footer />
  </div>
}

export default App;
