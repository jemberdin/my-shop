import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../../context/auth-context';

const PrivateRoute = ({children, ...rest}) => {
    const { isLoggedIn } = useAuthContext();  
    return (
        <Route 
            {...rest}
            render={() => isLoggedIn ? children : <Redirect to='/'/>}>
        </Route>
    )
}

export default PrivateRoute;
