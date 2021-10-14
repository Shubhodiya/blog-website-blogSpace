import {Link} from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  Center,
  Image,
  Button,
  Spacer,
  Heading,
  Textarea,
  Text,
  Divider,
  VStack,
  HStack,
  Avatar,
  FormControl,
  Input,
  FormLabel,
  useColorModeValue,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../context/Context';

const Write = ()=>{
    const {user, dispatch} = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState("");

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const newPost = {
            username: user.username,
            title, 
            desc
        };
        if(file){
            const data = new FormData();
            const filename = Date.now()+file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.postCover = filename;
            try{
                await axios.post("/upload", data);
            }catch(err){
                console.log(err)
            }
        }
        try{
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/"+res.data._id);
        }catch(err){
            console.log(err);
        }
    };

    return(
        <Flex >
            <Center w={"100%"}>
            <VStack w={"90%"} py={10}>
            { file && (
                <Image src={URL.createObjectURL(file)}
                w={"100%"}
                h={"200px"}
                borderRadius={5} 
                style={{objectFit: "cover"}}
            />)}
            <form  w={"100%"} py={10} onSubmit={handleSubmit}>
            <FormControl w={"90vw"} py={10} id="postCover">
                <FormLabel htmlFor="postCover" cursor={"pointer"} ><Text as="span" ><AddIcon/></Text></FormLabel>
                <Input type="file" name="file" id="postCover" display={"none"} onChange={e=>setFile(e.target.files[0])}/>
            </FormControl>
            <FormControl id="title" isRequired>
                <FormLabel >Title</FormLabel>
                <Input autoFocus={true} 
                placeholder="Enter blog title here" 
                type="text" 
                border ={"none"}
                onChange={e=>setTitle(e.target.value)}
                />
            </FormControl>
            <FormControl id="desc" isRequired>
                <FormLabel >Description</FormLabel>
                <Textarea placeholder="Start writing here..." 
                onChange={e=>setDesc(e.target.value)}
                type="text" 
                border ={"none"}
                height={"180px"}/>
            </FormControl>
            <Button bg={'blue.400'}
                type={"submit"}
                color={'white'}
                _hover={{
                bg: 'blue.500',   
            }}>
                Publish Post
                </Button>
              </form>
                <Divider py ={10} my={10}/>
            </VStack>
            </Center>
        </Flex>
    )
}

export default Write;