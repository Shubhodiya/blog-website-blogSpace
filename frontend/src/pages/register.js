import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Divider,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
  
  export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [error, setError] = useState(false);
    const handleSubmit= async (e)=>{
      setError(false)
      e.preventDefault();
      try{
      const res = await axios.post("/auth/register", {
        username,
        email, 
        password
      })
      res.data && window.location.replace("/login")
    }catch(err){
      setError(true)
    }
    }
    return (
      <Flex
        p="0"
        m="0"
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={5} mx={'auto'} maxW={'md'} py={5} px={2}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} align={'center'}>Welcome to BlogSpace;</Heading>
          </Stack>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
            <FormControl id="firstName" isRequired my={5}>
                <FormLabel>Name</FormLabel>
                <Input placeholder="John Doe" type="text"  onChange={e=>setUsername(e.target.value)} />
            </FormControl>
              <FormControl id="email" isRequired my={5}>
                <FormLabel>Email</FormLabel>
                <Input placeholder="john.doe@email.com" type="email" onChange={e=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired my={5}>
                <FormLabel>Password</FormLabel>
                <Input placeholder="********" type="password" onChange={e=>setPassword(e.target.value)}/>
              </FormControl >
              <Stack spacing={2}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} type={"submit"}>
                  Create Account
                </Button>
                {error && <Text as="span" color={'red.300'} m={0} p={0}>Something went wrong, try using a new username</Text>}
                <Text>Already have an account?<Text as="span" color={'blue.400'}><Link to="/login" className="link"> Login</Link></Text></Text>
                <Divider />
                <Text>Use Temporary Details to Login <br/> Username: <strong> Temp User</strong><br/>Email: <strong>temp_user@gmail.com</strong> <br/>Password: <strong>temp_user123</strong></Text>
              </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }