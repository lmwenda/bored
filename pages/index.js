import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bored Tasks</title>
        <meta name="description" content="Bored? Got some free generated tasks, blogs and much more for you" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Box 
        as={motion.div}  
        mt="25vh" 
        display="flex" 
        justifyContent="center" 
        flexDirection="column"
        animate={{ x: [ -100, 0], opacity: [ 0, 0.3, 0.5, 0.7, 1 ] }}
        animation="0.5s ease-in-out">

          <Heading textAlign="center" fontSize="40px">Bored Tasks</Heading>
          <Text textAlign="center" fontSize="xl">
            Bored? You are given Bored Tasks, Blog to read and much more. Cant wait to start seeing you busy...
          </Text>
          <Flex justifyContent="center" mt="1vh">
            <Button size="md" colorScheme="teal"><Link href="/tasks">Get Started</Link></Button>
          </Flex>
          
      </Box>
    </div>
  )
}
