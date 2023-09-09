import { Task } from '../../types';

import './TaskItem.css'
import taskStore from '../../stores/taskStore/taskStore';

export const TaskItem = (props: Task) => {
    const { id, title, description, completed } = props;
    const { toggleComplete } = taskStore

    function handleChange (){
        toggleComplete( id );
    }
    return (
        <div className='container'>
            <h3 className={`${completed ? 'title_through ' : ""}title`}>{title}</h3>
            <span className='description'>{description}</span>
            <input
            className='completed'
                type="checkbox"
                name="completed"
                id="completed"
                onChange={handleChange}
                checked={completed} />
        </div>
    )
}