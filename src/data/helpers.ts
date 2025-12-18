type GenerateId = () => string;
export const generateId: GenerateId = () => (
    Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);

type GetTime = () => string;
export const getTime: GetTime = () => {
    const day: number = new Date().getDate()
    const month: number = new Date().getMonth() + 1
    const year: number = new Date().getFullYear()
    const hour: number = new Date().getHours()
    const minutes: number = new Date().getMinutes()

    return `${day}/${month}/${year.toString().slice(2)} ${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}`
}
