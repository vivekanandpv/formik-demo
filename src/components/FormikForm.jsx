import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import * as Yup from 'yup';
import InputControl from './InputControl';

const FormikForm = (props) => {
  //    through as prop, we can pass the reference to a custom component (username)
  //    For the fine-grained control, we can make use of render props (password)
  //    (this is quite an advanced technique)
  //    Custom render function can also be passed as content projection
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    details: Yup.string().max(50, 'Maximum 50 characters'),
    country: Yup.string().required('Country is required'),
  });

  const initialValues = {
    username: '',
    password: '',
    details: '',
    country: '',
  };

  const handleSubmit = (formData) => {
    console.log('Data', formData);
  };

  return (
    <Fragment>
      <h3>Login Form (Formik Components)</h3>
      <hr />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <Field className='form-control' name='username' as={InputControl} />
            <ErrorMessage name='username' />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <Field
              name='password'
              render={({ field, meta }) => {
                return (
                  <Fragment>
                    <input className='form-control' {...field} />
                    {meta.touched && meta.error ? (
                      <p className='text-danger'>{meta.error}</p>
                    ) : null}
                  </Fragment>
                );
              }}
            />
            <ErrorMessage name='password' />
          </div>

          <div className='form-group'>
            <label htmlFor='username'>Details</label>
            <Field className='form-control' name='details' as='textarea' />
            <ErrorMessage name='details' />
          </div>

          <div className='form-group'>
            <label htmlFor='username'>Details</label>
            <Field className='form-control' name='country' as='select'>
              <option value=''>--- Please Select ---</option>
              <option value='India'>India</option>
              <option value='USA'>USA</option>
              <option value='UK'>UK</option>
            </Field>
            <ErrorMessage name='country' />
          </div>

          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default FormikForm;
