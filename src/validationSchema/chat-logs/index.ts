import * as yup from 'yup';

export const chatLogValidationSchema = yup.object().shape({
  log_message: yup.string().required(),
  chat_id: yup.string().nullable().required(),
});
