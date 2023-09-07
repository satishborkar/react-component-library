import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoIosBrowsers } from 'react-icons/io';
import '../../styles/copyToClipboard.css';

interface ICopyToClipboardIconProps {
    text: string;
    containerClassName?: string;
    iconClassName?: string;
    style?: React.CSSProperties;
    inline?: Boolean;
    title?: string;
    children?: React.ReactNode;
}

/******
 * CSS classes preferences
 * 'copy-to-clipboard-container' className to wrapper DIV
 * 'inline-cc-icon copy-to-clipboard-container' className to wrapper to DIV to display icon inline
 * ******/

export const CopyToClipboardIcon: React.FunctionComponent<ICopyToClipboardIconProps> = (props) => {
    const { text, containerClassName, iconClassName, style, inline, title, children } = props;
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            copied && setCopied(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [copied]);

    if (!copied && text !== null) {
        return (
            <div className={['grid-column-copy-to-clipboard', containerClassName, inline && 'inline-icon'].join(' ')} style={style}>
                <CopyToClipboard
                    text={text}
                    onCopy={() => setCopied(true)}
                    size={14}
                    title={title || 'Click to copy content'}
                    className={['cursor-pointer copy-to-clipboard-icon', iconClassName].join(' ')}
                >
                    {children ? <>{children}</> : <IoIosBrowsers />}
                </CopyToClipboard>
            </div>
        );
    }

    return null;
};
