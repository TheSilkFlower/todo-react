import React, { useCallback, useState } from "react";
import styles from './index.module.scss';
import { Button, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { LightTooltip } from "../LightTooltip";

interface InputPlusProps {
    onAdd: (title: string) => void;
}

export const InputPlus: React.FC<InputPlusProps> = ({
    onAdd,
}) => {
    const [inputValue, setInputValue] = useState('')
    const addTask = useCallback(() => {
        onAdd(inputValue);
        setInputValue('');
    }, [inputValue])
    return (
        <div className={ styles.inputPlus }>
            <TextField 
            id="outlined-basic" 
            label="Введите текст" 
            variant="outlined" 
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value)
            }}
            onKeyDown={(e) => {
                if(e.key === 'Enter') {
                    addTask()
                }
            }} >
            </TextField>
            <LightTooltip title="Добавить" placement="right">
                <Button variant={'contained'} className={ styles.inputPlusButton } sx={{background: "transparent", boxShadow: "0 0 2px black"}} size={'medium'} onClick={addTask}>
                <Add/>
            </Button>
            </LightTooltip>
        </div>
    )
}