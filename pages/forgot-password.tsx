import React from 'react';
import { Formik, Field } from 'formik';
import Layout from '../components/Layout';
import { InputField } from '../components/fields/inputField';
import { ForgotPasswordComponent } from "../generated/apolloComponents";
import Router from 'next/router';

export default () => {
    return (
    <Layout title="Forgot Password page">
        <ForgotPasswordComponent>
        {forgotPassword => (
            <Formik
                onSubmit={async (data) => {
                    const response = await forgotPassword({
                    variables: data
                    });
                    console.log(response);
                    // @ts-ignore 
                    Router.push("/check-email");
                }}
                initialValues={{
                email: ''
            }}>{({ handleSubmit  }) => <form onSubmit={handleSubmit}>
                <Field name='email' placeholder='email' component={InputField} />
                <button type='submit'>Forgot Password</button>
            </form>}</Formik>
        )}
        </ForgotPasswordComponent>
    </Layout>
    );
};