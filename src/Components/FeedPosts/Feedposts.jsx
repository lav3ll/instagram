import React from 'react';
import {
  Container,
  SkeletonCircle,
  VStack,
  Flex,
  Skeleton,
  Box,
} from '@chakra-ui/react';
import FeedPost from './FeedPost';
import { useState, useEffect } from 'react';

const Feedposts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container
      maxW={'container.sm'}
      py={10}
      px={2}
      data-testid='data-feedposts'
    >
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={'flex-start'}>
                <SkeletonCircle w={'200px'} h={'10px'} />
                <SkeletonCircle w={'200px'} h={'10px'} />
              </VStack>
            </Flex>
            <Skeleton w={'full'}>
              <Box h={'500px'}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost username='lav3ll' avatar='/img1.png' img='/img1.png' />
          <FeedPost username='norbert' avatar='/img2.png' img='/img2.png' />
          <FeedPost username='lewis' avatar='/img3.png' img='/img3.png' />
          <FeedPost username='cordell' avatar='/img4.png' img='/img4.png' />
        </>
      )}
    </Container>
  );
};

export default Feedposts;
