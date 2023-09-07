import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoIosBrowsers } from 'react-icons/io';
import '../../styles/copyToClipboard.css';

interface ICopyToClipboardIconProps {
    text: string;
    containerClass?: string;
    iconClass?: string;
    style?: React.CSSProperties;
    //displayInline?: Boolean;
    title?: string;
}

/******
 * CSS classes preferences
 * 'copy-to-clipboard-container' className to wrapper DIV
 * 'inline-cc-icon copy-to-clipboard-container' className to wrapper to DIV to display icon inline
 * ******/

export const CopyToClipboardIcon: React.FunctionComponent<ICopyToClipboardIconProps> = (props) => {
    const { text, containerClass, iconClass, style, /*displayInline*/ title } = props;
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            copied && setCopied(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [copied]);

    if (!copied && text !== null) {
        return (
            <div className={['grid-column-copy-to-clipboard', containerClass].join(' ')} style={style}>
                <CopyToClipboard
                    text={text}
                    onCopy={() => setCopied(true)}
                    size={14}
                    title={title || 'Click to copy content'}
                    className={['cursor-pointer copy-to-clipboard-icon flip-horizontal', iconClass].join(' ')}
                >
                    <IoIosBrowsers />
                </CopyToClipboard>
            </div>
        );
    }

    return null;
};
