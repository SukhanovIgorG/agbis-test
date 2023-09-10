import { observer } from "mobx-react-lite"

import { useState } from "react";
import taskStore from "../../stores/taskStore/taskStore"
import { TaskItem } from "../";

import "./TaskList.css"

export const TaskList = observer(() => {
    const { tasks } = taskStore
    const [filter, setFilter] = useState(false)
    const tasksCopy = [...tasks]
    const taskToShow =  filter ? [...tasksCopy.filter((el) => !el.completed)] : tasks

    console.log('tasks :>> ', tasks);

    return (
        <>
            <button className="button"
            onClick={()=> setFilter(prev => !prev)}>
                Показать { !filter ? 'только невыполненные'  : 'все'}
            </button>
            {taskToShow.length ?
                taskToShow.map((task) => (<TaskItem {...task} key={task.id + Math.random()} />))
            :
            <p>Вы молодец! В списке нет задач 💪</p>}
        </>
    )
});