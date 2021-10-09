import { Link } from "react-router-dom";
import React from 'react';
import {
    Divider,
    Box,
    Heading,
    Text,
    Flex,
    Spacer,
    HStack,
    Center,
    useColorModeValue
  } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const NavBar = () =>{
    return(
        <>  
        <Box m ="0" p="2" bg={useColorModeValue('white', 'gray.700')}>
        <HStack>
        <Link to="/"><Center h="10" justifySelf="flex-start"><Heading as="h3" size="lg">Brand Logo</Heading></Center></Link>
          <Spacer />
          <Box justifySelf="self-end">
          <HStack>
              <Link to ="/write"><Center h="10" m="2"> <Text size="lg"> Write</Text> </Center></Link>
              <Link to ="/blogs"><Center  h="10" m="2"> <Text size="lg"> Blogs</Text> </Center></Link>
              <Link to ="/login"><Center  h="10" m="2"> <Text size="lg"> Login</Text> </Center></Link>
              <Center><ColorModeSwitcher justifySelf="flex-end" /></Center>
          </HStack>
          </Box>
        </HStack>
        </Box>
        <Divider m="2"/>
        </>
    )
}

export default NavBar;