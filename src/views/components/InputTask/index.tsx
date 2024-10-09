import React, { useState, useEffect, useRef } from "react";
import styles from './index.module.scss';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { Done, Delete } from "@mui/icons-material";

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
    onDone,
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

    return (
        <div className={ styles.inputTask }>
            <div className={ styles.inputTaskWrapper }>
               <label className={ styles.inputTaskLabel }>
                {
                    isEditMode ? (
                        <input
                type="checkbox"
                checked={checked}
                disabled={isEditMode}
                className= {styles.inputTaskChecked}
                onChange={(e) => {
                    setChecked(e.target.checked)
                    if(e.target.checked) {
                        setTimeout(() => {
                            onDone(id)
                        }, 300)
                        }
                    }}
                />
                    ) : ( <input
                        type="checkbox"
                        disabled={isEditMode}
                        className= {styles.inputTaskChecked}
                        onChange={(e) => {
                            setChecked(e.target.checked)
                        }
                    }
                    />)
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
                <IconButton 
                sx={{color: '#7CA7D8'}} 
                onClick={() => {
                    onEdited(id, value)
                    setIsEditMode(false)
                }}>
                    <Done/>
                </IconButton>
                ) : (
                <button
                    aria-label="Edit"
                    disabled={ checked ? true : false }
                    className={ checked ? styles.inputTaskEditDisabled : styles.inputTaskEdit}
                    onClick={() => {
                        onEdited(id, title)
                        setIsEditMode(true)
                    }}
                />
                 )
            }
                                <IconButton sx={{color: "#7CA7D8"}} onClick={handleOpen}> 
                                    <Delete></Delete>
                                </IconButton>
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
            <div className={ styles.inputTaskInner }></div>
        </div>
    )
}
