import { Flex, Box, Avatar, Text } from '@chakra-ui/react';
import React from 'react';

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      w={'full'}
      my={2}
      data-testid='data-postheader'
    >
      <Flex alignItems={'center'} gap={2}>
        <Avatar
          src={avatar}
          alt='user profile pic'
          size={'sm'}
          aria-label='user profile pic'
        />
        <Flex fontSize={'12px'} fontWeight={'bold'} gap={2}>
          {username}
        </Flex>
        <Box color={'gray.500'}>•1w</Box>
      </Flex>
      <Box cursor={'pointer'}>
        <Text
          fontSize={12}
          color={'blue.500'}
          fontWeight={'bold'}
          _hover={{
            color: 'white',
          }}
          transition={'0.2s ease-in-out'}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
