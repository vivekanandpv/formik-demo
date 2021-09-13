import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import * as Yup from 'yup';

const FormikForm = (props) => {
  //  For an array, please review the validationSchema
  //  review the push, remove, Field and ErrorMessage name
  const validationSchema = Yup.object({
    contacts: Yup.array().of(
      Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
      })
    ),
  });

  const initialValues = {
    contacts: [
      {
        firstName: '',
        lastName: '',
        phoneNumber: '',
      },
    ],
  };

  const handleSubmit = (formData) => {
    console.log('Data', formData);
  };

  return (
    <Fragment>
      <h3>Contact Form (Dynamic Form)</h3>
      <hr />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <FieldArray name='contacts'>
            {(props) => {
              //  We use FieldArray for projecting form-row segments
              // console.log('field array props', props);
              const { push, remove, form } = props;
              const { values } = form;
              const { contacts } = values;
              return (
                <Fragment>
                  <div className='row d-flex flex-row justify-content-end'>
                    <div className='col-md-2 d-flex flex-row justify-content-end'>
                      <button
                        className='btn btn-primary btn-sm mr-2'
                        onClick={() =>
                          push({
                            firstName: '',
                            lastName: '',
                            phoneNumber: '',
                          })
                        }
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  {contacts.map((c, i) => {
                    return (
                      <div className='row d-flex flex-row' key={i}>
                        <div className='col-md-3'>
                          <div className='form-group'>
                            <label htmlFor='username'>First Name</label>
                            <Field
                              className='form-control'
                              name={`contacts.${i}.firstName`}
                            />
                            <ErrorMessage
                              name={`contacts.${i}.firstName`}
                              component='p'
                            />
                          </div>
                        </div>
                        <div className='col-md-3'>
                          <div className='form-group'>
                            <label htmlFor='username'>Last Name</label>
                            <Field
                              className='form-control'
                              name={`contacts.${i}.lastName`}
                            />
                            <ErrorMessage
                              name={`contacts.${i}.lastName`}
                              component='p'
                            />
                          </div>
                        </div>
                        <div className='col-md-3'>
                          <div className='form-group'>
                            <label htmlFor='username'>Phone Number</label>
                            <Field
                              className='form-control'
                              name={`contacts.${i}.phoneNumber`}
                            />
                            <ErrorMessage
                              name={`contacts.${i}.phoneNumber`}
                              component='p'
                            />
                          </div>
                        </div>
                        <div className='col-md-3 d-flex flex-column justify-content-center'>
                          <button
                            className='btn btn-danger btn-sm'
                            onClick={() => remove(i)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </Fragment>
              );
            }}
          </FieldArray>

          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default FormikForm;
