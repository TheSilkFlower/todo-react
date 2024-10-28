import styles from './index.module.scss'

interface Date {
    time: string
}

export const DateTodo: React.FC<Date> = ({ time }) => {
    return (
        <div className={ styles.date }>
            {time}
        </div>
    )
}