import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import ProfileHeader from '../Profile/ProfileHeader';
import ProfileTabs from '../Profile/ProfileTabs';
import ProfilePosts from '../Profile/ProfilePosts';

const ProfilePage = () => {
  return (
    <Container maxW={'container-lg'} py={5} data-testid={'test-profileheader'}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={'full'}
        mx={'auto'}
        flexDirection={'colummn'}
      >
        <ProfileHeader />
      </Flex>
      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={'full'}
        mx={'auto'}
        borderTop={'1px solid'}
        borderColor={'whiteAlpha.500'}
        direction={'column'}
      >
        <ProfileTabs data-testid={'test-profiletabs'} />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;
