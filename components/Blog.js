import {
    Box,
    Center,
    Text,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export const Blog = ({ blog }) => {
    return (
      <Center py={6}>
        <Box
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          border="1px solid #c4c4c4"
          rounded={'md'}
          p={6}
          key={blog.id}
          overflow={'hidden'}>
          <Stack>
  
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
                  {blog.title}
            </Text>
  
            <Text color={'black'}>
                {blog.body}
            </Text>
  
          </Stack>
        </Box>
      </Center>
    );
  }
  