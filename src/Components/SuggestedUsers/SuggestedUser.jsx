import React from 'react';
import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const SuggestedUser = ({ followers, avatar, name }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      w={'full'}
      data-testid={'test-suggestedUser'}
    >
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} name={name} size={'md'} />
        <VStack spacing={2} align='flex-start'>
          <Box fontSize={12} fontWeight={'bold'} maxW='150px' isTruncated>
            {name}
          </Box>
          <Box fontSize={11} fontWeight={'gray.500'}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        bg={'transparent'}
        p={0}
        h={'max-content'}
        fontWeight={'medium'}
        color={'blue.400'}
        cursor={'pointer'}
        _hover={{ color: 'white' }}
        onClick={() => setIsFollowed(!isFollowed)}
        data-testid={'suggestedUser-btn'}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
