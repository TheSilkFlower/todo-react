import create from "zustand";
import { generateId, getTime } from "../helpers";
import { persist } from "zustand/middleware";

interface Task {
    id: string;
    title: string;
    createdAt: number;
    time: string;
}

interface ToDoStore {
    tasks: Task[];
    createTask: (title: string) => void;
    updateTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;
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
    }
}),
{
    name: 'tasks',
    getStorage: () => sessionStorage
  },))