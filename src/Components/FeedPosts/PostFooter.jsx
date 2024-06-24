import React from 'react';
import { useState } from 'react';
import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
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
      setLikes(likes + 1);
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
        lav3ll{/*Ussername */}
        <Text as={'span'} fontWeight={400}>
          I look Good{/*Description */}
        </Text>
      </Text>
      <Text fontSize='sm' color={'gray'}>
        View all 1,000 comments {/*Number of comments*/}
      </Text>
      <Flex
        alignItems={'center'}
        gap={2}
        justifyContent={'space-between'}
        w={'full'}
      >
        <InputGroup>
          <Input
            type='text'
            variant={'flushed'}
            placeContent={'add a comment...'}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={'blue.500'}
              fontWeight={600}
              cursor={'pointer'}
              _hover={{ color: 'white' }}
              bg={'transparent'}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </>
  );
};

export default PostFooter;
