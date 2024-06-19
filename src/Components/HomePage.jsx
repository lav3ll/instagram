import React from 'react';
import { Container, Flex, Box } from '@chakra-ui/react';
import Feedposts from './FeedPosts/Feedposts';

const HomePage = () => {
  return (
    <Container maxW={'conteiner.lg'}>
      <Flex gap={20}>
        <Box
          flex={2}
          py={10}
          test-dataid='data-feedposts'
          border={'1px solid blue'}
        >
          <Feedposts />
        </Box>
        <Box
          flex={3}
          mr={20}
          dislay={{ base: 'none', lg: 'block' }}
          maxW={'300px'}
          border={'1px solid red'}
          test-dataid='data-suggested'
        >
          Suggested Users
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
