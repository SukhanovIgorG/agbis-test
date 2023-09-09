import { observer } from "mobx-react-lite"

import taskStore from "../../stores/taskStore/taskStore"
import { TaskItem } from "../TaskItem"

import "./TaskList.css"

export const TaskList = observer(() => {
    const { tasks } = taskStore
    const arr = Array.from(tasks)

    console.log('arr :>> ', arr);

    return (
        <div className="wrapper">
            {tasks.map((task) => (<TaskItem {...task} key={task.id + Math.random()} />))}
        </div>
    )
});