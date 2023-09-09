import taskStore from '../../stores/taskStore/taskStore';

import { TaskForm } from '../';
import { useState } from 'react';

import type { Task } from '../../types';

import './TaskItem.css'

export const TaskItem = (props: Task) => {
    const { id, title, description, completed } = props;
    const { toggleComplete } = taskStore
    const [edit, setEdit] = useState(false);

    function handleChange() {
        toggleComplete(id);
    }
    return (
        <>
            {
                edit ?
                    <TaskForm task={props} onSave={() => setEdit(false)} /> :
                    <div className='container' >
                        <h3
                            className={`${completed ? 'title_through ' : ""}title`}
                            onClick={() => setEdit(true)}
                            >
                                {title}
                            </h3>
                        <span
                            className='description'
                            onClick={() => setEdit(true)}
                        >{description}</span>
                        <input
                            className='completed'
                            type="checkbox"
                            name="completed"
                            id="completed"
                            onChange={handleChange}
                            checked={completed} />
                    </div>
            }
        </>
    )
}