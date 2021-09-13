import { useFormik } from 'formik';
import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const Form = (props) => {
  //    onSubmit handler can be passed to the useFormik hook
  //    Then, bind form's onSubmit to handleSubmit of formik
  //    Also, make sure the button has type set to submit
  const formikInstance = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (formData) => {
      console.log('Data', formData);
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
