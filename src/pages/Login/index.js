import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '~/assets/images/logo.svg';

import { authorizationRequest } from '~/store/modules/auth/actions';
import { Input, Button } from '~/components';
import { Container, Content } from './styles';

export default function Login() {
  const { loading } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    const { private_key, public_key } = data;
    try {
      const schema = Yup.object().shape({
        private_key: Yup.string().required('O campo private_key é obrigatório'),
        public_key: Yup.string().required('O campo public_key é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current.setErrors({});

      dispatch(authorizationRequest(private_key, public_key));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};

        error.inner.forEach(err => {
          errorMessages[err.path] = err.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Marvel Logo" title="Marvel logo" />
        <h1>Dados de acesso</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="public_key" placeholder="public_key" required />
          <Input name="private_key" placeholder="private_key" required />
          <Button mt type="submit" loading={loading}>
            Acessar
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
