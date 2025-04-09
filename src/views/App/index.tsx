import React from "react";
import styles from './index.module.scss';
import { useToDoStore } from "../../data/stores/useToDoStore";
import { InputPlus } from "../components/InputPlus";
import { InputTask } from "../components/InputTask";
import ParticleBg from "../components/Particles/particles";
import AppBlock from "../components/ApplicationBlock";
import { SwitchThemes } from "../components/SwitchThemes";

export const App: React.FC = () => {
    const [
        tasks,
        createTask,
        updateTask,
        removeTask
    ] = useToDoStore(state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask
    ]
    )
    
    return <>
        <ParticleBg />
        <article className={ styles.article }>
            <h1 className={ styles.articleTitle }>Для записей</h1>
            <section className={ styles.articleSection }>
                <InputPlus 
                    onAdd = {(title) => {
                        if(title) {
                            createTask(title)
                        }
                    }}
                />
            </section>
            <section className={ styles.articleSection }>
                {(!tasks.length && (
                    <p className={ styles.articleText }>Нет ни одной заметки</p>
                ))}
                {tasks.map(task => (
                    <InputTask
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        time={task.time}
                        onEdited={updateTask}
                        onRemoved={removeTask}
                    />
                ))}
            </section>
        </article>
        <div className={ styles.blockWrapper }>
            <AppBlock />
            <SwitchThemes />
        </div>
        
    </>
}