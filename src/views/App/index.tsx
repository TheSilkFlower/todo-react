import React, { useEffect } from "react";
import styles from './index.module.scss';
import { useThemeStore, useToDoStore } from "../../data/stores/useToDoStore";
import { InputPlus } from "../components/InputPlus";
import { InputTask } from "../components/InputTask";
import { SwitchTheme } from "../components/SwitchTheme";
import ParticleBg from "../components/Particles/particles";
import AppBlock from "../components/ApplicationBlock";

export const App: React.FC = () => {
    const [ tasks, createTask, updateTask, removeTask ] = useToDoStore(state => [ state.tasks, state.createTask, state.updateTask, state.removeTask ])
    const [ theme ] = useThemeStore(state => [ state.theme ])

    function updateBodyClass(th: boolean) {
        if(th) {
            document.body.style.backgroundImage = 'linear-gradient(0deg, #06152b, #2b5189, #5379b1, #8099be)'
        } else {
            document.body.style.backgroundImage = 'linear-gradient(0deg, #6182b3, #7ea3da, #bbcfec, #ffffff)'

        }
    }

    useEffect(() => {
        updateBodyClass(theme)
    }, [theme])

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
            <SwitchTheme />
        </div>
        
    </>
}