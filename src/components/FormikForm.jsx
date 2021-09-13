import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import * as Yup from 'yup';

const FormikForm = (props) => {
  //  Instead of useFormik hook, we can make use of Formik components
  //  This automatically sets up the context
  //  Instead of html form, we use Form component from Formik
  //  No onSubmit on Form
  //  Use Field component instead of input controls
  //  onChange, onBlurr, and value bindings are implicit
  //  Use ErrorMessage component with name prop instead of manual blocks of error message display
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const initialValues = {
    username: '',
    password: '',
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
            <Field type='text' className='form-control' name='username' />
            <ErrorMessage name='username' />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <Field type='password' className='form-control' name='password' />
            <ErrorMessage name='password' />
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
