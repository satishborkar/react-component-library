import React from 'react';
import '../../styles/button.css';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
    label: string;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { children, backgroundColor, color, style, label } = props;

    let _style: React.CSSProperties = style || {};
    /**
     * Override defaults
     * **/
    if (backgroundColor && _style) _style.backgroundColor = backgroundColor;
    if (color && _style) _style.color = color;

    return (
        <button className={`button`} style={_style} {...props}>
            {label || children}
        </button>
    );
};