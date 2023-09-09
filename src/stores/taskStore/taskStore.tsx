import { Task } from "../../types";
import { makeAutoObservable } from "mobx";
import { defaultTasks } from "./constants";

class TaskStore {
    tasks: Task[] = defaultTasks

    constructor() {
        makeAutoObservable(this)
    }

    addTask = (title: string, description: string) => {
        this.tasks.unshift({
            id: this.tasks.length + 2,
            title: title,
            description: description,
            completed: false
        });
    }

    toggleComplete = (id: number) => {
        this.tasks.map((item) => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        });
    }
}

export default new TaskStore()