import Button, {ButtonTypes} from "../../components/Button/Button";
import ToDo from '../../icons/to-do.png';
import classes from './HomePage.module.css';

import { useMediaQuery } from "react-responsive";

const HomePage = () => {
    const hideS1Icon = useMediaQuery({ query: '(max-width: 450px)'})
    return (
        <div className={classes['home-page']}>
            <section className={classes['section-1-container']}>
                <h1 className={classes['section-1-header']}>ToDoosey</h1>
                <h3 className={classes['section-1-subhead']}>Collaborate and Conquer</h3>
                <Button className={classes['register-button']}  label='Register' />
                <Button className={classes['signin-button']} buttonType={ButtonTypes.Secondary} label='Sign In' />
                {!hideS1Icon && <img className={classes['section-1-icon']} src={ToDo} alt='ToDo List Icon' />}
            </section>
            <h1>Home Page</h1>
        </div>
    );
}

export default HomePage;