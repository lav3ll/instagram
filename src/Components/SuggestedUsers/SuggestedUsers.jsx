import { VStack } from '@chakra-ui/react';
import SuggestedHeader from './SuggestedHeader';
import React from 'react';

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
    </VStack>
  );
};

export default SuggestedUsers;
