import { useState } from "react";
import taskStore from "../../stores/taskStore/taskStore";
import { Task } from "../../types";

import './TaskForm.css'

interface TaskFormProps {
    task?: Task
    onSave: () => void | undefined
}

export const TaskForm = (props: TaskFormProps) => {
    const { task, onSave } = props;

    const { addTask, editTask, deleteTask } = taskStore;

    const [title, setTitle] = useState<string>(task ? task.title : "");
    const [description, setDescription] = useState<string>(task ? task.description : "");

    function submitHandler(e: React.FormEvent) {
        e.preventDefault();
        if (task) {
            editTask(task.id, title, description)
        } else {
            addTask(title, description)
            setDescription('')
            setTitle('')
        }
    }

    function deleteHandler () {
        if (task) {
            deleteTask(task.id)
        }
    }

    return (
            <form onSubmit={submitHandler}>
                {!task && <h2>Новая задача</h2>}
                <fieldset className="container">
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type='text'
                        placeholder='Заголовок'
                        required
                        minLength={1}
                        maxLength={20}
                        className="input"
                    />
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder='Добавьте описание ... (необязательно)'
                        rows={3}
                        maxLength={250}
                        className="textarea"
                    />
                </fieldset>
                <div>
                {task ?
                    <div className="group_button">
                    <button
                        type='submit'
                        className="button_in_group"
                    >Изменить</button>
                    <button
                        type='button'
                        className="button_in_group"
                        onClick={() => onSave()}
                    >Отменить</button>
                    <button
                        type='button'
                        className="delete_button"
                        onClick={deleteHandler}
                    >Удалить</button>
                    </div>
                : <button
                    type='submit'
                    className="button"
                >Добавить</button>
    }
                </div>
            </form>
    )
}