import { React, useState } from 'react';
import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleAuth = () => {
    console.log('inputs', inputs);
  };
  return (
    <>
      <Box border={'1px solid'} borderRadius={'4'} padding={5} datatype>
        <VStack spacing={4}>
          <Image src='/logo.png' h={24} cursor='pointer' alt='instagram' />
          <Input
            placeholder='Email'
            fontSize={14}
            type='email'
            value={inputs.email}
            // When login button is clicked only update the state of the email property
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder='Password'
            // When login button is clicked only update the state of the password property
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            fontSize={14}
            type='password'
            value={inputs.password}
          />
          {!isLogin ? (
            <Input
              placeholder='Confirm Password'
              fontSize={14}
              type='password'
              value={inputs.confirmPassword}
              // When login button is clicked only update the state of the confirm password property
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}
          <Button
            w={'full'}
            colorScheme={'blue'}
            size={'sm'}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? 'login' : 'Sign Up'}

            {/* Or text */}
          </Button>
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            my={4}
            gap={1}
            w={'full'}
          >
            <Box flex={2} h={'1px'} bg={'gray.400'} />
            <Text mx={1} color={'white'}>
              OR
            </Text>
            <Box flex={2} h={'1px'} bg={'gray.400'} />
          </Flex>

          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            cursor={'pointer'}
          >
            <Image src='/google.png' w={5} alt='google logo' />
            <Text mx={2} color={'white'}>
              Log in with google
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={'1px solid gray'} borderRadius={4}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account" : 'Already have an account?'}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={'blue.500'}
            cursor={'pointer'}
          >
            {isLogin ? 'Sign Up' : 'Log in'}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
