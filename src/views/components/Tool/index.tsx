import React from 'react';
import styles from './index.module.scss';
import { Link, LinkOwnProps } from "@mui/material";

interface ILink {
    href: string,
    target?: string,
    underline?: LinkOwnProps,
    className?: string,
    sx?: LinkOwnProps,
    tool: string
}

export const Tool: React.FC<ILink> = ({...props}) => {
    return (
        <Link href={props.href} target="_blank" underline="none" className={styles.blockLink} sx={{color: "#292d34"}}>{props.tool}</Link>
    )
}
