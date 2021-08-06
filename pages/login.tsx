import React, { useState } from "react";
import {
  Link,
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Divider,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "axios";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email está no formato invalido")
        .required("Campo obrigatório"),
      password: Yup.string().required("Necessário a utilização de senha"),
    }),
    onSubmit: async (values) => {
      console.log(values);

      try {
        setLoading(true);

        const response = await api.post(process.env.NEXT_PUBLIC_SERVER_URL, {
          email: formik.values.email,
          password: formik.values.password,
        });
        setLoading(false);
      } catch (e) {
        formik.setErrors({ password: "Email ou senha estão incorretos" });
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        alignContent='center'
        m='0 auto'
        mt='34px'
        w={{ base: 320, sm: 400, md: 500 }}
      >
        <Link href='/introduction' fontSize='14px'>
          Voltar a página anterior
        </Link>

        <FormControl mt='16px' isInvalid={!!formik.errors.email}>
          <FormLabel>Email </FormLabel>
          <Input
            placeholder='Email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          ) : (
            <FormHelperText>Esse campo so aceita email.</FormHelperText>
          )}
        </FormControl>

        <FormControl mt='16px' isInvalid={!!formik.errors.password}>
          <FormLabel>Senha</FormLabel>
          <Input
            type='password'
            placeholder='Senha'
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          ) : (
            <FormHelperText>Informe a senha.</FormHelperText>
          )}
        </FormControl>

        <Box align='center' mt='16px'>
          <Button
            isLoading={loading}
            isFullWidth
            colorScheme='green'
            m='0 auto'
            type='submit'
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Login;
