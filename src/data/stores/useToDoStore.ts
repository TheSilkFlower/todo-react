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

type Theme = boolean;

interface ThemeStore {
    changeTheme: () => void;
    theme: Theme;
}

export const useThemeStore = create<ThemeStore>(persist((set, get) => ({
    theme: false,
    changeTheme: () => {
        const { theme } = get();
        set({
            theme: !theme
        })
    }
}), {
        name: "theme",
        getStorage: () =>  sessionStorage
    } 
))

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