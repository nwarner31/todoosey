import React from 'react';
import classes from "./Button.module.css";

export enum ButtonTypes {
    Primary = "button-primary",
    Secondary = "button-secondary"
}

interface ButtonProps extends React.ComponentProps<'button'> {
    buttonType?: ButtonTypes;
    label: string;
}

const Button: React.FC<ButtonProps> = ({buttonType = ButtonTypes.Primary,label, ...rest}) => {
    return (
        <div className={`${classes[buttonType]} ${rest.className}`}>{label}</div>
    );
}

export default Button;