import React, { useState } from "react";
import styles from './index.module.scss';

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

    return (
        <div className={ styles.inputTask }>
            <label className={ styles.inputTaskLabel }>
                <input
                type="checkbox"
                checked={checked}
                disabled={isEditMode}
                className={ styles.inputTaskChecked }
                onChange={(e) => {
                    setChecked(e.target.checked)
                    if(e.target.checked) {
                        onDone(id)
                        console.log('sdg');
                        }
                    }}
                />
            {
                isEditMode ? (
                <input 
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                className={styles.inputTaskTitleEdit}
                /> ) : ( 
                <h3 className={ styles.inputTaskTitle }>{ title }</h3>
            )}
            </label>
            { isEditMode ? (
                <button
                    aria-label="Save"
                    className={ styles.inputTaskSave }
                    onClick={() => {
                        onEdited(id, title)
                        setIsEditMode(false)
                    }}
                /> ) : (
                <button
                    aria-label="Remove"
                    className={ styles.inputTaskRemove }
                    onClick={() => {
                        if(confirm('Are you sure?')) {
                            onRemoved(id)
                        }
                    }}
                /> )
            }
            <button
                    aria-label="Edit"
                    className={ styles.inputTaskEdit }
                    onClick={() => {
                        onEdited(id, title)
                        setIsEditMode(true)
                    }}
                />
        </div>
    )
}
