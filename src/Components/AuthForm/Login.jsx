import { Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  return (
    <>
      <Input
        placeholder='Email'
        fontSize={14}
        type='email'
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        data-testid='auth-form-email'
      />
      <Input
        placeholder='Password'
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        fontSize={14}
        type='password'
        value={inputs.password}
        data-testid='auth-form-password'
      />
      <Button
        w={'full'}
        colorScheme={'blue'}
        size={'sm'}
        fontSize={14}
        data-testid='auth-form-btn'
      >
        {'Log in'}
      </Button>
    </>
  );
};

export default Login;
