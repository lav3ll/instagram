import { Flex, Box, Avatar } from '@chakra-ui/react';
import React from 'react';

const PostHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src='/img1.png' alt={'user profile pic'} size={'sm'} />
      </Flex>
      <Box> </Box>
    </Flex>
  );
};

export default PostHeader;
