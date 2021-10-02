import * as yup from 'yup';

export const dataSchema= yup.object().shape({
    id:yup.number().required(),
    name: yup.string().required(),
    username: yup.string().required(),
    email: yup.string()
      .email('Email is invalid')
});