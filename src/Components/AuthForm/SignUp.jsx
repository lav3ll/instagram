import { useState } from 'react';
import { Input, InputGroup } from '@chakra-ui/react';
const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Input
        placeholder='Email'
        fontSize={14}
        type='email'
        size={'sm'}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        data-testid='auth-form-email'
      />
      <Input
        placeholder='Username'
        fontSize={14}
        type='text'
        size={'sm'}
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        data-testid='auth-form-email'
      />
      <Input
        placeholder='Full Name'
        fontSize={14}
        type='text'
        size={'sm'}
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        data-testid='auth-form-email'
      />
      <InputGroup>
        <Input
          placeholder='Password'
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          fontSize={14}
          type={showPassword ? 'text' : 'password'}
          size={'sm'}
          value={inputs.password}
          data-testid='auth-form-password'
        />
      </InputGroup>
    </>
  );
};

export default SignUp;
