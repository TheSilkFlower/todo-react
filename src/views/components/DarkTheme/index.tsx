import { DarkMode } from "@mui/icons-material";
import styles from './index.module.scss';

export function DarkTheme() {
    return (
        <button>
            <DarkMode className={ styles.buttonDark }/>
        </button>
    )
}