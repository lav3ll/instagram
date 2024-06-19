import React from 'react';
import { Container, Flex, Box } from '@chakra-ui/react';
import Feedposts from './FeedPosts/Feedposts';

const HomePage = () => {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        <Box
          flex={2}
          py={10}
          data-testid='data-homepage'
          border={'1px solid blue'}
        >
          <Feedposts />
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: 'none', lg: 'block' }}
          maxW={'300px'}
          border={'1px solid red'}
          data-testid='data-suggested'
        >
          Suggested Users
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
