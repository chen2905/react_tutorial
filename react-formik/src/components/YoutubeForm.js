import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import TextError from './TextError'
import * as Yup from 'yup'
const initialValues = {
    name: 'cg',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['123','456']
}
const onSubmit = values => {
    console.log('sumbit values:', values)

}


const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string()
        .email('Invalid email format!')
        .required('Required!'),
    channel: Yup.string().required('Required!')

})

const validateComment =(value)=>{
    let error
    if(!value){
        error='Comments required'
    }
    return error
}
function YoutubeForm() {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
           
        >
            <Form>
                <div className='form-control'>
                    <label htmlFor='name' >Name</label>
                    <Field type='text' id='name' name='name' placeholder='Name' />
                    <ErrorMessage name='name' component={TextError} />
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field type='email' id='email' name='email' placeholder='Email' />
                    <ErrorMessage name='email' component={TextError} />
                </div>
                <div className='form-control'><label htmlFor='channel' >Channel</label>
                    <Field type='text' id='channel' name='channel' placeholder='Youtube channel name' />
                    <ErrorMessage name='channel' component={TextError} />
                </div>

                <div className='form-control'><label htmlFor='comments' >Comments</label>
                    <Field as='textarea' id='comments' name='comments' placeholder='' validate={validateComment}/>
                    <ErrorMessage name='comments' component={TextError} />
                </div>
                <div className='form-control'><label htmlFor='address' >address</label>
                    <Field name='address'>
                        {
                            (props, form, meta) => {
                                const { field } = props
                                console.log('CG Render Props', props)
                                return (
                                    <div><input type='text' id='address' {...field} />
                                        {/* {meta.touched && meta.error?<div>{meta.error}</div>:null} */}
                                    </div>
                                )
                            }
                        }
                    </Field>

                </div>
                <div className='form-control'>
                    <label htmlFor='facebook'>Facebook</label>
                    <Field id='facebook' name='social.facebook' placeholder='facebook' />
                </div>
                <div className='form-control'>
                    <label htmlFor='twitter'>twitter</label>
                    <Field id='twitter' name='social.twitter' placeholder='twitter' />
                </div>

                <div className='form-control'>
                    <label htmlFor='twitter'>Phone 1:</label>
                    <Field id='priPhoneNumber' name='phoneNumbers[0]' placeholder='phone 1' />
                    {/* <ErrorMessage name='phoneNumbers[0]' component={TextError} /> */}
                </div>

                <div className='form-control'>
                    <label htmlFor='twitter'>Phone 2:</label>
                    <Field id='secPhoneNumber' name='phoneNumbers[1]' placeholder='phone 2' />
                    {/* <ErrorMessage name='phoneNumbers[0]' component={TextError} /> */}
                </div>

                <div className='form-control'>
                    <label>List of phone numbers</label>
                    {<FieldArray name='phNumbers'>
                        {
                            fieldArrayProps=> {
                                console.log('this is fieldArrayProps', fieldArrayProps)
                                const { push, remove, form } = fieldArrayProps
                                const { values } = form
                                const { phNumbers } = values
                                console.log('this is phNumbers in values',phNumbers)
                               
                                return (
                                    <div>
                                       {phNumbers.map((phNumber, index) => (
                                        <div key={index}>
                                            console.log('index',{index})
                                          <Field name={`phNumbers[${index}]`} />
                                          {
                                            index>0 && (
                                                <button type='button' onClick={()=>remove(index)}>-</button>
                                            )

                                          }
                                          
                                          <button type='button' onClick={()=>push('')}>+</button>
                                         </div>
                                   ))}
                                    </div>
                                )
                               
                            }
                        }
                    </FieldArray>}
                </div>
                <button type='submit'>Submit</button>


            </Form >
        </Formik>
    )
}

export default YoutubeForm
