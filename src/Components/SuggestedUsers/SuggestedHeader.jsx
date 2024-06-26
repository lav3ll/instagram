import React from 'react';
import { Flex, Avatar, Text } from '@chakra-ui/react';

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar name='lavell testing name' src='/img1.png' size={'lg'} />
        <Text fontSize={12} fontWeight={'bold'}>
          lavell
        </Text>
      </Flex>
    </Flex>
  );
};

export default SuggestedHeader;
