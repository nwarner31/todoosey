import {ReduxState} from "../../store/my-data-store";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const DashboardPage = () => {
    const loggedIn = useSelector((state: ReduxState) => state.loggedIn);
    const user = useSelector((state: ReduxState) => state.user);
    if (!loggedIn) { return (<Navigate to="/" />)}
    return (
        <main>
            <h2>{user.displayName}'s Dashboard</h2>
        </main>);
}


export default DashboardPage;