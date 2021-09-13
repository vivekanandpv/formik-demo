import { useFormik } from 'formik';
import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const Form = (props) => {
  //  This instance manages form state, form submission, and validation errors
  const formikInstance = useFormik({});
  return (
    <Fragment>
      <h3>Login Form</h3>
      <hr />
      <form>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input type='text' className='form-control' />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' className='form-control' />
        </div>

        <button className='btn btn-primary'>Submit</button>
      </form>
    </Fragment>
  );
};

export default Form;
