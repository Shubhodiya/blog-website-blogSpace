import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import {
    Divider,
    Box,
    Heading,
    Text,
    Flex,
    Wrap,
    WrapItem,
    Spacer,
    HStack,
    Center,
    useColorModeValue
  } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Context } from "../context/Context";

const NavBar = () =>{
   const {user, dispatch} = useContext(Context);
   
   const handleLogout=()=>{
    dispatch({type:"LOGOUT"});
   }
    return(
        <Box >  
        <HStack m ="0" p="2" borderRadius={5} bg={useColorModeValue('blue.50', 'blue.400')}>
        <Link to="/"><Center h="10" justifySelf="flex-start"><Heading as="h3" size="lg" color={useColorModeValue('blue.400', 'white')}>BlogSpace;</Heading></Center></Link>
          <Spacer />
          <Box justifySelf="self-end">
          <Wrap>
           { user ?  
            <WrapItem>
              <Link to ="/write"><Center h="10" m="2"> <Text size="md"> Write</Text> </Center></Link>
            </WrapItem>
            : ""
          }
            <WrapItem>
              <Link to ="/blogs"><Center  h="10" m="2"> <Text size="md"> Blogs</Text> </Center></Link>
            </WrapItem>

            { 
            user ? 
            <WrapItem>
             <Center  h="10" m="2" cursor={"pointer"}> <Text onClick={handleLogout} size="md"> Logout</Text> </Center>
            </WrapItem> 
            : 
            <WrapItem>
              <Link to ="/login"><Center  h="10" m="2"> <Text size="md"> Login</Text> </Center></Link>
            </WrapItem>
            }
            {!user ? 
            <WrapItem>
              <Link to ="/register"><Center  h="10" m="2"> <Text size="md"> Register</Text> </Center></Link>
            </WrapItem>
            :""
            }
   
            
              <Center><ColorModeSwitcher justifySelf="flex-end" /></Center>
          </Wrap>
          </Box>
        </HStack>
        <Divider py={2}/>
        </Box>
        
    )
}

export default NavBar;