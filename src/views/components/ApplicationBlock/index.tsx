import styles from "./index.module.scss";
import { Tool } from "../Tool";

export default function AppBlock() {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.titleBlock}>Создано при помощи:</div>
            <Tool href="https://mui.com/material-ui" tool="@materialUi"/>
            <Tool href="https://particles.js.org/" tool="@tsParticles"/>
            <Tool href="https://www.typescriptlang.org/" tool="Typescript"/>
            <Tool href="https://react.dev/" tool="React"/>
            <Tool href="https://vite.dev/" tool="Vite"/>
        </div>
        
    )
}