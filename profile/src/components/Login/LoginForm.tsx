import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useStores } from '../../hooks/useStores';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../UI/Button.styled';
import omniBuilderApi from '../../api/omniBuilderApi';
import TextFormField from 'components/UI/FormFields/TextFormField';

const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

interface LoginFormValues {
    email: string;
    password: string;
}

export const LoginForm: React.FC<{}> = () => {
    const initialValues: LoginFormValues = { email: '', password: '' };
    const { authStore, userStore } = useStores();
    let navigate = useNavigate();
    let location = useLocation();
    // @ts-ignore
    let { from } = (location.state as { from: { pathname: string } }) || {
        from: { pathname: '/' },
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (data, { setSubmitting }) => {
                setSubmitting(true);
                const isLoggedIn = await authStore.login(
                    data.email,
                    data.password
                );
                if (authStore.loggedInUser?.role !== 'ADMIN') {
                    const r = await omniBuilderApi.builders.getUserBuilder();
                    if (r.data?.builderId) {
                        from = { pathname: `/builder/${r.data.builderId}` }
                    } else {
                        from = { pathname: `/not-found` }
                    }
                }
                setSubmitting(false);
                if (isLoggedIn) {
                    userStore.addUser(authStore.loggedInUser.id, authStore.loggedInUser.userName);
                    navigate(from, { state: { from: '/login' }});
                };
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <TextFormField
                        placeholder="Email"
                        name="email"
                        type="email"
                        autoComplete="on"
                        label="Email"
                    />
                    <TextFormField
                        placeholder="Password"
                        name="password"
                        type="password"
                        autoComplete="on"
                        label="Password"
                    />
                    <Button primary disabled={isSubmitting} type="submit">
                        Login
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
