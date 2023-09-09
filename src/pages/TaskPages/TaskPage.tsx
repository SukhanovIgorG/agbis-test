import { TaskList, TaskForm, Wrapper } from "../../components"

import './TaskPage.css'

export const TaskPage = () => {
    return (
        <div className="task_page">
            <h1>Список задач</h1>
            <Wrapper>
                <TaskForm onSave={()=>{}}/>
            </Wrapper>
            <Wrapper>
                <TaskList />
            </Wrapper>
        </div>
    )
}