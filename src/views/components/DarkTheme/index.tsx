import { DarkMode } from "@mui/icons-material";
import styles from './index.module.scss';

export function DarkTheme() {
    return (
            <DarkMode className={ styles.buttonDark }/>
    )
}