import React from 'react';
import {Link} from 'react-router-dom'
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
  
  export default function Login() {
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
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="John Doe" type="text" />
            </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder="john.doe@email.com" type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input placeholder="********" type="password" />
              </FormControl>
              <Stack spacing={10}>
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
                  }}>
                  Create Account
                </Button>
                <Text>Already have an account?<Text as="span" color={'blue.400'}><Link to="/login" className="link"> Login</Link></Text></Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }