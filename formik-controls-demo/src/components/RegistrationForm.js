import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function RegistrationForm() {
    const initialValues={
        email:'',
        password:'',
        confirmPassword:'',
        mocContact:'',
        phone:''
    }
    const mocContactOptions=[
        {key:'Email',value:'email'},
        {key:'Phone',value:'phone'}
    ]
    const validationSchema =Yup.object({
        email:Yup.string().email('Invalid Email Address').required('Email Required'),
        password:Yup.string().required('Password Required'),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'),''],'Passwords must match').required('Confirm Password Required'),
        mocContact:Yup.string().required('Mode of Contact Reqired'),
        phone:Yup.string().when('mocContact',{
            is:'phone',
            then:Yup.string().required('Phone Required')
        })

    })
    const onSubmit =(values)=>{console.log(values)}
    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            
            {
                formik=><Form>
                    <FormikControl
                    control='input'
                    type='email'
                    name='email'
                    label='Email'
                />
           <FormikControl
                    control='input'
                    type='password'
                    name='password'
                    label='Password'
                />      
            <FormikControl
                    control='input'
                    type='password'
                    name='confirmPassword'
                    label='Confirm Password'
                /> 

            <FormikControl
                    control='radio'
                    name='mocContact'
                    label='Method of Contact'
                    options ={mocContactOptions}
                /> 
                 <FormikControl
                    control='input'
                    name='phone'
                    label='Phone'
                />
            <button type='submit' disabled={!formik.isValid}>Submit</button>
            </Form>  
            }
            
           
            </Formik>
        </div>
    )
}

export default RegistrationForm
