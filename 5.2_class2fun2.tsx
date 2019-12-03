import React, { useState, useEffect, useRef } from 'react';

interface TooltipProps {
    title: string;
    children: any;
    hideOnHover?: boolean;
    onChange?: (name: string, value: string) => void
}

export const ToolTip = (props: TooltipProps) => {
    const spanRef = useRef(null)
    const { title, children, hideOnHover = false, onChange } = props;

    const [value, setValue] = useState(title);
    const [visible, setVisible] = useState(!hideOnHover);

    useEffect(() => {
        spanRef.current.addEventListener('mouseenter', handleMouseEnter);
        return (() => spanRef.current.removeEventListener('mouseenter', this.handleMouseEnter));
    });

    const handleMouseEnter = () => setVisible(true);

    const handleChange = ({ target }) => {
        const { name, value: newValue } = target;
        setValue(newValue);
        if (onChange) {
            onChange(name, newValue);
        }
    };

    return <span ref={spanRef} onMouseEnter={handleMouseEnter} onChange={handleChange}>
        {children}
    </span>;
}