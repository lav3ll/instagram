import React from 'react';
import { useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from '../../assets/constants';

const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleClick = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLiked(likes + 1);
    }
  };

  return (
    <>
      <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={'auto'}>
        <Box onClick={handleClick} cursor={'pointer'} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={'sm'}>
        {likes} likes
      </Text>
      <Text fontSize='sm' fontWeight={700}>
        lav3ll
        <Text as={'span'} fontWeight={400}>
          I look Good
        </Text>
      </Text>
      <Text fontSize='sm' color={'gray'}>
        View all 1,000 comments
      </Text>
    </>
  );
};

export default PostFooter;
