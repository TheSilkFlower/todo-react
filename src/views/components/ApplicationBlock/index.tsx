import styles from "./index.module.scss";
import { Link } from "@mui/material";

export default function AppBlock() {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.titleBlock}>Создано при помощи:</div>
            <Link href="https://mui.com/material-ui" target="_blank" underline="none" className={styles.blockLink} sx={{color: "#292d34"}}>@materialUi</Link>
            <Link href="https://particles.js.org/" target="_blank" underline="none" className={styles.blockLink} sx={{color: "#292d34"}}>@tsParticles</Link>
            <Link href="https://www.typescriptlang.org/" target="_blank" underline="none" className={styles.blockLink} sx={{color: "#292d34"}}>Typescript</Link>
            <Link href="https://react.dev/" target="_blank" underline="none" className={styles.blockLink} sx={{color: "#292d34"}}>React</Link>
            <Link href="https://vite.dev/" target="_blank" underline="none" className={styles.blockLink} sx={{color: "#292d34"}}>Vite</Link>

        </div>
        
    )
}