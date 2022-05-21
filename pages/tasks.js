import React from 'react';
import Head from 'next/head';
import Router from 'next/router'
import { motion } from 'framer-motion';
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { Task } from '../components/Task';

export default function tasks ({ task }){

    return (
        <Box>
            <Head>
                <title>Bored Tasks</title>
                <meta name="description" content="Bored? Got some free generated tasks for you..." />
                <link rel="icon" href="/icon.png" />
            </Head>

            <Box 
                as={motion.div}  
                mt="15vh" 
                display="flex" 
                justifyContent="center" 
                flexDirection="column"
                animate={{ x: [ -100, 0-1], opacity: [ 0, 0.3, 0.5, 0.7, 1 ] }}
                animation="0.3s ease-in">

                <Flex flexDirection="column" justifyContent="center">
                    <Heading textAlign="center" fontSize="40px">Bored Tasks</Heading>

                    <Box>
                        <Flex justifyContent="center" flexDirection="column">
                            <Task task={task} />
                            <Text textAlign="center">Refresh Page to get another task</Text>
                        </Flex>
                    </Box>

                </Flex>
                
            </Box>
        </Box>
    )
}

export const getStaticProps = async() => {
    const data = await fetch("https://www.boredapi.com/api/activity");
    const task = await data.json();

    return {
        props: { task },
        revalidate: 5
    }
}
