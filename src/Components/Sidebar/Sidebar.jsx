import { Avatar, Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import AiFillHome from 'react-icons/ai';
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from '../../assets/constants';

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: 'Home',
      link: '/',
    },
    {
      icon: <SearchLogo />,
      text: 'search',
    },
    {
      icon: <NotificationsLogo />,
      text: 'Notification',
    },
    {
      icon: <CreatePostLogo />,
      text: 'Create',
    },
    {
      icon: <Avatar size={'sm'} name='Lavell Francis' src='/profile.png' />,
      text: 'Profile',
      link: '/lav3ll',
    },
  ];
  return (
    <Box
      height={'100vh'}
      border={'1px solid'}
      borderColor={'whiteAlpha.300'}
      py={8}
      position={'sticky'}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={'column'} gap={10} w={'full'} height={'full'}>
        <Link
          to={'/'}
          as={RouterLink}
          pl={2}
          display={{ base: 'none', md: 'block' }}
          cursor={'pointer'}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={'/'}
          as={RouterLink}
          pl={2}
          display={{ base: 'block', md: 'none' }}
          cursor={'pointer'}
          borderRadius={6}
          _hover={{ bg: 'whiteAlpha.200' }}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>
      </Flex>
    </Box>
  );
};

export default Sidebar;
