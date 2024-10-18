import React, { useState, useEffect, useRef } from "react";
import styles from './index.module.scss';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Checkbox } from "@mui/material";
import { Done, Delete, Mode } from "@mui/icons-material";
import { LightTooltip } from "../LightTooltip";
import { DateTodo } from "../DateTodo";
import { blueGrey } from "@mui/material/colors";

interface InputTaskProps {
    id: string;
    title: string;
    onDone: (id: string) => void;
    onEdited: (id: string, title: string) => void;
    onRemoved: (id: string) => void;
}

export const InputTask: React.FC<InputTaskProps> = ({
    id,
    title,
    // onDone,
    onEdited,
    onRemoved
}) => {

    const [checked, setChecked] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const [value, setValue] = useState(title)
    const [open, setOpen] = useState(false)
    const editTitleInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(isEditMode) {
            editTitleInputRef?.current?.focus()
        }
    }, [isEditMode])

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
      };

    return (
        <div className={ styles.inputTask }>
            <div className={ styles.inputTaskWrapper }>
               <label className={ styles.inputTaskLabel }>
                {
                    isEditMode ? (
                            <Checkbox disabled={isEditMode} 
                            onChange={handleChange}></Checkbox>
                    ) : (  
                        <Checkbox disabled={isEditMode}
                        onChange={handleChange}
                        sx={{
                            color: blueGrey[100],
                            '&.Mui-checked': {
                              color: blueGrey[50],
                            }}}/>
                    )
                }
            {
                isEditMode ? (
                <input 
                value={value}
                ref={editTitleInputRef}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onEdited(id, value)
                        setIsEditMode(false)
                    }
                }}
                className={ styles.inputTaskTitle }
                /> ) : ( 
                <h3 className={ checked ? styles.inputTaskTitleUnchecked : styles.inputTaskTitle }>{ title }</h3>
            )}
            </label>
            { isEditMode ? (
                <LightTooltip title="Сохранить" placement="bottom">
                    <IconButton className={ styles.inputTaskSave }
                sx={{color: '#c7d4dd'}} 
                onClick={() => {
                    onEdited(id, value)
                    setIsEditMode(false)
                }}>
                    <Done/>
                </IconButton>
                </LightTooltip>
                ) : (
                    <LightTooltip title="Редактировать" placement="bottom">
                        <IconButton className={ styles.inputTaskEdit }
                    sx={{color: '#c7d4dd'}} 
                    onClick={() => {
                    onEdited(id, title)
                    setIsEditMode(true)
                }}>
                        <Mode />
                    </IconButton>
                    </LightTooltip>
                    
                 )
            }
                <LightTooltip title="Удалить" placement="bottom">
                    <IconButton className={ styles.inputTaskRemove } sx={{color: "#c7d4dd"}} onClick={handleOpen}> 
                        <Delete></Delete>
                    </IconButton>
                </LightTooltip>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Данное действие удалит заметку</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Хотите удалить?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            handleClose()
                            onRemoved(id)
                        }}>Да</Button>
                        <Button onClick={handleClose}>Нет</Button>
                    </DialogActions>
                </Dialog>
            
            </div>
            <DateTodo />
        </div>
    )
}
