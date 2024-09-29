import React, { useState, useEffect, useRef } from "react";
import styles from './index.module.scss';
import { IconButton } from "@mui/material";
import { Done } from "@mui/icons-material";

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
    const editTitleInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(isEditMode) {
            editTitleInputRef?.current?.focus()
        }
    }, [isEditMode])

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
                sx={{color: '#5985E1'}} 
                onClick={() => {
                    onEdited(id, value)
                    setIsEditMode(false)
                }}>
                    <Done/>
                </IconButton>
                // <button
                //     aria-label="Save"
                //     className={ styles.inputTaskSave }
                //     onClick={() => {
                //         onEdited(id, value)
                //         setIsEditMode(false)
                //     }}
                // /> 
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
                <button
                    aria-label="Remove"
                    className={ styles.inputTaskRemove }
                    onClick={() => {
                        if(confirm('Are you sure?')) {
                            onRemoved(id)
                        }
                    }}
                /> 
            </div>
            <div className={ styles.inputTaskInner }></div>
        </div>
    )
}
