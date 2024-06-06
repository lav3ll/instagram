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
  return (
    <>
      <Box border={'1px solid'} borderRadius={'4'} padding={5} datatype>
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
            <Input
              placeholder='Confirm Password'
              fontSize={14}
              type='password'
            />
          ) : null}
          <Button w={'full'} colorScheme={'blue'} size={'sm'} fontSize={14}>
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
