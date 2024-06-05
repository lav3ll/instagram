import React from 'react';
import { Box, VStack, Image, Input } from '@chakra-ui/react';

const AuthForm = () => {
  return (
    <Box border={'1px solid'} borderRadius={'4'} padding={5}>
      <VStack spacing={4}>
        <Image src='/logo.png' h={24} cursor='pointer' alt='instagram' />
        <Input placeholder='Email' onChange={''} fontSize={14} type='email' />
        <Input
          placeholder='Password'
          onChange={''}
          fontSize={14}
          type='password'
        />
      </VStack>
    </Box>
  );
};

export default AuthForm;
