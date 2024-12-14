import React from 'react';
import classes from "./Button.module.css";

export enum ButtonTypes {
    Primary = "button-primary",
    Secondary = "button-secondary",
    BG = "button-bg",
    Text = 'button-text'
}

interface ButtonProps extends React.ComponentProps<'button'> {
    buttonType?: ButtonTypes;
    label: string;
}

const Button: React.FC<ButtonProps> = ({buttonType = ButtonTypes.Primary,label, ...rest}) => {
    return (
        <button {...rest} className={`${classes[buttonType]} ${rest.className}`} >{label}</button>
    );
}

export default Button;