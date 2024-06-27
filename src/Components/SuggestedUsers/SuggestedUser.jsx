import React from 'react';
import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react';

const SuggestedUser = ({ followers, avatar, name }) => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} name={name} size={'md'}></Avatar>
        <VStack spacing={2}>
          <Box fontSize={12} fontWeight={'bold'}>
            {name}
          </Box>
          <Box fontSize={11} fontWeight={'gray.500'}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button></Button>
    </Flex>
  );
};

export default SuggestedUser;
