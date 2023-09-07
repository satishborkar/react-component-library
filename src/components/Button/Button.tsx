import React from 'react';
import '../../styles/button.css';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label: string;
    hoverText: string;
    style?: React.CSSProperties;
    containerClassName?: string;
    // hoverClassName?: string;
    buttonClassName?: string;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { children, style, label, hoverText, buttonClassName } = props;

    return (
        <div className="hover-button">
            <button className={['btn', buttonClassName].join(' ')} style={style} {...props}>
                <span className={buttonClassName} data-hover={hoverText || label}>
                    {label || children}
                </span>
            </button>
        </div>
    );
};
