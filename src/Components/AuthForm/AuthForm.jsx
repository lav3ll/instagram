import { React, useState } from 'react';
import { Box, VStack, Image, Input, Button } from '@chakra-ui/react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
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
        {!isLogin ? (
          <Input placeholder='Confirm Password' fontSize={14} type='password' />
        ) : null}
        <Button w={'full'} colorScheme={'blue'} size={'sm'} fontSize={14}>
          {isLogin ? 'login' : 'Sign Up'}
        </Button>
      </VStack>
    </Box>
  );
};

export default AuthForm;
