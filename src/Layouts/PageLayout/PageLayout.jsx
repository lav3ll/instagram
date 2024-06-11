import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from '../../Components/Sidebar/Sidebar';

const PageLayout = ({ children }) => {
  const pathname = useLocation();
  return (
    <Flex>
      {/* sidebar on the left */}
      // if there path is not equal to auth, render sidebar
      {pathname !== '/auth' ? (
        <Box w={{ base: '70px', md: '240px' }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* right side content */}
      <Box>{children}</Box>
    </Flex>
  );
};

export default PageLayout;
