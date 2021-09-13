import { useFormik } from 'formik';
import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import * as Yup from 'yup';

const Form = (props) => {
  //    Validation logic can be abstracted using Yup
  //      We have already installed yup: npm i yup
  //      Provide the validation schema using yup
  //      This validation schema object is then assigned to the validationSchema
  //      of the useFormik hook. We no longer need manual validation.

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const formikInstance = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (formData) => {
      console.log('Data', formData);
    },
    validationSchema: validationSchema,
  });
  return (
    <Fragment>
      <h3>Login Form</h3>
      <hr />
      <form onSubmit={formikInstance.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            className='form-control'
            name='username'
            onChange={formikInstance.handleChange}
            value={formikInstance.values.username}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.touched.username && formikInstance.errors.username ? (
            <p className='text-danger'>Username is required</p>
          ) : null}
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            onChange={formikInstance.handleChange}
            value={formikInstance.values.password}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.touched.password && formikInstance.errors.password ? (
            <p className='text-danger'>Password is required</p>
          ) : null}
        </div>

        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
