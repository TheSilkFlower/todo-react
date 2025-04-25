import { useState, useEffect } from "react";
import styles from './index.module.scss';

export const CursorHighlight = () => {
    const [ position, setPosition ] = useState({ x: 0, y: 0 })

    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
            setPosition({ x: event.offsetX, y: event.offsetY})
        };
        function handleMouseDown(event: MouseEvent) {
            console.log('Mouse down at: ', event, position)
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
        };
    }, [position])

    return (
        <div 
        className={ styles.highlight }
        style={{ left: `${position.x}px`, top: `${position.y}px` }} />
    )
}