import React from 'react';
import { Formik, Field } from 'formik';
import Layout from '../components/Layout';
import { InputField } from '../components/fields/inputField';
import { RegisterComponent } from "../generated/apolloComponents";
import Router from 'next/router';

export default () => {
    return (
    <Layout title="Register page">
        <RegisterComponent>
        {register => (
            <Formik
                validateOnBlur={false}
                validateOnChange={false} 
                onSubmit={async (data, {setErrors}) => {
                    try {
                        const response = await register({
                        variables: {
                            data
                        }
                        });
                        console.log(response);
                        // @ts-ignore 
                        Router.push("/check-email");
                    } catch(err) {
                        const errors: { [key: string]: string } = {};
                        err.graphQLErrors[0].validationErrors.forEach(
                            (validationErr: any) => {
                                Object.values(validationErr.constraints).forEach(
                                    (message: any) => {
                                        errors[validationErr.property] = message;
                                    }
                                )
                            }
                        )
                        setErrors(errors);
                    }
                }}
                initialValues={{
                email: '',
                firstName: '',
                lastName: '',
                password: ''
            }}>{({ handleSubmit  }) => <form onSubmit={handleSubmit}>
                <Field name='firstName' placeholder='firstName' component={InputField} />
                <Field name='lastName' placeholder='lastName' component={InputField} />
                <Field name='email' placeholder='email' component={InputField} />
                <Field name='password' placeholder='password' type='password' component={InputField} />
                <button type='submit'>Submit</button>
            </form>}</Formik>
        )}
        </RegisterComponent>
    </Layout>
    );
};