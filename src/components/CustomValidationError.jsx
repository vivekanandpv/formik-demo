import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const CustomValidationError = (props) => {
  //  props.children is the idea of content projection
  return (
    <Fragment>
      <p className='text-danger'>{props.children}</p>
    </Fragment>
  );
};

export default CustomValidationError;
