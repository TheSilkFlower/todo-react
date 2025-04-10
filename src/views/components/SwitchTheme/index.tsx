import { LightMode } from "@mui/icons-material";
import { DarkMode } from "@mui/icons-material";
import { useThemeStore } from "../../../data/stores/useToDoStore";
import styles from './index.module.scss';

export function SwitchTheme() {
    const [ theme, changeTheme ] = useThemeStore(state => [ state.theme, state.changeTheme ]);
    return (
        <button className={ styles.wrapBtn } onClick={ changeTheme }>
            { theme ? <LightMode className={ styles.buttonLight }/> : <DarkMode className={ styles.buttonDark }/> }
        </button>
    )
}