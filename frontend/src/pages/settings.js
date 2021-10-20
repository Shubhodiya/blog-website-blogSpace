import React, { useContext, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import { FaUpload } from "react-icons/fa";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Image,
    Stack,
    Center,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Divider,
  } from '@chakra-ui/react';
import { Context } from '../context/Context';
import axios from 'axios';
  
  export default function Settings() {
    
    const PF = "http://localhost:5000/images/"

    const {user, dispatch, isFetching} = useContext(Context)
    const [success, setSuccess] = useState(false);
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [file, setFile] = useState("");

    const handleSubmit= async (e)=>{
        e.preventDefault();
        dispatch({type: "UPDATE_START"})
        const updatedUser = {
            userId: user._id,
            username, 
            email,
            password,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now()+file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try{
                await axios.post("/upload", data);
               
            }catch(err){
                console.log(err)
                dispatch({type: "UPDATE_FAILURE"})
            }
        }
        try{
            const res = await axios.put(`/users/${user._id}`, updatedUser);
            setSuccess(true)
            dispatch({type: "UPDATE_SUCCESS", payload: res.data})
            window.location.replace("/")
        }catch(err){
            console.log(err);
        }
    };

    const handleDelete = async()=>{
        try{
            await axios.delete(`/users/${user._id}`, {data: {userId: user._id}})
            
        }catch(err){
            console.log(err);
        }
        // dispatch({type: "LOGOUT"})
        
    }

    console.log(user)
    return (
      <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Update your account</Heading>
          {
          success ? <Text color={"green.500"}>Profile Updated Successfully!</Text> :
          ""
          }
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
            <FormControl my={5} id="profile">
                <FormLabel>Profile Photo</FormLabel>
                <FormLabel htmlFor="profile" cursor={"pointer"} >
                <Center>
                 <Image src={
                    file ? URL.createObjectURL(file) 
                    :
                    PF + user.profilePic
                    }
                w={"200px"}
                h={"200px"}
                borderRadius={"50%"} 
                style={{objectFit: "fit"}}
                />
            </Center>
                    <Text as="span" > <FaUpload/></Text>
                    </FormLabel>
                <Input type="file" name="file" id="profile" display={"none"} onChange={e=>setFile(e.target.files[0])}/>
            </FormControl>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input placeholder={user.username} value={username} type="text" onChange={(e)=>setUsername(e.target.value)} />
              </FormControl>
              <FormControl id="email" isRequired my={5}>
                <FormLabel>Email</FormLabel>
                <Input placeholder={user.email}  type="email" onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input placeholder="************" type="password" onChange={(e)=>setPassword(e.target.value)} />
              </FormControl>
              <Button
                  mt={"20px"}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} type={"submit"}>
                  Update
                </Button>
              </form>
                <Divider/>
                <Text color={'red.500'} onClick ={handleDelete} cursor={"pointer"} >Delete Account</Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }