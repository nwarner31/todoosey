

interface InputProps extends React.ComponentProps<'input'> {
    label: string;
}

const Input: React.FC<InputProps> = ({label, ...rest}) => {
    return (
        <>
            <label htmlFor={rest.name}>{label}</label>
            <input {...rest}/>
        </>
    );
}

export default Input;