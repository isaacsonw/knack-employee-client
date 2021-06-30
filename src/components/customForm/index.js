/** @format */

import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormStylesWrapper } from './formStyles';
import { Button } from '../Button/';

const CustomForm = (props) => {
  return (
    <>
      <FormStylesWrapper
        alignItems={props.alignItems}
        inputWidth={props.inputWidth}>
        <div className="main">
          <h1>{props.title}</h1>
          <p className="info-text">{props.infoText}</p>
          <Formik
            enableReinitialize={props.enableReinitialize}
            initialValues={props.initialValues}
            validationSchema={props.initialSchema}
            onSubmit={props.onSubmitFunction}>
            {({ errors, _, touched, setFieldValue }) => (
              <Form>
                {props.formInputs &&
                  props.formInputs.map(
                    ({ name, placeholder, inputType, as, options, icon }) => (
                      <section key={placeholder} className="login__section">
                        <Field
                          onChange={
                            function (e) {
                              setFieldValue(name, e.target.value);
                              if (props[name]) {
                                props[name](e.target.value);
                              }
                            } || function () {}
                          }
                          as={as || 'input'}
                          {...(options || null)}
                          placeholder={placeholder}
                          name={name}
                          type={inputType}
                          className={
                            errors.name && touched.name ? ' is-invalid' : ''
                          }
                        />{' '}
                        {icon}
                        {
                          <ErrorMessage
                            name={name}
                            component="div"
                            className="invalid-feedback"
                          />
                        }
                        <span className="side_message">{props[name]}</span>
                        <div className="invalid-feedback info_message">
                          {props.infoTextTwo}
                        </div>
                      </section>
                    )
                  )}
                {props.otherActions}
                {props.btnText && (
                  <Button
                    disabled={props.loading || props.disabled}
                    type="submit">
                    {!props.loading
                      ? props.btnText
                      : props.btnText || 'Loading...'}
                  </Button>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </FormStylesWrapper>
    </>
  );
};

export default CustomForm;
