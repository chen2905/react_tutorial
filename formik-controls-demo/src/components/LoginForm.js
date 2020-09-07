import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
function LoginForm() {
    const initialValues ={
        email:'',
        password:''
    }
    const validationSchema = Yup.object({
        email:Yup.string().email('Invalid Email Format').required('Email Required'),
        password:Yup.string().required('Password Required')
    })
    const onSubmit =(values)=>console.log("form values submitted",values)
    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik=><Form>
                        <FormikControl
                        control='input'
                        type ='email'
                        label='Email'
                        name ='email'
                        />
                        <FormikControl
                        control='input'
                        type ='password'
                        label='password'
                        name ='password'
                        />
                        <button type='submit' disabled={!formik.isValid}>submit</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}

export default LoginForm
