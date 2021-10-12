import {Link} from 'react-router-dom';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  Center,
  Image,
  Spacer,
  Heading,
  Text,
  Divider,
  VStack,
  HStack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

const SinglePost = ()=>{
    const [post, setPost] = useState({});
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    console.log(path);
    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get("/posts/"+path);
            console.log(res);
            setPost(res.data);
        }
        getPost();
    }, [path])
    return(
        <Flex>
            <VStack>
            
                <Heading my={5}>
                    {post.title}
                </Heading>
          
                {post.postCover && (<Image src={post.postCover}
                w={"100%"}
                h={"300px"}
                borderRadius={5} 
                style={{objectFit: "cover"}}
                />)}
                <VStack>
                <Link to={`/?user=${post.username}`}>
                    <Heading as="h4" size={"sm"} marginTop={3}>{post.username}</Heading>
                </Link>
                    <Box>
                    <EditIcon color={"blue.300"} h={5} w={5} mx={2}/>
                    <DeleteIcon color={"red.300"} h={5} w={5} mx={2}/>
                    </Box>
                </VStack> 
                <Text>
                {post.desc}
                </Text>  
                <Divider py ={10} my={10}/>
            </VStack>
        </Flex>
    )
}

export default SinglePost;