import classes from './RegisterPage.module.css';
import Input from '../../components/Input/Input';
import Button, {ButtonTypes} from "../../components/Button/Button";

import { useNavigate } from "react-router";

const RegisterPage = () => {
    return (
        <main className={classes['register-page']}>
            <h1>Register</h1>
            <div className={classes['input-container']}>
                <div className={`${classes.username} ${classes.input}`}>
                    <Input label='Username'  />
                </div>
                <div className={`${classes['display-name']} ${classes.input}`}>
                    <Input label='Display Name'  />
                </div>
                <div className={`${classes.email} ${classes.input}`}>
                    <Input label='Email'  />
                </div>
                <div className={`${classes.password} ${classes.input}`}>
                    <Input label='Password' />
                </div>
                <div className={`${classes['confirm-password']} ${classes.input}`}>
                    <Input label='Confirm Password' />
                </div>
                <Button label='Cancel' className={classes['cancel-button']} buttonType={ButtonTypes.BG} />
                <Button label='Register' className={classes['register-button']} buttonType={ButtonTypes.Text} />
            </div>
        </main>
    );
}

export default RegisterPage;