import React from "react";
import { Button, Flex, Box, Text } from "@chakra-ui/react";

import { useRouter } from "next/router";

function Introduction() {
  const router = useRouter();
  return (
    <>
      <Flex justifyContent='center' mt='15px'>
        <Text>Sejam bem vindos. </Text>
      </Flex>{" "}
      <Flex justifyContent='center' mt='15px'>
        <Text>Clique nos botões abaixo para navegar pela estrutura. </Text>
      </Flex>
      <Flex justifyContent='center' direction='row' mt='14px' fontSize='18px'>
        <Button
          mt='16px'
          backgroundColor='green'
          color='white'
          size='lg'
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
        <Box ml='15px' />
        <Button
          mt='16px'
          backgroundColor='gray'
          color='white'
          size='lg'
          onClick={() => router.push("/register")}
        >
          Register
        </Button>
      </Flex>
      <Flex justifyContent='center' mt='15px'>
        <Text>Desenvolvido por Ernani Ávila. </Text>
      </Flex>
    </>
  );
}
export default Introduction;
