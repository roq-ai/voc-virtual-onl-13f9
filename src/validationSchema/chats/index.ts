import * as yup from 'yup';

export const chatValidationSchema = yup.object().shape({
  message: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
