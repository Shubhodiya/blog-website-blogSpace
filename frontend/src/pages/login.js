import React, { useContext, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { Context } from '../context/Context';
import axios from 'axios';
  
  export default function Login() {
    const userRef = useRef()
    const passwordRef = useRef()
    const {user, dispatch, isFetching} = useContext(Context)
    const [error, setError] = useState(false);

    const handleSubmit = async (e)=>{
      setError(false);
      e.preventDefault();
      dispatch({type:"LOGIN_START"});
      try{
        const res = await axios.post("/auth/login", {
          username: userRef.current.value,
          password: passwordRef.current.value,
        });
        console.log(res);
        
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        res.data && window.location.replace("/")
      }catch(err){
        const errMsg = user ? false : true;
        setError(errMsg)
        dispatch({type:"LOGIN_FAILURE"});
      }
    }
    console.log(user)
    return (
      <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input placeholder="John Doe" type="text" ref={userRef} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input placeholder="************" type="password" ref={passwordRef} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Text as="span" color={'blue.400'}>Forgot password?</Text>
                </Stack>
                <Stack>
                <Button
                  disabled={isFetching}
                  type={"submit"}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
                {error && <Text as="span" color={'red.300'} m={0} p={0}>Something went wrong, check your credentials</Text>}
                <Text>New to BlogSpace; ?<Text as="span" color={'blue.400'}><Link to="/register" className="link"> Create Account</Link></Text></Text>
                </Stack>
              </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }