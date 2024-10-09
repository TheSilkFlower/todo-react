import React, { useCallback, useState } from "react";
import styles from './index.module.scss';
import { Button, TextField, Tooltip } from "@mui/material";
import { Add } from "@mui/icons-material";

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
            <Tooltip title="Добавить" placement="right">
                <Button variant={'contained'} sx={{background: '#7CA7D8'}} size={'medium'} onClick={addTask}>
                <Add/>
            </Button>
            </Tooltip>
        </div>
    )
}