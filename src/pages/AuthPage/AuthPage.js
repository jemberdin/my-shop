import { Fragment } from 'react';
import { PageHero } from '../../components';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => {
    return (
        <Fragment>
            <PageHero title='auth'/>
            <main className={'page section section-center'}>
                <AuthForm />
            </main>
        </Fragment>
    );
}
 
export default AuthPage;
