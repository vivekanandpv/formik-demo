import { useFormik } from 'formik';
import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const Form = (props) => {
  //    For validation, we pass a function to validate property of the
  //    config object passed to useFormik hook
  //    This receives the current form value and must return the object with
  //    same properties as in the initial values
  const formikInstance = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (formData) => {
      console.log('Data', formData);
    },
    validate: (formValue) => {
      const validationErrors = {};

      if (!formValue.username) {
        validationErrors.username = 'Username is required';
      }

      if (!formValue.password) {
        validationErrors.password = 'Password is required';
      }

      return validationErrors;
    },
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
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            onChange={formikInstance.handleChange}
            value={formikInstance.values.password}
          />
        </div>

        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
