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
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Home() {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Campo obrigatório"),
      email: Yup.string()
        .email("Email está no formato invalido")
        .required("Campo obrigatório"),
      password: Yup.string()
        .min(2, "Senha muito curta")
        .max(50, "Senha muito longa")
        .required("Necessário a utilização de senha"),
      passwordConfirmation: Yup.string()
        .min(2, "Senha muito curta")
        .max(50, "Senha muito longa")
        .required("Necessário a utilização de senha")
        .test(
          "passwordConfirmation",
          "As senhas não conferem",
          (value, item) => {
            return value === item.parent.passwordConfirmation;
          }
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      try {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (e) {
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
        <FormControl mt='16px' isInvalid={!!formik.errors.name}>
          <FormLabel>Nome completo </FormLabel>
          <Input
            placeholder='Nome'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
          ) : (
            <FormHelperText>Esse campo so aceita nomes.</FormHelperText>
          )}
        </FormControl>
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
            <FormHelperText>Esse campo so aceita senhas fortes.</FormHelperText>
          )}
        </FormControl>

        <FormControl mt='16px' isInvalid={!!formik.errors.passwordConfirmation}>
          <FormLabel>Confirme a senha</FormLabel>
          <Input
            type='password'
            placeholder='Senha'
            name='passwordConfirmation'
            onChange={formik.handleChange}
            value={formik.values.passwordConfirmation}
          />
          {formik.errors.passwordConfirmation ? (
            <FormErrorMessage>
              {formik.errors.passwordConfirmation}
            </FormErrorMessage>
          ) : null}
        </FormControl>

        <Box align='center' mt='16px'>
          <Button
            isLoading={loading}
            isFullWidth
            colorScheme='green'
            m='0 auto'
            spinnerPlacement='end'
            type='submit'
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default Home;
