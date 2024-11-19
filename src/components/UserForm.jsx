import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = () => {
  const formik = useFormik({
    initialValues: { age: '', weight: '', height: '' },
    validationSchema: Yup.object({
      age: Yup.number().required('Required'),
      weight: Yup.number().required('Required'),
      height: Yup.number().required('Required'),
    }),
    onSubmit: async (values) => {
      await axios.post('http://127.0.0.1:5000/api/submit-metrics', values);
      alert('Data Submitted');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Age</label>
        <input type="number" {...formik.getFieldProps('age')} />
      </div>
      <div>
        <label>Weight</label>
        <input type="number" {...formik.getFieldProps('weight')} />
      </div>
      <div>
        <label>Height</label>
        <input type="number" {...formik.getFieldProps('height')} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
