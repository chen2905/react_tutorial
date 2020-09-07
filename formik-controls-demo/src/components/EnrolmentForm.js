import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
function EnrolmentForm() {
    const initialValues ={
        email:'',
        bio:'',
        course:[],
        skillSet:[],
        courseDate:null
    }
    const courseOptions=[
        {key:'--Select--',value:''},
        {key:'Art',value:'art'},
        {key:'Finance',value:'finance'},
        {key:'Programming',value:'programming'}
    ]
    const skillSetOptions =[
        {key:'HTML',value:'html'},
        {key:'CSS',value:'css'},
        {key:'JAVASCRIPT',value:'javascript'}
    ]
    const validationSchema =Yup.object({
        email:Yup.string().email('Invalid Email').required('Email Required'),
        bio:Yup.string().required('BIO Required'),
        course:Yup.string().required('Course Required'),
        skillSet:Yup.string().required('Skill Set Required'),
        courseDate:Yup.date().required('Course Date Required').nullable()
    })


    const onSubmit =values=> console.log('submitted form values',values)
    return (
        <React.Fragment>
        <div className='form-control'>
       <h1>Entrolment Form</h1>
        <Formik initialValues={initialValues} 
        validationSchema={validationSchema} 
        onSubmit={onSubmit}>
            {
                formik =>
                    <Form>
                        <FormikControl
                        control='input'
                        type='email'
                        label='Email'
                        name='email'
                      />
                        
                       <FormikControl
                        control='textarea'
                        label='BIO'
                        name='bio'
                        />
                      
                         <FormikControl
                        control='select'
                        label='Course'
                        name='course'
                        options={courseOptions}
                        />
                        <FormikControl
                        control='checkbox'
                        label='Skill Set'
                        name='skillSet'
                        options={skillSetOptions}
                        />
                        <FormikControl
                            control='date'
                            name ='courseDate'
                            label= 'Course Date'
                        /> 
                        <button type='submit' disabled={!formik.isValid}>Submit Form</button>
                    </Form>
                }
            
        </Formik>
        </div>
        </React.Fragment>
    )
}

export default EnrolmentForm
