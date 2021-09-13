import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import * as Yup from 'yup';
import CustomValidationError from './CustomValidationError';
import InputControl from './InputControl';

const FormikForm = (props) => {
  //    To customize the error message, we can provide the component prop
  //    to ErrorMessage. This can be a custom component (password)
  //    component prop can be an element as well such as p, span, etc. (username)
  //    render props technique can also be used (details)
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
            <ErrorMessage name='username' component='p' />
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
          </div>

          <div className='form-group'>
            <label htmlFor='username'>Details</label>
            <Field className='form-control' name='details' as='textarea' />
            <ErrorMessage
              name='details'
              render={(error) => {
                return (
                  <Fragment>
                    <p className='text-danger'>{error}</p>
                  </Fragment>
                );
              }}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='username'>Details</label>
            <Field className='form-control' name='country' as='select'>
              <option value=''>--- Please Select ---</option>
              <option value='India'>India</option>
              <option value='USA'>USA</option>
              <option value='UK'>UK</option>
            </Field>
            <ErrorMessage name='country' component={CustomValidationError} />
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
