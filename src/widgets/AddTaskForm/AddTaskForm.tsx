import { useState } from "react";
import taskStore from "../../stores/taskStore/taskStore";

import './AddTaskForm.css'

export const AddTaskForm = () => {
    const { addTask } = taskStore;

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    function submitHandler(e: React.FormEvent) {
        e.preventDefault();
        addTask(title, description)
        console.log('title :>> ', title);
        setDescription('')
        setTitle('')
    }

    return (
        <form onSubmit={submitHandler}>
            <h2>Новая задача</h2>
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
                    contentEditable="true"
                />
            </fieldset>
            <button
                type='submit'
                className="button"
            >+</button>
        </form>
    )
}