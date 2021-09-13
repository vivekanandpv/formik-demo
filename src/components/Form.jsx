import { useFormik } from 'formik';
import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const Form = (props) => {
  //  make sure the input controls have name attributes corresponding
  //  to the properties of initialValues

  //  Then, use the formikInstance to bind to onChange and value props
  const formikInstance = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
  });
  return (
    <Fragment>
      <h3>Login Form</h3>
      <hr />
      <form>
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

        <button className='btn btn-primary'>Submit</button>
      </form>
    </Fragment>
  );
};

export default Form;
