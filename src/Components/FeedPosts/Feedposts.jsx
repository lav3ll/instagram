import React from 'react';
import { Container } from '@chakra-ui/react';
import FeedPost from './FeedPost';

const Feedposts = () => {
  return (
    <Container
      maxW={'container.sm'}
      py={10}
      px={2}
      data-testid='data-feedposts'
    >
      <FeedPost username='lav3ll' avatar='/img1.png' />
      <FeedPost username='norbert' avatar='/img2.png' />
      <FeedPost username='lewis' avatar='/img3.png' />
      <FeedPost username='cordell' avatar='/img4.png' />
    </Container>
  );
};

export default Feedposts;
