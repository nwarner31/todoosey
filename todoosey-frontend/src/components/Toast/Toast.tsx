import classes from './Toast.module.css';

export enum ToastTypes {
    Error = "error-toast",
    Success = "success-toast"
}


interface ToastProps {
    header?: string;
    message: string;
    toastType?: ToastTypes;
}

const Toast = ({header, message, toastType = ToastTypes.Success}: ToastProps) => {
    return (
        <div className={`${classes["toast-body"]} ${classes[toastType]}`}>
            {header && <div className={classes["toast-head"]}><h2>{header}</h2></div>}
            <div className={classes["toast-message"]}>{message}</div>
        </div>
    );
}

export default Toast;