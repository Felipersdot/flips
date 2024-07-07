import DelayedSpinner from 'components/DelayedSpinner';
import { useFormikContext } from 'formik';
import React from 'react';

const FormSpinner = () => {
  const { isSubmitting } = useFormikContext();
  return (isSubmitting && <DelayedSpinner />) || null;
};

export default FormSpinner;
