import React from 'react';
import Link from 'next/link';
import {
    Heading, 
    Flex
  } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex width="100vw" alignItems="center" height="10vh"background="#000" color="#fff">
        <Heading ml="5vw" flex="0.5">?Bored</Heading>
        <Flex flex="0.8"  alignItems="center" justifyContent="space-evenly">
            <Link href="/">Home</Link>
            <Link href="/tasks">Tasks</Link>
            <Link href="/blogs">Blogs</Link>
        </Flex>
    </Flex>
  )
}

export default Header;
