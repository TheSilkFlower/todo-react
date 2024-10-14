function getTime() {
    let day: number = new Date().getDate()
    let month: number = new Date().getMonth() + 1
    let year: number = new Date().getFullYear()
    let hour: number = new Date().getHours()
    let minutes: number = new Date().getMinutes()

    return `${day}/${month}/${year} ${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}`
}

export function DateTodo() {
    return (
        <div>
            {getTime()}
        </div>
    )
}