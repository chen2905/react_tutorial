import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
function FormikContainer() {

    const optionValues = [
        { key: 'Select a option', value: '' },
        { key: 'Option 1', value: 'Option 1' },
        { key: 'Option 2', value: 'Option 2' },
        { key: 'Option 3', value: 'Option 3' },

    ]
    const radioOptionValues = [

        { key: 'Option 1', value: 'Option 1' },
        { key: 'Option 2', value: 'Option 2' },
        { key: 'Option 3', value: 'Option 3' },

    ]
    const chkOptionValues = [

        { key: 'Option 1', value: 'Option 1' },
        { key: 'Option 2', value: 'Option 2' },
        { key: 'Option 3', value: 'Option 3' },

    ]
    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        chkOption:[],
        birthDate:null
    }
    const validateSchema = Yup.object({
        email: Yup.string().required('Email Required'),
        description: Yup.string().required('Description Required'),
        selectOption: Yup.string().required('Select Option Required'),
        radioOption: Yup.string().required('Radio Option Required'),
        chkOption: Yup.string().required('Checkbox Option Required'),
        birthDate:Yup.date().required('Birth day required').nullable()


    })
    const onSubmit = (values) => console.log('Form datas:', values)
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validateSchema}
            onSubmit={onSubmit}
        >
            {
                formik => <Form>
                    <FormikControl
                        control='input'
                        type='email'
                        name='email'
                        label='Email'
                    />
                    <FormikControl
                        control='textarea'
                        name='description'
                        label='Description' />

                    <FormikControl
                        control='select'
                        name='selectOption'
                        label='select Option'
                        options={optionValues}
                    />


                    <FormikControl
                        control='radio'
                        name='radioOption'
                        label='check a Option'
                        options={radioOptionValues}
                    />

                    
                    <FormikControl
                        control='checkbox'
                        name='chkOption'
                        label='check a Option'
                        options={chkOptionValues}
                    />  

                    <FormikControl
                        control='date'
                        name='birthDate'
                        label='Pick a Date'
                       
                    />  
                    <button type='submit'>submit</button>
                </Form>
            }
        </Formik>
    )
}

export default FormikContainer
