import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

export const Task = ({ task }) => {
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
        overflow={'hidden'}>
        <Stack>

          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
                {task.activity}
          </Text>

          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {task.type}
          </Heading>

          <Text color={'gray.500'}>
                Participants: {task.participants}
          </Text>

          <Text>
              Price: £{task.price}
          </Text>

        </Stack>
      </Box>
    </Center>
  );
}
