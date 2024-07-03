import { Box, Flex, Text } from '@chakra-ui/react';
import { BsBookmark, BsGrid3X3, BsSuitHeart } from 'react-icons/bs';
import React from 'react';

const ProfileTabs = () => {
  return (
    <Flex
      w={'full'}
      justifyContent={'center'}
      gap={{ base: 4, sm: 10 }}
      textTransform={'uppercase'}
      fontWeight={'bold'}
      data-testid={'test-profiletabs'}
    >
      <Flex
        borderTop={'1px solid white'}
        alignItems={'center'}
        p={3}
        gap={1}
        cursor={'pointer'}
      >
        <Box fontSize={20}>
          <BsGrid3X3 data-testid={'test-logoGrid'} />
        </Box>
        <Text fontSize={12} display={{ base: 'none', sm: 'block' }}>
          Posts
        </Text>
      </Flex>

      <Flex alignItems={'center'} p={3} gap={1} cursor={'pointer'}>
        <Box fontSize={20}>
          <BsBookmark data-testid={'test-logoBookmark'} />
        </Box>
        <Text fontSize={12} display={{ base: 'none', sm: 'block' }}>
          SAVED
        </Text>
      </Flex>
      <Flex alignItems={'center'} p={3} gap={1} cursor={'pointer'}>
        <Box fontSize={20}>
          <BsSuitHeart fontWeight={'bold'} data-testid={'test-logoHeart'} />
        </Box>
        <Text fontSize={12} display={{ base: 'none', sm: 'block' }}>
          LIKES
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
