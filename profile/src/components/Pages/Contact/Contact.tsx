import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { GlobalStyle, StyledForm, FieldWrapper, Input, ErrorMessageStyled, TextArea, Select, SubmitButton } from './Constact.styled';


const ContactForm = () => {
  const initialValues = {
    fullName: '',
    phone: '',
    email: '',
    message: '',
    contactPreference: 'Morning',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Required'),
    phone: Yup.string()
      .matches(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/, 'Phone number is not valid')
      .required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    message: Yup.string().required('Required'),
    contactPreference: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
    // Submit form data to server
  };

  return (
    <div>
      <GlobalStyle />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <FieldWrapper>
              <Input
                type="text"
                name="fullName"
                placeholder="Name: Felipe Rodriguez"
                className={errors.fullName && touched.fullName ? 'shake' : ''}
              />
              <ErrorMessage name="fullName" component={ErrorMessageStyled} />
            </FieldWrapper>

            <FieldWrapper>
              <Input
                type="text"
                name="phone"
                placeholder="Contact: 512-434-9393"
                className={errors.phone && touched.phone ? 'shake' : ''}
              />
              <ErrorMessage name="phone" component={ErrorMessageStyled} />
            </FieldWrapper>

            <FieldWrapper>
              <Input
                type="email"
                name="email"
                placeholder="Felipersdot@gmail.com"
                className={errors.email && touched.email ? 'shake' : ''}
              />
              <ErrorMessage name="email" component={ErrorMessageStyled} />
            </FieldWrapper>

            <FieldWrapper>
              <TextArea
                name="message"
                placeholder="Comments and Feedback Thank You"
                className={errors.message && touched.message ? 'shake' : ''}
                cols="20"
                rows="5"
              />
              <ErrorMessage name="message" component={ErrorMessageStyled} />
            </FieldWrapper>

            <FieldWrapper>
              <Select
                as="select"
                name="contactPreference"
                className={
                  errors.contactPreference && touched.contactPreference
                    ? 'shake'
                    : ''
                }
              >
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </Select>
              <ErrorMessage
                name="contactPreference"
                component={ErrorMessageStyled}
              />
            </FieldWrapper>

            <SubmitButton type="submit">Submit</SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
