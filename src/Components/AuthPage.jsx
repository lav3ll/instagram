import { Flex, Container, VStack, Box, Image } from '@chakra-ui/react';
import AuthForm from './AuthForm/AuthForm';
import React from 'react';

const AuthPage = () => {
  return (
    <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'} px={4}>
      <Container maxW={'container.md'} padding={0}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
          <Box display={{ base: 'none', md: 'block' }}>
            {/* Left side */}
            <Image src='/auth.png' h={650} alt='Phone image' />
          </Box>
          <VStack spacing={4} align={'stretch'}>
            <AuthForm />
            <Box textAlign={'center'}>Get the app.</Box>
            <Flex gap={5} justifyContent={'center'}>
              <Image src='/playstore.png' h={10} alt={'playstore logo'} />
              <Image src='/microsoft.png' h={10} alt={'microsoft logo'} />
            </Flex>
          </VStack>
        </Flex>
        {/* Right side */}
      </Container>
    </Flex>
  );
};

export default AuthPage;
