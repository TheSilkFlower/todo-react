import create from "zustand";
import { generateId } from "../helpers";
import { persist } from "zustand/middleware";

interface Task {
    id: string;
    title: string;
    createdAt: number;
    time: any;
}

interface ToDoStore {
    tasks: Task[];
    createTask: (title: string) => void;
    updateTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;
    doneTask: (id: string) => void;
}

export function getTime() {
    let day: number = new Date().getDate()
    let month: number = new Date().getMonth() + 1
    let year: number = new Date().getFullYear()
    let hour: number = new Date().getHours()
    let minutes: number = new Date().getMinutes()

    return `${day}/${month}/${year.toString().slice(2)} ${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}`
}


export const useToDoStore = create<ToDoStore>(persist((set, get) => ({
    tasks: [],
    createTask: (title) => {
        const { tasks } = get();
        const newTask = {
            id: generateId(),
            title,
            createdAt: Date.now(),
            time: getTime()
        }

        set({
            tasks: [newTask].concat(tasks)
        })
    },
    updateTask: (id: string, title: string) => {
        const { tasks } = get();
        set({
            tasks: tasks.map(task => ({
                ...task,
                title: task.id === id ? title : task.title
            }))
        })
    },
    removeTask: (id: string) => {
        const { tasks } = get();
        set({
            tasks: tasks.filter(task => task.id !== id)
        })
    },
    doneTask: (id: string) => {
        const { tasks } = get();
        set({
            tasks: tasks.filter(task => task.id !== id)
        })
    }
}),
{
    name: 'tasks',
    getStorage: () => sessionStorage
  },))