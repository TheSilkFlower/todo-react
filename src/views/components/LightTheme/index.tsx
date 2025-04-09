import { LightMode } from "@mui/icons-material";
import styles from './index.module.scss';

export function LightTheme() {
    return (
        <button>
           <LightMode className={ styles.buttonLight }/> 
        </button>
    )
}