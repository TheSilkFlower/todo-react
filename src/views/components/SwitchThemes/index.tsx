import styles from './index.module.scss'
import { LightTheme } from "../LightTheme";
import { DarkTheme } from "../DarkTheme";

export function SwitchThemes() {
    return (
        <div className={ styles.switch }>
           <LightTheme />
           <DarkTheme /> 
        </div>
    )
}