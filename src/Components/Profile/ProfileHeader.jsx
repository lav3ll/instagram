import React from 'react';
import {
  Flex,
  Avatar,
  AvatarGroup,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: 'column', sm: 'row' }}
    >
      <AvatarGroup
        size={{ base: 'xl', md: '2xl' }}
        justifySelf={'center'}
        alignSelf={'center'}
        mx={'auto'}
      >
        <Avatar name='lavell' src={'/profilepic.png'} alt='lav3ll'></Avatar>
      </AvatarGroup>

      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex
          gap={4}
          direction={{ base: 'column', sm: 'row' }}
          justifyContent={{ base: 'center', sm: 'flex-start' }}
          alignItems={'center'}
          w={'full'}
        >
          <Text fontSize={{ base: 'sm', md: 'lg' }}>lav3ll</Text>
          <Flex gap={4} alignItems={'center'} m justifyContent={'center'}>
            <Button
              bg={'white'}
              color={'black'}
              _hover={{ bg: 'whiteAlpha.800' }}
              size={{ base: 'xs', md: 'sm' }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems={'center'} gap={{ base: 2, sm: 4 }}>
          <Text>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              1000
            </Text>
            Followers
          </Text>
          <Text>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              820
            </Text>
            Following
          </Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
