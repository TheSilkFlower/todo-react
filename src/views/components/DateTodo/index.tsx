import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { InputTask } from '../InputTask'
import { getTime } from '../../../data/stores/useToDoStore'

export function DateTodo() {
    const [time, setTime] = useState('')
    useEffect(() => {
        setTime(getTime())
    }, [InputTask])
    return (
        <div className={ styles.date }>
            {time}
        </div>
    )
}