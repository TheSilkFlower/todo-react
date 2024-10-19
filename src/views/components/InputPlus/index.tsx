import React, { useCallback, useState } from "react";
import styles from './index.module.scss';
import { styled, Button, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { LightTooltip } from "../LightTooltip";

interface InputPlusProps {
    onAdd: (title: string) => void;
}

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#dbefe9',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#708090',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#708090',
      },
      '&:hover fieldset': {
        borderColor: '#dbefe9',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#dbefe9',
      },
    },
  });

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
            <CssTextField 
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
            </CssTextField>
            <LightTooltip title="Добавить" placement="right">
                <Button variant={'contained'} className={ styles.inputPlusButton } sx={{background: "transparent", boxShadow: "0 0 2px black"}} size={'medium'} onClick={addTask}>
                <Add/>
            </Button>
            </LightTooltip>
        </div>
    )
}