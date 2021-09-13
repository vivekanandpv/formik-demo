import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const InputControl = (props) => {
  //  {...props} is called the rest props are props spread
  //  this will pass the incoming props to the destination components
  //  This technique will override the props that are defined before (e.g., className and type)
  return (
    <Fragment>
      <input className='form-control' type='text' {...props} />
    </Fragment>
  );
};

export default InputControl;
