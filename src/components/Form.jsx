import { useFormik } from 'formik';
import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const Form = (props) => {
  //      to keep track of which input fields are touched in the form
  //      we use formikInstace.touched.<property>
  //      In order for this to work, every control's onBlur should be assigned to formikInstace.handleBlur
  //      Use this to display the validation errors for the fields that are touched
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
