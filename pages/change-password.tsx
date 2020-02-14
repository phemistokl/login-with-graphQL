import React from 'react';
import { Formik, Field } from 'formik';
import Layout from '../components/Layout';
import { InputField } from '../components/fields/inputField';
import { ChangePasswordComponent } from "../generated/apolloComponents";
import Router from 'next/router';
import { MyContext } from '../interfaces/MyContext';

const ChangePassword = ({token}: {token: string}) => {
    return (
    <Layout title="Change Password page">
        <ChangePasswordComponent>
        {changePassword => (
            <Formik
                onSubmit={async (data) => {
                    const response = await changePassword({
                    variables: {
                        data: {
                            password: data.password,
                            token
                        }
                    }
                    });
                    console.log(response);
                    // @ts-ignore 
                    Router.push("/");
                }}
                initialValues={{
                password: ''
            }}>{({ handleSubmit  }) => <form onSubmit={handleSubmit}>
                <Field name='password' placeholder='password' type="password" component={InputField} />
                <button type='submit'>Change Password</button>
            </form>}</Formik>
        )}
        </ChangePasswordComponent>
    </Layout>
    );
};

ChangePassword.getInitialProps = ({query: { token }}: MyContext) => {
    return {
        token
    }
}

export default ChangePassword;