import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const initialValues = {
    name: 'Chen',
    email: '',
    channel: ''
}
const onSubmit = values => {
    console.log('sumbit values:', values)

}

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'required'
    }
    if (!values.email) {
        errors.email = 'required'
    } else if (!/^\S+@\S+$/.test(String(values.email).toLowerCase())) {
        errors.email = 'invalid email address'
    }
    if (!values.channel) {
        errors.channel = 'required'
    }
    return errors
}
const validationSchema=Yup.object({
    name:Yup.string().required('Required!'),
    email:Yup.string()
    .email('Invalid email format!')
    .required('Required!'),
    channel:Yup.string().required('Required!')
})

function OldYoutubeForm() {
    const formik = useFormik({

        initialValues,
        onSubmit,
        validationSchema
        //validate,

    })
    console.log('formik visited:', formik.touched)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>
                <div className='form-control'><label htmlFor='channel' >Channel</label>
                    <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur} />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>
                <button type='submit'>Submit</button>


            </form >
        </div >
    )
}

export default OldYoutubeForm
