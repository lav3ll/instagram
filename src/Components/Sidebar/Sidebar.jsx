import { Box, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const Sidebar = () => {
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
      Sidebar
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
      </Flex>
    </Box>
  );

  sdd;
};

export default Sidebar;
