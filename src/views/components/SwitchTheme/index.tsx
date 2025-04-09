import { LightMode } from "@mui/icons-material";
import { DarkMode } from "@mui/icons-material";
import { useToDoStore } from "../../../data/stores/useToDoStore";
import styles from './index.module.scss';

export function SwitchTheme() {
    const [ theme, changeTheme ] = useToDoStore(state => [ state.theme, state.changeTheme ]);
    return (
        <button onClick={ changeTheme }>
            { theme ? <LightMode className={ styles.buttonLight }/> : <DarkMode className={ styles.buttonDark }/> }
        </button>
    )
}