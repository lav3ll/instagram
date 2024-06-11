import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from '../../Components/Sidebar/Sidebar';

const PageLayout = ({ children }) => {
  const pathname = useLocation();
  return (
    <Flex>
      {/* sidebar on the left */}
      <Box w={{ base: '70px', md: '240px' }}>
        <Sidebar />
      </Box>
      {/* right side content */}
      <Box>{children}</Box>
    </Flex>
  );
};

export default PageLayout;
